document.addEventListener("DOMContentLoaded", () => {
    const cursorDiv = document.querySelector(".cursor"); // Select the global .cursor div
    const section5 = document.querySelector("#section5"); // Select Section 5

    if (cursorDiv && section5) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hide the .cursor when Section 5 is in view
                    cursorDiv.style.display = "none";
                } else {
                    // Show the .cursor when Section 5 is not in view
                    cursorDiv.style.display = "block";
                }
            });
        }, { threshold: 0.1 });

        // Observe Section 5
        observer.observe(section5);
    }
});
