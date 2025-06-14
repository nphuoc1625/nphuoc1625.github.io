import { createExperienceSection } from '../components/Experience.js';
import { createGeneralSection } from '../components/General.js';
import { createProjectsSection } from '../components/Projects.js';
import { createRoadmap } from '../components/Roadmap.js';
import { createSkillsSection } from '../components/Skills.js';

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Render all sections
async function renderSections() {
    try {
        const mainContent = document.querySelector('.main-content');

        // Load and render all sections
        const [general, skills, experience, projects] = await Promise.all([
            createGeneralSection(),
            createSkillsSection(),
            createExperienceSection(),
            createProjectsSection()
        ]);

        mainContent.innerHTML = general + skills + experience + projects;

        // Add roadmap after header
        const header = document.querySelector('.header');
        const roadmap = await createRoadmap();
        header.insertAdjacentHTML('afterend', roadmap);

        // Initialize roadmap navigation after rendering
        initRoadmapNavigation();

        // Initialize ScrollReveal after content is loaded
        sr.reveal('.section', {
            interval: 200
        });
    } catch (error) {
        console.error('Error rendering sections:', error);
    }
}

// Initialize roadmap navigation
function initRoadmapNavigation() {
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
}

// Initialize the application
document.addEventListener('DOMContentLoaded', renderSections); 