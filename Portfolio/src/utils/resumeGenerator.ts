import { PersonalInfo, ExperienceItem, SkillCategory, ProjectItem } from '../types';

export function generateResumeHtml(
  personal: PersonalInfo,
  experiences: ExperienceItem[],
  skills: SkillCategory[],
  projects?: ProjectItem[]
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${personal.name} — Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --text: #172033;
      --secondary: #667085;
      --border: #E2E8F0;
      --accent-rose: #E88AA8;
      --accent-blue: #6EA8E8;
      --bg-light: #F8FAFC;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: var(--text);
      background: #FFFFFF;
      line-height: 1.5;
      font-size: 13px;
      padding: 40px;
      max-width: 850px;
      margin: 0 auto;
    }
    .print-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 12px 18px;
      margin-bottom: 30px;
    }
    .btn-primary {
      background: #172033;
      color: #FFFFFF;
      border: none;
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .btn-primary:hover {
      background: #25334f;
    }
    header {
      border-bottom: 2px solid var(--border);
      padding-bottom: 18px;
      margin-bottom: 22px;
    }
    h1 {
      font-size: 26px;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.02em;
    }
    .role {
      font-size: 15px;
      font-weight: 600;
      color: var(--secondary);
      margin-top: 2px;
    }
    .contact-bar {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 12px;
      color: var(--secondary);
      font-family: 'JetBrains Mono', monospace;
    }
    .contact-bar a {
      color: var(--secondary);
      text-decoration: none;
    }
    .contact-bar a:hover {
      color: var(--text);
      text-decoration: underline;
    }
    section {
      margin-bottom: 22px;
    }
    h2 {
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text);
      border-bottom: 1px solid var(--border);
      padding-bottom: 5px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    h2::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent-rose);
      display: inline-block;
    }
    .summary-text {
      color: var(--secondary);
      font-size: 13px;
      line-height: 1.6;
    }
    .exp-item {
      margin-bottom: 16px;
      page-break-inside: avoid;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 3px;
    }
    .exp-role {
      font-weight: 700;
      font-size: 14px;
      color: var(--text);
    }
    .exp-company {
      font-weight: 600;
      color: var(--secondary);
      font-size: 13px;
    }
    .exp-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--secondary);
    }
    .exp-desc {
      color: var(--text);
      font-size: 12.5px;
      margin: 4px 0 6px 0;
    }
    ul.responsibilities {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 6px;
    }
    ul.responsibilities li {
      position: relative;
      padding-left: 14px;
      color: var(--secondary);
      font-size: 12px;
      margin-bottom: 3px;
      line-height: 1.5;
    }
    ul.responsibilities li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-blue);
      font-weight: bold;
    }
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      background: var(--bg-light);
      border: 1px solid var(--border);
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--secondary);
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .skill-card {
      background: var(--bg-light);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 8px 12px;
    }
    .skill-card-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 2px;
    }
    .skill-card-items {
      font-size: 11.5px;
      color: var(--secondary);
    }
    @media print {
      body {
        padding: 0;
        font-size: 12px;
      }
      .print-actions {
        display: none !important;
      }
      @page {
        margin: 12mm;
      }
    }
  </style>
</head>
<body>
  <div class="print-actions">
    <div>
      <strong style="font-size: 13px; color: #172033;">Resume Preview</strong>
      <p style="font-size: 11.5px; color: #667085;">Ready to print or save as PDF via your browser</p>
    </div>
    <button class="btn-primary" onclick="window.print()">
      Print / Save as PDF
    </button>
  </div>

  <header>
    <h1>${personal.name}</h1>
    <div class="role">${personal.role}</div>
    <div class="contact-bar">
      <span>${personal.location}</span>
      <span>•</span>
      <a href="mailto:${personal.email}">${personal.email}</a>
      <span>•</span>
      <a href="${personal.github}" target="_blank">GitHub</a>
      <span>•</span>
      <a href="${personal.linkedin}" target="_blank">LinkedIn</a>
    </div>
  </header>

  <section>
    <h2>Professional Summary</h2>
    <p class="summary-text">${personal.bioIntro} ${personal.bioDetailed[1] || ''}</p>
  </section>

  <section>
    <h2>Experience</h2>
    ${experiences
      .map(
        (exp) => `
      <div class="exp-item">
        <div class="exp-header">
          <div>
            <span class="exp-role">${exp.role}</span>
            <span style="color: #CBD5E1; margin: 0 4px;">•</span>
            <span class="exp-company">${exp.company}</span>
          </div>
          <span class="exp-date">${exp.period}</span>
        </div>
        <div class="exp-desc">${exp.description}</div>
        <ul class="responsibilities">
          ${exp.responsibilities.map((r) => `<li>${r}</li>`).join('')}
        </ul>
        <div class="tech-tags">
          ${exp.techStack.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `
      )
      .join('')}
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      ${skills
        .map(
          (cat) => `
        <div class="skill-card">
          <div class="skill-card-title">${cat.title}</div>
          <div class="skill-card-items">${cat.skills.map((s) => s.name).join(', ')}</div>
        </div>
      `
        )
        .join('')}
    </div>
  </section>
</body>
</html>`;
}
