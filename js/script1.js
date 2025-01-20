
const menuIcon = document.querySelector('.menu-icon');
        const navLinks = document.querySelector('.nav-links');
        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;
        const icon = document.querySelector('.theme-toggle i');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('menu-open');
            navLinks.classList.toggle('active');
        });

        let isDark = false;
        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            if (isDark) {
                body.setAttribute('data-theme', 'dark');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                body.removeAttribute('data-theme');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });

        // Smooth hover animation for nav links
        const navLinksAll = document.querySelectorAll('.nav-link');
        navLinksAll.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'translateY(-2px)';
                link.style.boxShadow = `inset 5px 5px 10px var(--shadow-dark),
                                      inset -5px -5px 10px var(--shadow-light)`;
            });

            link.addEventListener('mouseout', () => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = `5px 5px 10px var(--shadow-dark),
                                      -5px -5px 10px var(--shadow-light)`;
            });
        });
        //navbar js start