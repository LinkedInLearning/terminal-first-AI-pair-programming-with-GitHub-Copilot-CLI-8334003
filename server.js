const express = require('express');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

function getDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
}

function getCommits(repoPath, since, until) {
  try {
    const output = execSync(
      `git -C "${repoPath}" log --since="${since} 00:00:00" --until="${until} 23:59:59" --pretty=format:"%s|%an"`,
      { encoding: 'utf-8', timeout: 10000 }
    );
    if (!output.trim()) return [];
    return output.trim().split('\n').map(line => {
      const [message, author] = line.split('|');
      return { message, author };
    });
  } catch {
    return [];
  }
}

app.post('/api/standup', (req, res) => {
  const { repoPath } = req.body;

  if (!repoPath) {
    return res.status(400).json({ error: 'Repository path is required' });
  }

  // Check if path exists
  if (!fs.existsSync(repoPath)) {
    return res.status(400).json({ error: 'Path does not exist' });
  }

  // Check if it's a git repository
  const gitDir = path.join(repoPath, '.git');
  if (!fs.existsSync(gitDir)) {
    return res.status(400).json({ error: 'Not a git repository' });
  }

  const today = getDateString(0);
  const yesterday = getDateString(1);

  const todayCommits = getCommits(repoPath, today, today);
  const yesterdayCommits = getCommits(repoPath, yesterday, yesterday);

  res.json({
    yesterday: yesterdayCommits,
    today: todayCommits
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
