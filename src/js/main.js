// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Reveal elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    sr.reveal('.section', {
        interval: 200
    });
});

// Roadmap Navigation
const roadmapItems = document.querySelectorAll('.roadmap-item');
const sections = document.querySelectorAll('.section');

// Update active roadmap item based on scroll position
function updateRoadmapIndicator() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            roadmapItems.forEach(item => item.classList.remove('active'));
            roadmapItems[index].classList.add('active');
        }
    });
}

// Smooth scroll to section when clicking roadmap item
roadmapItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});

// Update roadmap indicator on scroll
window.addEventListener('scroll', updateRoadmapIndicator);

// Sample data for skills
const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 65 }
];

// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillElement);
    });
}

// Sample data for experience
const experiences = [
    {
        title: 'Senior Developer',
        company: 'Tech Company',
        period: '2020 - Present',
        description: 'Led development of multiple web applications using React and Node.js.'
    },
    {
        title: 'Web Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed responsive websites and implemented front-end features.'
    }
];

// Populate experience section
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(expElement);
    });
}

// Sample data for projects
const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with React and Node.js',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application',
        tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        link: '#'
    }
];

// Populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        projectsGrid.appendChild(projectElement);
    });
}

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateExperience();
    populateProjects();
}); 