document.addEventListener('DOMContentLoaded', () => {
    const modelElement = document.querySelector('.fixed-section .banner .content .model');
    const sectionsToHide = ['#section4', '#section5', '#section6']; // List of sections
    const sectionElements = sectionsToHide.map(selector => document.querySelector(selector));
    const lastSection = document.querySelector('#section3'); // Reference to the final section

    const observer = new IntersectionObserver((entries) => {
        let isAnySectionVisible = false;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isAnySectionVisible = true; // At least one section is visible
            }
        });

        // Hide or show the modelElement
        if (isAnySectionVisible) {
            modelElement.style.display = 'none';
        } else {
            // Explicitly check if we are beyond the last section
            const lastSectionRect = lastSection.getBoundingClientRect();
            if (lastSectionRect.bottom <= window.innerHeight) {
                modelElement.style.display = 'none'; // Remain hidden after section6
            } else {
                modelElement.style.display = 'block';
            }
        }
    }, { threshold: 0.0 });

    // Start observing all sections
    sectionElements.forEach(section => {
        if (section) observer.observe(section);
    });

    // Additional check for scroll events to handle past the last section
    window.addEventListener('scroll', () => {
        const lastSectionRect = lastSection.getBoundingClientRect();

        if (lastSectionRect.bottom <= window.innerHeight) {
            modelElement.style.display = 'none'; // Keep hidden after the final section
        }
    });
});

//There is an unsolved bug here, in the second scroll up the element goes missing, each time you scroll