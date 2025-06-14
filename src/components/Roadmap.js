export async function createRoadmap() {
    const response = await fetch('/src/templates/roadmap.html');
    return await response.text();
} 