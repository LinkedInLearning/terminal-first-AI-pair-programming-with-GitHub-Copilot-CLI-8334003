const express = require('express');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

function getDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getCommits(repoPath, since, until) {
  try {
    const output = execFileSync(
      'git',
      ['-C', repoPath, 'log', `--since=${since} 00:00:00`, `--until=${until} 23:59:59`, '--pretty=format:%s\t%an'],
      { encoding: 'utf-8', timeout: 10000 }
    );
    if (!output.trim()) return [];
    return output.trim().split('\n').map(line => {
      const [message, author] = line.split('\t');
      return { message, author };
    });
  } catch (error) {
    console.error('Error fetching commits:', error.message);
    throw error;
  }
}

app.post('/api/standup', (req, res) => {
  const { repoPath } = req.body;

  if (!repoPath) {
    return res.status(400).json({ error: 'Repository path is required' });
  }

  // Resolve symlinks to get the real path
  // Note: In production, consider validating that resolvedPath is within
  // an allowed directory to prevent access to arbitrary filesystem locations
  let resolvedPath;
  try {
    resolvedPath = fs.realpathSync(repoPath);
  } catch (error) {
    return res.status(400).json({ error: 'Path does not exist or cannot be accessed' });
  }

  // Check if it's a git repository
  const gitDir = path.join(resolvedPath, '.git');
  if (!fs.existsSync(gitDir)) {
    return res.status(400).json({ error: 'Not a git repository' });
  }

  const today = getDateString(0);
  const yesterday = getDateString(1);

  const todayCommits = getCommits(resolvedPath, today, today);
  const yesterdayCommits = getCommits(resolvedPath, yesterday, yesterday);

  res.json({
    yesterday: yesterdayCommits,
    today: todayCommits
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
