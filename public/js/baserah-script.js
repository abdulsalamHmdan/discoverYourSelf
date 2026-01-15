document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-3');
            navbar.classList.remove('py-4', 'bg-white/90');
            navbar.classList.add('bg-white');
        } else {
            navbar.classList.remove('shadow-lg', 'py-3', 'bg-white');
            navbar.classList.add('py-4', 'bg-white/90');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // 3. FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('[data-lucide="chevron-down"]');
            
            // Toggle Content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
                btn.parentElement.classList.remove('ring-2', 'ring-purple-500/30');
            } else {
                // Close others (Optional - remove this block if you want multiple open)
                document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = null);
                document.querySelectorAll('.faq-btn [data-lucide]').forEach(i => i.style.transform = 'rotate(0deg)');
                
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                btn.parentElement.classList.add('ring-2', 'ring-purple-500/30');
            }
        });
    });

    // 4. Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
        observer.observe(el);
    });
});