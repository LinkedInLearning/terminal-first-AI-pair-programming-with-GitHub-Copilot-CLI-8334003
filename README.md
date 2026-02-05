# Terminal-First AI Pair Programming with GitHub Copilot CLI
This is the repository for the LinkedIn Learning course `Terminal-First AI Pair Programming with GitHub Copilot CLI`. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

## Course Description

This course gives developers an applied path to using GitHub Copilot CLI in real, day‑to‑day terminal workflows. Instead of focusing on features in isolation, you’ll work inside a single project repository and use Copilot CLI to plan changes, generate code, review output, and run commands safely from the command line. Along the way, you’ll learn how to steer Copilot with slash commands, implement reusable skills, extend workflows with MCP servers, and switch between interactive and non‑interactive modes. You’ll also practice resuming work across sessions and controlling context precisely using file references and shell commands. By the end of the course, you’ll have built a repeatable Copilot CLI workflow you can apply immediately in your own projects.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing

1. To use these exercise files, you must have the following installed:
	- [Node.js](https://nodejs.org/) 22 or higher
	- [Git](https://git-scm.com/)
	- [GitHub Copilot CLI](https://github.com/features/copilot/cli/)
2. Clone this repository into your local machine.
3. Install dependencies and start the server:
   ```bash
   npm install
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Instructor

Kayla Cinnamon

Kayla Cinnamon is a Senior AI Developer Tools Advocate at Microsoft. Formerly the Product Manager for Windows Terminal, Microsoft PowerToys, and Cascadia Code, she works at the intersection of AI, developer experience, and tooling, with a background in software engineering and human-computer interaction.

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/).


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D560DAQGqwRghB1Qw9Q/learning-public-crop_675_1200/B56ZwlmB56JEAY-/0/1770157252555?e=2147483647&v=beta&t=lo8m-a9HZrOujePSF5l_bwtEKFuFVzyVpk9TUH4Nffk

