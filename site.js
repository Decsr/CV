const PUBLIC_SITE = {
  name: "Your Name",
  title: "Backend Developer & Visual Storyteller",
  location: "Your City / Available for work",
  intro: "Build useful things, understand the details, and leave every system clearer than you found it.",
  email: "you@example.com",
  phone: "+00 000 000 000",
  profileImage: "assets/profile/profile.jpg",
  cv: "cv.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-username" }
  ],
  about: [
    "I am a developer who enjoys turning ambiguous problems into simple, dependable software. My strongest work sits where backend systems, clear communication, and careful visual thinking meet.",
    "Outside of code, photography keeps me observant. Both practices reward patience, attention to detail, and a willingness to look twice."
  ],
  experience: [
    { period: "2025 — NOW", role: "Your role", company: "Your company or internship", duties: ["Describe the feature, product, or system you worked on.", "Add a measurable result, improvement, or responsibility here."], tech: ["Technology", "Technology"] },
    { period: "2023 — 2025", role: "Student / Independent", company: "Your university or personal practice", duties: ["Describe the work, study, or community experience that shaped you.", "Mention a project, team, or result worth remembering."], tech: ["Research", "Delivery"] }
  ],
  skills: {
    "Backend": ["Node.js", "REST APIs", "Authentication", "Testing"],
    "Data": ["PostgreSQL", "MySQL", "Schema design", "Redis"],
    "Workflow": ["Git", "Docker", "Linux", "Postman"],
    "Thinking": ["Debugging", "Documentation", "Systems thinking", "Photography"]
  },
  projects: [
    { name: "Project One", short: "A concise description of the problem this project solves.", role: "Your role / Solo project", stack: ["Node.js", "PostgreSQL", "Docker"], features: ["Feature or outcome one", "Feature or outcome two", "Feature or outcome three"], challenge: "Explain the hardest constraint or technical decision.", contribution: "Explain what you designed, built, tested, or shipped.", image: "assets/projects/project-one.jpg", github: "https://github.com/your-username/project-one", demo: "" },
    { name: "Project Two", short: "A second project that shows range, craft, or collaboration.", role: "Your role / Team project", stack: ["Java", "Spring Boot", "MySQL"], features: ["Feature or outcome one", "Feature or outcome two", "Feature or outcome three"], challenge: "Explain what required the most reasoning.", contribution: "Explain your specific contribution and the result.", image: "assets/projects/project-two.jpg", github: "https://github.com/your-username/project-two", demo: "" }
  ],
  process: ["Clarify", "Reproduce", "Trace", "Simplify", "Build", "Verify"],
  processNote: "I write down the path from symptom to solution so the work can be reviewed, repeated, and improved.",
  photography: {
    intro: "A separate visual journal of people, places, and small details. Replace the sample records below with your own work.",
    categories: ["Street", "Portrait", "Events"],
    photos: [
      { src: "assets/photography/street-01.jpg", title: "Street study 01", desc: "Light, movement, and a quiet corner.", category: "Street" },
      { src: "assets/photography/portrait-01.jpg", title: "Portrait study 01", desc: "A portrait made with natural light.", category: "Portrait" },
      { src: "assets/photography/event-01.jpg", title: "Event study 01", desc: "A moment from a live gathering.", category: "Events" },
      { src: "assets/photography/street-02.jpg", title: "Street study 02", desc: "An ordinary scene worth noticing.", category: "Street" },
      { src: "assets/photography/portrait-02.jpg", title: "Portrait study 02", desc: "Texture, expression, and patience.", category: "Portrait" }
    ]
  },
  contactLine: "For a role, collaboration, or a conversation about a project, email is the best place to start."
};

const SITE = window.SITE_DATA || window.SITE_PRIVATE || PUBLIC_SITE;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = (value) => String(value).replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\": "&#92;", '"': "&quot;" }[character]));
const tags = (items) => items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
const placeholder = (label, hue = 165) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="hsl(${hue},24%,72%)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="42" fill="hsl(${hue},35%,22%)">${label}</text></svg>`)}`;
const imageSource = (src, label, hue) => src || placeholder(label, hue);

function setImageFallback(image, label, hue) {
  image.addEventListener("error", () => { image.src = placeholder(label, hue); }, { once: true });
}

function renderNavigation() {
  const nav = $("[data-nav]");
  if (!nav) return;
  const isPhotography = document.body.dataset.page === "photography";
  const items = isPhotography
    ? [{ href: "index.html", label: "CV" }, { href: "photography.html", label: "Photography", active: true }]
    : [{ href: "#about", label: "About" }, { href: "#experience", label: "Experience" }, { href: "#projects", label: "Projects" }, { href: "photography.html", label: "Photography" }, { href: "#contact", label: "Contact" }];
  nav.innerHTML = items.map((item) => `<a class="${item.active ? "active" : ""}" href="${item.href}">${item.label}</a>`).join("");
}

function renderShared() {
  $$('[data-brand]').forEach((element) => { element.textContent = SITE.name.toUpperCase(); });
  $$('[data-footer]').forEach((element) => { element.textContent = `© ${new Date().getFullYear()} ${SITE.name}`; });
  const menu = $(".menu-toggle");
  const nav = $(".site-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); document.body.classList.toggle("menu-open", open); menu.setAttribute("aria-expanded", String(open)); });
    nav.addEventListener("click", (event) => { if (event.target.closest("a")) { nav.classList.remove("open"); document.body.classList.remove("menu-open"); menu.setAttribute("aria-expanded", "false"); } });
  }
}

function renderCv() {
  if (document.body.dataset.page !== "cv") return;
  document.title = `${SITE.name} | ${SITE.title}`;
  $("[data-name]").textContent = SITE.name;
  $("[data-title]").textContent = SITE.title;
  $("[data-location]").textContent = SITE.location;
  $("[data-intro]").textContent = SITE.intro;
  const profile = $("[data-profile-image]");
  profile.src = imageSource(SITE.profileImage, "Profile photo", 165);
  profile.alt = `Portrait of ${SITE.name}`;
  setImageFallback(profile, "Profile photo", 165);
  $("[data-socials]").innerHTML = [...SITE.links, { label: "Email", url: `mailto:${SITE.email}` }].map((link) => `<a href="${link.url}" ${link.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${escapeHtml(link.label)} ↗</a>`).join("");
  $("[data-about]").innerHTML = SITE.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("[data-experience]").innerHTML = SITE.experience.map((item) => `<article class="timeline-item"><div class="timeline-period">${escapeHtml(item.period)}</div><div><h3>${escapeHtml(item.role)}</h3><p class="timeline-company">${escapeHtml(item.company)}</p><ul class="timeline-duties">${item.duties.map((duty) => `<li>${escapeHtml(duty)}</li>`).join("")}</ul></div><div class="tag-list">${tags(item.tech)}</div></article>`).join("");
  $("[data-skills]").innerHTML = Object.entries(SITE.skills).map(([group, skills]) => `<article class="skill-group"><h3>${escapeHtml(group)}</h3><div class="tag-list">${tags(skills)}</div></article>`).join("");
  $("[data-projects]").innerHTML = SITE.projects.map((project, index) => `<button class="project-card" type="button" data-project-index="${index}" aria-haspopup="dialog"><img src="${imageSource(project.image, project.name, 165 + index * 30)}" alt="${escapeHtml(project.name)} preview"><div class="project-card-content"><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.short)}</p><div class="tag-list">${tags(project.stack)}</div></div></button>`).join("");
  $$("[data-projects] img").forEach((image, index) => setImageFallback(image, SITE.projects[index].name, 165 + index * 30));
  $("[data-process]").innerHTML = SITE.process.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  $("[data-process-note]").textContent = SITE.processNote;
  $("[data-photo-intro]").textContent = SITE.photography.intro;
  $("[data-contact-line]").textContent = SITE.contactLine;
  const emailLink = $("[data-email-link]");
  emailLink.href = `mailto:${SITE.email}`;
  emailLink.innerHTML = `${escapeHtml(SITE.email)} <span aria-hidden="true">↗</span>`;
  $(".hero-actions a[download]").href = SITE.cv;
  setupProjectDialog();
}

function setupProjectDialog() {
  const dialog = $("[data-project-dialog]");
  const body = $("[data-dialog-body]");
  if (!dialog || !body) return;
  $("[data-projects]").addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-index]");
    if (!card) return;
    const project = SITE.projects[Number(card.dataset.projectIndex)];
    body.innerHTML = `<div class="dialog-content"><img src="${imageSource(project.image, project.name, 165)}" alt="${escapeHtml(project.name)} preview"><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.role)}</p><h4>Stack</h4><div class="tag-list">${tags(project.stack)}</div><h4>Key features</h4><ul>${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul><h4>Challenge</h4><p>${escapeHtml(project.challenge)}</p><h4>Contribution</h4><p>${escapeHtml(project.contribution)}</p><div>${project.github ? `<a class="button button-primary" href="${project.github}" target="_blank" rel="noopener">View code ↗</a>` : ""}${project.demo ? `<a class="button button-secondary" href="${project.demo}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}</div></div>`;
    setImageFallback($(".dialog-content img"), project.name, 165);
    dialog.showModal();
  });
  $("[data-dialog-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
}

function renderPhotography() {
  if (document.body.dataset.page !== "photography") return;
  document.title = `Photography | ${SITE.name}`;
  $("[data-photo-page-intro]").textContent = SITE.photography.intro;
  const filterList = $("[data-filters]");
  const gallery = $("[data-gallery]");
  const count = $("[data-gallery-count]");
  let activeCategory = "All";
  const draw = () => {
    const visible = SITE.photography.photos.filter((photo) => activeCategory === "All" || photo.category === activeCategory);
    filterList.innerHTML = ["All", ...SITE.photography.categories].map((category) => `<button class="filter-button" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === activeCategory}">${escapeHtml(category)}</button>`).join("");
    gallery.innerHTML = visible.map((photo, index) => `<figure class="gallery-item"><button type="button" data-photo-index="${SITE.photography.photos.indexOf(photo)}"><img loading="lazy" src="${imageSource(photo.src, photo.title, 145 + index * 20)}" alt="${escapeHtml(photo.title)}: ${escapeHtml(photo.desc)}"><span class="gallery-caption"><strong>${escapeHtml(photo.title)}</strong><span>${escapeHtml(photo.desc)}</span></span></button></figure>`).join("");
    count.textContent = `${visible.length} ${visible.length === 1 ? "frame" : "frames"}`;
    $$("[data-gallery] img").forEach((image, index) => setImageFallback(image, visible[index].title, 145 + index * 20));
  };
  filterList.addEventListener("click", (event) => { const button = event.target.closest("[data-category]"); if (button) { activeCategory = button.dataset.category; draw(); } });
  draw();
  setupLightbox(gallery);
}

function setupLightbox(gallery) {
  const lightbox = $("[data-lightbox]");
  const image = $("[data-lightbox-image]");
  const caption = $("[data-lightbox-caption]");
  gallery.addEventListener("click", (event) => {
    const button = event.target.closest("[data-photo-index]");
    if (!button) return;
    const photo = SITE.photography.photos[Number(button.dataset.photoIndex)];
    image.src = imageSource(photo.src, photo.title, 145);
    image.alt = photo.title;
    caption.textContent = `${photo.title} — ${photo.desc}`;
    setImageFallback(image, photo.title, 145);
    lightbox.showModal();
  });
  $("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
}

function setupReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("in")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); } }), { threshold: .08 });
  items.forEach((item) => observer.observe(item));
}

renderNavigation();
renderShared();
renderCv();
renderPhotography();
setupReveal();
