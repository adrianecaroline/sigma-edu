/**
 * SigmaEdu - Landing Page Scripts
 * Ferramenta de IA para estudos do ENEM
 */

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Header com efeito de scroll =====
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // ===== Scroll suave para links de navegação =====
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); //essa linha previne o comportamento padrão do link, que seria navegar para a âncora imediatamente.
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight; //essa linha calcula a altura do header fixo para ajustar a posição final do scroll.
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });//essa função adiciona um efeito de scroll suave ao clicar nos links de navegação, ajustando a posição final para levar em conta a altura do header fixo.
    });

    // ===== Animação de fade-in ao scroll =====
    const fadeElements = document.querySelectorAll('.feature-card, .beneficio-card, .step, .sobre-text, .sobre-image');
    
    // Adiciona classe fade-in aos elementos
    fadeElements.forEach(function(element) {
        element.classList.add('fade-in');
    });

    // Observer para detectar quando elementos entram na viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(function(element) {
        observer.observe(element);
    });

    // ===== Efeito de digitação no chat mockup =====
    const chatMessages = document.querySelectorAll('.chat-message');
    
    chatMessages.forEach(function(message, index) {
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        
        setTimeout(function() {
            message.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 500 + (index * 800));
    });

    // ===== Highlight da navegação ativa =====
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + header.offsetHeight + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.style.color = '#64748b';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#10B981';
            }
        });
    });

    // ===== Animação dos círculos do cérebro =====
    const brainCircles = document.querySelectorAll('.brain-circle');
    
    brainCircles.forEach(function(circle, index) {
        circle.style.animationDelay = (index * 0.5) + 's';
    });

    // ===== Console log com informações do projeto =====
    console.log('%c🎓 SigmaEdu', 'font-size: 24px; font-weight: bold; color: #667eea;');
    console.log('%cSeu Agente de IA para o ENEM', 'font-size: 14px; color: #64748b;');
    console.log('%c© 2026 - Em Desenvolvimento', 'font-size: 12px; color: #94a3b8;');

});

// ===== Parallax suave no hero =====
// window.addEventListener('scroll', function() {
//     const heroCard = document.querySelector('.hero-card');
//     if (heroCard) {
//         const scrolled = window.scrollY;
//         heroCard.style.transform = 'translateY(' + (scrolled * 0.1) + 'px)';
//     }//essa função cria um efeito de parallax suave no card do hero, movendo-o levemente para baixo à medida que o usuário rola a página.
// });
