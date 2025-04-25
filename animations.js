document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animation");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.90;

        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();

            if (rect.top < triggerBottom && rect.bottom > 0) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
