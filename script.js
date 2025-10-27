// =========================
// Skills
// =========================
const skills = [
    { name: "HTML5", icon: "ri-html5-line", color: "#e34f26" },
    { name: "CSS3", icon: "ri-css3-line", color: "#264de4" },
    { name: "JavaScript", icon: "ri-javascript-line", color: "#f0db4f" }
];

const skillsContainer = document.querySelector(".skills-container");

skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <div class="card-inner">
        <div class="card-front"><i class="${skill.icon}" style="color:${skill.color}"></i></div>
        <div class="card-back">${skill.name}</div>
    </div>
    `;

    skillsContainer.appendChild(card);
});

// =========================
// Projects
// =========================
const projects = [
    { name: "Condomínio 305", img: "assets/projetos/condominio305.jpg", link: "https://305ab.blogspot.com/" }
];

const projectsContainer = document.querySelector(".projects-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => window.open(project.link, "_blank");

    card.innerHTML = `
    <div class="card-inner">
        <div class="card-front project-front"><img src="${project.img}" alt="${project.name}"></div>
        <div class="card-back">${project.name}</div>
    </div>
    `;

    projectsContainer.appendChild(card);
});
