// Saurabh Ahire | Filmmaker Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {
    console.log("Cinematic Portfolio successfully initialized!");

    // 1. Navbar Smooth Scrolling (Backup support)
    const navLinks = document.querySelectorAll('header nav a, .btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only scroll if it's an internal link
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Placeholder configuration for future BTS Image Gallery updates
    const btsSection = document.getElementById('bts');
    if (btsSection) {
        // Ready to handle future dynamic image grid overlays or expansions
        console.log("BTS section is armed and ready for future photography updates.");
    }
});