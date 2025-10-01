let lastScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const header = document.querySelector('header');
            const headerElements = document.querySelectorAll('header > *:not(.logo)');
            const bodyContent = document.querySelectorAll('body > *:not(header)');
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                header.classList.add('scrolled');
                headerElements.forEach(el => {
                    el.classList.add('hidden');
                });
                bodyContent.forEach(el => {
                    el.classList.add('show');
                });
            } else {
                // Scrolling up
                header.classList.remove('scrolled');
                headerElements.forEach(el => {
                    el.classList.remove('hidden');
                });
                if (currentScroll === 0) {
                    bodyContent.forEach(el => {
                        setTimeout(() => {
                            el.classList.remove('show');
                        }, 500); // Delay the removal of 'show' class to match the header transition time
                    });
                }
            }

            lastScrollTop = currentScroll;
            ticking = false;
        });

        ticking = true;
    }
});
