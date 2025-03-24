function hideLinks(){
    const sidebar= document.querySelector('.links');
    sidebar.style. display='none';
}
function showLinks(){
    const sidebar= document.querySelector('.links');
    sidebar.style. display='flex';
}
function showLinks() {
    const linksDiv = document.querySelector('.links');
    const sidebar = document.querySelector('.sidebar');
    linksDiv.style.display = 'block'; // Show the links
    sidebar.style.display = 'none'; // Hide the sidebar
}

function hideLinks() {
    const linksDiv = document.querySelector('.links');
    const sidebar = document.querySelector('.sidebar');
    linksDiv.style.display = 'none'; // Hide the links
    sidebar.style.display = 'flex'; // Show the sidebar
}
document.addEventListener('DOMContentLoaded', () => {
    const linksDiv = document.querySelector('.links');
    linksDiv.style.display = 'none'; // Ensure the links section is hidden on load
});
