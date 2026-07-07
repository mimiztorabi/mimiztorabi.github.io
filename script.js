const projects = [
  {
    title: "Enterprise AI Copilot",
    summary:
      "Led discovery, roadmap, and beta launch for an AI assistant that helps account teams prepare customer briefs in minutes instead of hours.",
    result: "Reduced brief-preparation time by 42% while increasing source transparency scores.",
    tags: ["B2B SaaS", "Generative AI", "Beta launch"],
    linkLabel: "Read project summary",
  },
  {
    title: "Responsible AI Launch Kit",
    summary:
      "Created a reusable decision framework for evaluating model behavior, escalation paths, and customer-facing explanations before release.",
    result: "Cut readiness-review cycles from three weeks to eight business days.",
    tags: ["Governance", "Risk review", "Enablement"],
    linkLabel: "Explore framework",
  },
  {
    title: "Accessible AI Onboarding",
    summary:
      "Reworked first-run education for a personalization product so customers understood what data was used and how to stay in control.",
    result: "Improved activation by 32% and reduced support tickets about AI settings.",
    tags: ["Accessibility", "Onboarding", "Experimentation"],
    linkLabel: "View outcomes",
  },
];

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const projectGrid = document.querySelector("[data-project-grid]");
const year = document.querySelector("[data-year]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const tags = project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("");

  article.innerHTML = `
    <div>
      <div class="project-meta" aria-label="Project categories">${tags}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
    </div>
    <p class="project-result">${project.result}</p>
    <a class="card-link" href="mailto:hello@example.com?subject=${encodeURIComponent(project.title)}">
      ${project.linkLabel}<span class="sr-only"> for ${project.title}</span>
    </a>
  `;

  return article;
}

function renderProjects() {
  if (!projectGrid) return;
  const fragment = document.createDocumentFragment();
  projects.forEach((project) => fragment.appendChild(createProjectCard(project)));
  projectGrid.appendChild(fragment);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

year.textContent = new Date().getFullYear();
renderProjects();
