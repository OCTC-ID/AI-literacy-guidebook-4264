[README.md](https://github.com/user-attachments/files/32622549/README.md)
# AI Literacy Faculty Playbook

A faculty guide to the **BE Framework**: five habits students develop to use AI thoughtfully in their learning and work.

**View the playbook:** https://octc-id.github.io/AI-literacy-guidebook-4264/

## What this is

The BE Framework is a student-centered translation of the [Digital Education Council (DEC) AI Literacy Framework](https://www.digitaleducationcouncil.com/post/digital-education-council-ai-literacy-framework) (2025). It turns DEC's dimensions into five behaviors students can practice, notice, and reflect on across their courses:

| Behavior | The question students ask |
|---|---|
| **BE Safe** | Do I understand this tool well enough to make smart decisions about how I use it and what I share? |
| **BE Honest** | Am I accurately representing my own work and my use of AI? |
| **BE Critical** | Have I evaluated this information before trusting or using it? |
| **BE Responsible** | Am I making an intentional choice and taking ownership of the outcome? |
| **BE Reflective** | How is AI affecting my thinking, learning, and professional growth? |

Students develop each behavior through three stages: **Introduction**, **Exploration**, and **Application**. The playbook is a coaching resource for faculty. It is not a policy, a mandate, or a grading rubric.

Appendix A explains how each BE behavior maps to the DEC dimensions.

## What's in each BE page

- Purpose
- Developmental progression (Introduction, Exploration, Application)
- I Can statements
- Habits in practice
- Where the behavior fits naturally in a course
- Blackboard Ultra Quick Wins with sample prompts
- Tips for supporting student growth
- Student reflection prompts

## File structure

```
index.html                    Home page
css/styles.css                All site styles
images/                       Logo and home page artwork
pages/
  welcome.html                Welcome to the BE Framework
  using-the-playbook.html     How to Use This Playbook
  be-safe.html                BE Safe
  be-honest.html              BE Honest
  be-critical.html            BE Critical
  be-responsible.html         BE Responsible
  be-reflective.html          BE Reflective
  appendix-a.html             Appendix A: DEC alignment
```

Page order (arrow navigation): Welcome → How to Use → BE Safe → BE Honest → BE Critical → BE Responsible → BE Reflective → Appendix A.

## Adapting this playbook for your campus

Other colleges are welcome to build their own version. The content is written to be campus-neutral, so most of it can be used as is. To make your own copy:

1. Copy the repository to your own GitHub account (or download the files).
2. Replace the logo in `images/` and update the `alt` text on each page.
3. Update the © line in the site footer on each page.
4. Add any campus-specific material (local policies, program examples, your own crosswalks) as a separate appendix, so the core pages stay easy to update.

The Blackboard Ultra Quick Wins assume Blackboard Ultra, including Bb Video Studio and AI Chat Conversation.

Questions, or interested in adapting the playbook? Contact Stephanie Self, Instructional Designer, Owensboro Community & Technical College, at stephanie.self@kctcs.edu.

## Notes for editing

- **Stylesheet caching:** every page links to the stylesheet with a version tag (`styles.css?v=9`). After changing `styles.css`, increase the number on every page that uses the change so browsers load the new version.
- **Two page styles:** Welcome, How to Use, and the appendices use the `intro-page` class on `<body>` for an open layout that matches the home page. The five BE pages use the navy header card. Keep new reference pages on `intro-page`.
- **Stage settings:** the short line under each stage name on the BE pages ("First-Year Experience courses," etc.) uses the `stage-context` class. These are typical examples, not placements.
- **Accessibility:** keep the viewport tag, alt text, and `visually-hidden` labels in place. Links that open a new tab include a hidden "(opens in a new tab)" note for screen readers.

## Version

Version 3.0, October 2026
