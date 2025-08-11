// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Touch-friendly mobile interactions
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    // Swipe up to close mobile menu
    if (swipeDistance > swipeThreshold && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== GROUNDBREAKING HERO INTERACTIONS =====

// Interactive Particle System
function initParticleSystem() {
    const particles = document.querySelectorAll('.particle');
    const hero = document.querySelector('.hero');
    
    particles.forEach((particle, index) => {
        // Add mouse interaction
        particle.addEventListener('mouseenter', () => {
            particle.style.transform = 'scale(2) rotate(180deg)';
            particle.style.boxShadow = '0 0 20px rgba(255, 107, 157, 0.8)';
        });
        
        particle.addEventListener('mouseleave', () => {
            particle.style.transform = '';
            particle.style.boxShadow = '';
        });
        
        // Add click effect
        particle.addEventListener('click', () => {
            createParticleExplosion(particle);
        });
    });
}

// Particle explosion effect
function createParticleExplosion(particle) {
    const explosion = document.createElement('div');
    explosion.className = 'particle-explosion';
    explosion.style.cssText = `
        position: absolute;
        left: ${particle.offsetLeft}px;
        top: ${particle.offsetTop}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, #ff6b9d, #ff8e8e, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: explosion 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(explosion);
    
    setTimeout(() => {
        explosion.remove();
    }, 600);
}

// Professional decorative element interactions
function initDecorativeElements() {
    const decorativeElements = document.querySelectorAll('.decorative-element');
    
    decorativeElements.forEach((element, index) => {
        // Add hover effects
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.5)';
            element.style.boxShadow = '0 8px 16px rgba(173, 146, 110, 0.8)';
            createSparklesAround(element);
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
            element.style.boxShadow = '';
        });
        
        // Add click effects
        element.addEventListener('click', () => {
            createElementConfetti(element);
        });
        
        // Add touch interactions for mobile
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(1.3)';
        });
        
        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.style.transform = '';
            }, 300);
        });
    });
}

// Create sparkles around decorative elements
function createSparklesAround(element) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'temp-sparkle';
            sparkle.style.cssText = `
                position: absolute;
                left: ${element.offsetLeft + Math.random() * 60 - 30}px;
                top: ${element.offsetTop + Math.random() * 60 - 30}px;
                width: 4px;
                height: 4px;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0 0 10px #fff, 0 0 20px #ad926e;
                pointer-events: none;
                z-index: 1000;
                animation: tempSparkle 1s ease-out forwards;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 100);
    }
}

// Element confetti effect
function createElementConfetti(element) {
    const colors = ['#b48f62', '#ad926e', '#f0e0bb', '#fff'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                left: ${element.offsetLeft + element.offsetWidth / 2}px;
                top: ${element.offsetTop + element.offsetHeight / 2}px;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 2px;
                pointer-events: none;
                z-index: 1000;
                animation: cakeConfetti 2s ease-out forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }, i * 50);
    }
}

// Mouse trail effect
function initMouseTrail() {
    const trail = document.querySelector('.mouse-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.style.opacity = '1';
    });
    
    function updateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX - 10 + 'px';
        trail.style.top = trailY - 10 + 'px';
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
    
    // Hide trail when mouse leaves window
    document.addEventListener('mouseleave', () => {
        trail.style.opacity = '0';
    });
}

// 3D Parallax effect for hero background
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const bgLayers = document.querySelectorAll('.hero-bg-layer');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.2;
            layer.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Interactive title animation
function initInteractiveTitle() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
            word.style.animation = 'titlePulse 0.5s ease-out';
            setTimeout(() => {
                word.style.animation = '';
            }, 500);
        });
        
        // Add typing effect on load
        setTimeout(() => {
            typeWriter(word, word.textContent, 100);
        }, index * 200);
    });
}

// Enhanced button interactions
function initHeroButtons() {
    const heroButtons = document.querySelectorAll('.btn-hero');
    
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            createButtonParticles(button);
        });
        
        button.addEventListener('click', () => {
            createButtonRipple(button);
        });
    });
}

// Button particle effect
function createButtonParticles(button) {
    const particles = button.querySelector('.btn-particles');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                left: 50%;
                top: 50%;
                width: 4px;
                height: 4px;
                background: #fff;
                border-radius: 50%;
                pointer-events: none;
                animation: buttonParticle 1s ease-out forwards;
            `;
            
            particles.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }, i * 50);
    }
}

// Button ripple effect
function createButtonRipple(button) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: buttonRipple 0.6s ease-out forwards;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Mobile performance optimizations
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
    
    // Optimize scroll performance
    let ticking = false;
    
    function updateOnScroll() {
        // Update navbar scroll state
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Disable hover effects on mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (hover: none) {
            .service-card:hover,
            .gallery-item:hover,
            .step:hover,
            .contact-item:hover {
                transform: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .step, .contact-item, .gallery-item').forEach(el => {
    observer.observe(el);
});

// Form Handling
const enquiryForm = document.getElementById('enquiryForm');
const successMessage = document.getElementById('successMessage');

if (enquiryForm) {
    // Mobile-optimized form validation
    const formFields = enquiryForm.querySelectorAll('input, textarea, select');
    
    formFields.forEach(field => {
        // Add touch-friendly focus states
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', () => {
            field.parentElement.classList.remove('focused');
            validateField(field);
        });
        
        // Mobile-specific input handling
        if (isMobile) {
            field.addEventListener('input', () => {
                // Auto-resize textarea on mobile
                if (field.tagName === 'TEXTAREA') {
                    field.style.height = 'auto';
                    field.style.height = field.scrollHeight + 'px';
                }
                
                // Validate on input for better UX
                if (field.value.length > 0) {
                    validateField(field);
                }
            });
        }
    });

    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields before submission
        let isValid = true;
        formFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // Show error message for mobile
            if (isMobile) {
                showMobileError('Please fill in all required fields correctly.');
            }
            return;
        }
        
        // Add loading state
        const submitBtn = this.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon i');
        const originalText = btnText.innerHTML;
        const originalIcon = btnIcon.className;
        
        submitBtn.classList.add('loading');
        btnText.innerHTML = 'Sending Enquiry...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(this);
        const enquiryData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            occasion: formData.get('occasion'),
            guests: formData.get('guests'),
            message: formData.get('message')
        };
        
        // Create email body
        const emailBody = `
New Cake Enquiry from Wrights Bake House Website

Name: ${enquiryData.name}
Email: ${enquiryData.email}
Phone: ${enquiryData.phone || 'Not provided'}

Occasion: ${enquiryData.occasion}
Number of Guests: ${enquiryData.guests || 'Not specified'}

Message:
${enquiryData.message}

---
This enquiry was sent from the Wrights Bake House website contact form.
        `.trim();
        
        // Create mailto link
        const mailtoLink = `mailto:booking@wrightsbakehouse.co.uk?subject=New Cake Enquiry - ${enquiryData.occasion}&body=${encodeURIComponent(emailBody)}`;
        
        // Simulate form submission delay
        setTimeout(() => {
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.classList.remove('loading');
            btnText.innerHTML = originalText;
            btnIcon.className = originalIcon;
            submitBtn.disabled = false;
            
            // Add success animation to form
            this.classList.add('form-success');
            setTimeout(() => {
                this.classList.remove('form-success');
            }, 600);
            
            // Create confetti effect
            createConfetti();
            
            // Hide success message after 8 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 8000);
        }, 2000);
    });
}

// Enhanced form validation
document.querySelectorAll('#enquiryForm input, #enquiryForm select, #enquiryForm textarea').forEach(field => {
    field.addEventListener('blur', function() {
        validateField(this);
    });
    
    field.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateField(this);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }
    
    // Apply validation result
    if (!isValid) {
        field.classList.add('error');
        showFieldError(field, errorMessage);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorDiv.style.cssText = `
        color: #ff6b6b;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        animation: slideInDown 0.3s ease-out;
    `;
    field.parentNode.appendChild(errorDiv);
}

// Enhanced form animations
document.querySelectorAll('.form-group').forEach((group, index) => {
    group.style.animationDelay = `${index * 0.1}s`;
});

// Form field focus effects
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.classList.remove('focused');
        }
    });
});

// Character counter for message field
const messageField = document.getElementById('message');
if (messageField) {
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
        text-align: right;
        font-size: 0.8rem;
        color: #999;
        margin-top: 0.25rem;
    `;
    messageField.parentNode.appendChild(counter);
    
    messageField.addEventListener('input', function() {
        const remaining = 1000 - this.value.length;
        counter.textContent = `${remaining} characters remaining`;
        
        if (remaining < 100) {
            counter.style.color = '#ff6b6b';
        } else if (remaining < 200) {
            counter.style.color = '#ffa500';
        } else {
            counter.style.color = '#999';
        }
    });
}

// Enhanced checkbox animation
document.querySelectorAll('.checkbox-label input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const checkmark = this.nextElementSibling;
        if (this.checked) {
            checkmark.style.transform = 'scale(1.1)';
            setTimeout(() => {
                checkmark.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Form submission prevention for demo (remove in production)
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        // In a real implementation, you would send the data to a server
        // For now, we'll just show the success message and create confetti
        console.log('Form data collected:', {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            occasion: this.occasion.value,
            guests: this.guests.value,
            message: this.message.value
        });
    });
}

// Mobile error display function
function showMobileError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'mobile-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff6b6b;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        animation: slideInDown 0.3s ease;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 4000);
}

// Gallery Lightbox with Mobile Optimizations
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

galleryItems.forEach(item => {
    // Touch-friendly gallery interactions
    if (isMobile) {
        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            item.style.transform = 'scale(0.98)';
        });
        
        item.addEventListener('touchend', (e) => {
            e.preventDefault();
            item.style.transform = '';
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    } else {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Mobile swipe to close lightbox
    if (isMobile) {
        let lightboxTouchStartY = 0;
        let lightboxTouchEndY = 0;
        
        lightbox.addEventListener('touchstart', (e) => {
            lightboxTouchStartY = e.changedTouches[0].screenY;
        });
        
        lightbox.addEventListener('touchend', (e) => {
            lightboxTouchEndY = e.changedTouches[0].screenY;
            const swipeDistance = lightboxTouchStartY - lightboxTouchEndY;
            
            if (Math.abs(swipeDistance) > 100) {
                lightbox.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const cakeDecorations = document.querySelectorAll('.cake-decoration');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    cakeDecorations.forEach((decoration, index) => {
        const speed = 0.5 + (index * 0.1);
        decoration.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Image Loading Animation
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.classList.add('loading');
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Button Animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    btn.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Sparkle Effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Create sparkles periodically
setInterval(createSparkle, 3000);

// Mouse Trail Effect
let mouseTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
    });
    
    if (mouseTrail.length > trailLength) {
        mouseTrail.shift();
    }
    
    // Create trail effect
    if (mouseTrail.length > 5) {
        const trailDot = document.createElement('div');
        trailDot.style.position = 'fixed';
        trailDot.style.left = e.clientX + 'px';
        trailDot.style.top = e.clientY + 'px';
        trailDot.style.width = '4px';
        trailDot.style.height = '4px';
        trailDot.style.background = 'linear-gradient(135deg, #ff6b9d, #ffb3d9)';
        trailDot.style.borderRadius = '50%';
        trailDot.style.pointerEvents = 'none';
        trailDot.style.zIndex = '9999';
        trailDot.style.opacity = '0.7';
        document.body.appendChild(trailDot);
        
        setTimeout(() => {
            trailDot.remove();
        }, 1000);
    }
});

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Floating Animation for Service Cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Rainbow Border Effect
document.querySelectorAll('.service-card, .step').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.classList.add('rainbow-border');
    });
    
    element.addEventListener('mouseleave', function() {
        this.classList.remove('rainbow-border');
    });
});

// Enhanced Gallery Hover Effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
        this.style.boxShadow = '0 20px 40px rgba(255, 107, 157, 0.3)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = '0 10px 25px rgba(255, 107, 157, 0.15)';
    });
});

// Heartbeat Effect for Logo
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', function() {
        this.style.animation = 'heartbeat 0.6s ease-in-out';
    });
    
    logo.addEventListener('animationend', function() {
        this.style.animation = 'heartbeat 2s ease-in-out infinite';
    });
}

// Confetti Effect for Form Submission
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8e8e', '#ffb3d9', '#ffd6e7', '#ff6b6b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(${window.innerHeight}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add confetti to form submission
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            createConfetti();
        }, 2000);
    });
}

// Enhanced Scroll Animations
const scrollAnimations = {
    fadeInUp: {
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'all 0.6s ease-out'
    },
    fadeInLeft: {
        opacity: 0,
        transform: 'translateX(-50px)',
        transition: 'all 0.6s ease-out'
    },
    fadeInRight: {
        opacity: 0,
        transform: 'translateX(50px)',
        transition: 'all 0.6s ease-out'
    },
    scaleIn: {
        opacity: 0,
        transform: 'scale(0.8)',
        transition: 'all 0.6s ease-out'
    }
};

// Apply scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0) scale(1)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for scroll animations
document.querySelectorAll('.service-card, .step, .contact-item, .gallery-item, .about-text').forEach(el => {
    scrollObserver.observe(el);
});

// Preload Images
const imageUrls = [
    'lauren-baking.jpg',
    'cake1.jpg',
    'cake2.jpg',
    'cake3.jpg',
    'cake4.jpg',
    'cake5.jpg',
    'cake6.jpg'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Enhanced Mobile Experience
if (window.innerWidth <= 768) {
    // Add touch feedback for mobile
    document.querySelectorAll('.btn, .service-card, .gallery-item').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Performance Optimization
let ticking = false;

function updateAnimations() {
    // Update parallax and other scroll-based animations
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
});

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loaded');
    
    // Initialize groundbreaking hero interactions
    initParticleSystem();
    initDecorativeElements();
    initMouseTrail();
    initHeroParallax();
    initInteractiveTitle();
    initHeroButtons();
    
    // Initialize any additional animations
    console.log('Wrights Bake House website loaded successfully!');
});
