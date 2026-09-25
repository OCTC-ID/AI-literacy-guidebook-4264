
# AI Literacy Faculty Playbook and BE the Change Workbook

Two connected faculty resources for the **BE Framework**, five habits students develop to use AI thoughtfully in their learning and work:

- **The playbook** explains the five behaviors and how students grow in them.
- **The workbook** helps faculty put one behavior to work in a course they teach.

**View the playbook:** https://octc-id.github.io/AI-literacy-guidebook-4264/
**View the workbook:** https://octc-id.github.io/AI-literacy-guidebook-4264/workbook/start-here.html

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

Appendix A explains how each BE behavior maps to the DEC dimensions. Appendix B (a draft) shows how the playbook lines up with OCTC's college-wide AI literacy framework.

## The playbook

Each BE page includes:

- Purpose
- Developmental progression (Introduction, Exploration, Application)
- I Can statements
- Habits in practice
- Where the behavior fits naturally in a course
- Blackboard Ultra Quick Wins with sample prompts
- Tips for supporting student growth
- Student reflection prompts

Page order (arrow navigation): Welcome → How to Use → BE Safe → BE Honest → BE Critical → BE Responsible → BE Reflective → Appendix A → Appendix B.

## The workbook: BE the Change

The workbook is the hands-on companion to the playbook. Its name comes from the third part of OCTC's faculty AI literacy workshop (BE the Student, BE the Teacher, BE the Change), but it works on its own for faculty who didn't attend.

It's built around one change in one course. Each exercise has a short lesson, steps to work through, and a Copilot prompt for faculty who'd rather talk it through.

| Page | What faculty leave with |
|---|---|
| **Start Here** | An overview and a path through the exercises |
| **Exercise 1: Write Your AI Course Policy** | An AI Course Policy for the syllabus, a disclosure sentence for students, and an AI label for each main assignment |
| **Exercise 2: One Meaningful Change** (the core) | One assignment revised with TILT around one BE behavior, and a date to have it live |
| **Exercise 3: Build Your Checkpoints** | A plan of four or five checkpoints across the term, tied to existing assignments |
| **Exercise 4: Talk with Students About AI** | Openers for everyday conversations, questions for when there's a concern, and notes on where the faculty role ends and the college's process begins |

Answers save in the faculty member's own browser only. Nothing is sent anywhere. **Print or save as PDF** prints just their answers.

**Terms:** the workbook uses the Simple Syllabus labels **AI Course Policy** and **Academic Integrity**, and treats them as two separate sections that point to each other.

**Credits:** Exercise 2's Purpose / Tasks / Criteria structure comes from the Transparency in Learning and Teaching framework ([TILT Higher Ed](https://www.tilthighered.com/resources)), developed by Mary-Ann Winkelmes and shared under a CC BY-NC-SA 4.0 license. The exercise describes TILT in its own words and links to Winkelmes's materials instead of reproducing them.

## File structure

```
index.html                    Playbook home page
README.md                     This file
css/styles.css                Shared styles for the playbook and the workbook
images/                       Logo, playbook home art (open book),
                              and Start Here art (paper-pen.svg)
pages/
  welcome.html                Welcome to the BE Framework
  using-the-playbook.html     How to Use This Playbook
  be-safe.html                BE Safe
  be-honest.html              BE Honest
  be-critical.html            BE Critical
  be-responsible.html         BE Responsible
  be-reflective.html          BE Reflective
  appendix-a.html             Appendix A: DEC alignment
  appendix-b.html             Appendix B: The BE Framework at OCTC (draft)
workbook/
  start-here.html             Start Here (title page and path)
  ai-statement.html           Exercise 1: Write Your AI Course Policy
  one-change.html             Exercise 2: One Meaningful Change
  checkpoints.html            Exercise 3: Build Your Checkpoints
  conversations.html          Exercise 4: Talk with Students About AI
  workbook.css                Workbook styles (loads after styles.css)
  workbook.js                 Saving answers, printing, dropdowns, copy buttons
```

## Moving between the two

A gold button at the right end of the navigation links the two: **WORKBOOK** on every playbook page and **PLAYBOOK** on every workbook page. The playbook home page and How to Use also link to the workbook.

## Adapting this for your campus

Other colleges are welcome to build their own version. The playbook is written to be campus-neutral, so most of it can be used as is. To make your own copy:

1. Copy the repository to your own GitHub account (or download the files).
2. Replace the logo in `images/` and update the `alt` text on each page.
3. Update the © line in the site footer on each page.
4. Replace or remove Appendix B, which is specific to OCTC.
5. Add any campus-specific material (local policies, program examples, your own crosswalks) as a separate appendix, so the core pages stay easy to update.

The workbook is more OCTC-specific. Exercise 1 refers to OCTC's Simple Syllabus boxes. Exercise 4 summarizes the KCTCS Code of Student Conduct and links to OCTC policy pages. The workbook's Start Here page also refers to OCTC's faculty workshop. Review those pages before using them elsewhere.

The Blackboard Ultra Quick Wins assume Blackboard Ultra, including Bb Video Studio and AI Chat Conversation.

Questions, or interested in adapting the playbook? Contact Stephanie Self, Instructional Designer, Owensboro Community & Technical College, at stephanie.self@kctcs.edu.

## Notes for editing

- **Upload files together.** When a page and a stylesheet or script change at the same time, upload all of them. A new page with an old `workbook.css` or `styles.css` will look broken.
- **Version tags.** Pages link to shared files with version tags: `styles.css?v=12`, `workbook.css?v=10`, `workbook.js?v=4`. After changing one of those files, raise its number on every page that uses it so browsers load the new version.
- **Two page styles in the playbook:** Welcome, How to Use, and the appendices use the `intro-page` class on `<body>` for an open layout that matches the home page. The five BE pages use the navy header card. Keep new reference pages on `intro-page`.
- **Stage settings:** the short line under each stage name on the BE pages ("First-Year Experience courses," etc.) uses the `stage-context` class. These are typical examples, not placements.
- **Nav buttons:** the WORKBOOK and PLAYBOOK buttons use the `nav-button` class with an inline icon (`nav-icon`). The button text stays navy because white text on this gold doesn't meet contrast guidelines.
- **Workbook answer boxes:** yellow boxes with a gold left edge mark every place faculty write. Choose-several questions use the checkbox dropdown (`wb-multi` / `wb-dropdown`), which opens as a floating bubble so nothing on the page moves.
- **Reserved space:** Start Here has a commented-out "Want the full experience first?" card for a future self-paced version of the workshop. Uncomment it and add the link when that exists.
- **Accessibility:** keep the viewport tag, alt text, and `visually-hidden` labels in place. Links that open a new tab include a hidden "(opens in a new tab)" note for screen readers. Hover motion on the nav buttons turns off for people who set reduced motion.

## Version

Playbook: Version 3.0, October 2026
Workbook: Draft, October 2026
