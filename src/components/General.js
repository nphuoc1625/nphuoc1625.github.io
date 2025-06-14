export async function createGeneralSection() {
    const response = await fetch('/src/templates/general.html');
    return await response.text();
} 