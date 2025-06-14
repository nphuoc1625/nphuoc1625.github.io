import { projects } from '../data/projects.js';

export async function createProjectsSection() {
    const response = await fetch('/src/templates/projects.html');
    const template = await response.text();

    // Create a temporary element to parse the template
    const temp = document.createElement('div');
    temp.innerHTML = template;

    // Populate projects
    const projectsGrid = temp.querySelector('.projects-grid');
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

    return temp.innerHTML;
} 