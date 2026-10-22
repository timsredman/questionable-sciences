# JQS publication guide

The Journal of Questionable Sciences is a **fictional satire project**, not a real academic journal. Do not present invented results as real evidence, and do not invent real DOIs or ISSNs.

## Reusable publishing workflow

1. Choose a unique manuscript reference such as `JQS-2026-002`. References are **internal fictional IDs**, not DOIs.
2. Copy `templates/article-template.html` to `articles/your-article-slug.html`.
3. Replace every `{{PLACEHOLDER}}` with the article's details. Escape special HTML characters in text (`&` becomes `&amp;`, `<` becomes `&lt;`). The template's PDF link expects a file inside `papers/`.
4. Prepare a PDF containing the **same paper**. Include the JQS name, reference, volume, issue, publication date, and a conspicuous satire notice. Upload it as `papers/your-article-slug.pdf`.
5. Add one entry to `publications.json` under `articles`, using the schema of the existing Kevin entry. Set `article` and `pdf` to the exact uploaded paths. Do not delete older entries.
6. Commit changes to `main`. GitHub Pages will deploy the new article and the archive will automatically include it.
7. Test the homepage, article URL and PDF URL on the live site. Check mobile layout, dates, spelling and satire labelling.

## Metadata fields

`reference`: unique JQS ID; `title`: paper title; `subtitle`: optional explanatory title; `authors`: array of fictional author names; `volume`, `issue`: numbers; `date`: YYYY-MM; `discipline`: descriptive category; `article`: relative HTML path; `pdf`: relative PDF path; `abstract`: short archive summary.

## Editorial standards

- Research, methods, statistics, grants, institutions and reviewers must be clearly identified as fictional.
- Avoid impersonating real people or attributing defamatory claims to them.
- Medical or safety-related satire must never be mistaken for actionable advice.
- Use original writing and artwork or material you have permission to publish.
- The archive is automatically rendered from `publications.json`; the featured paper on the homepage can be updated separately when a new issue launches.

## Current inaugural article

`JQS-2026-001` is Kevin the Yucca. Its existing PDF remains at the repository root for compatibility. New papers should use `papers/`.
