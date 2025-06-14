import { experiences } from '../data/experience.js';

export async function createExperienceSection() {
    const response = await fetch('/src/templates/experience.html');
    const template = await response.text();

    // Create a temporary element to parse the template
    const temp = document.createElement('div');
    temp.innerHTML = template;

    // Populate experiences
    const timeline = temp.querySelector('.timeline');
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

    return temp.innerHTML;
} 