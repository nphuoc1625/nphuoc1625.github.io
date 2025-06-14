import { skills } from '../data/skills.js';

export function createSkillsSection() {
    return `
        <section id="skills" class="section">
            <div class="container">
                <h2>Skills</h2>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-item">
                            <h3>${skill.name}</h3>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
} 