// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const backToTop = document.getElementById('backToTop');
const bookingForm = document.getElementById('bookingForm');

// Mobile Menu Toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Tab Functionality for Routes
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        btn.classList.add('active');
        document.getElementById(targetTab)?.classList.add('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
    
    // Header background opacity on scroll
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Package Booking Function
function bookPackage(packageType) {
    const packages = {
        'mudah': 'Paket Tingkat Mudah - Rp 150.000-185.000',
        'menengah': 'Paket Tingkat Menengah - Rp 175.000-250.000',
        'sulit': 'Paket Tingkat Sulit - Rp 200.000-350.000+'
    };
    
    const message = `Halo! Saya tertarik dengan ${packages[packageType]}. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6285163689179?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Contact Form Handling
bookingForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const nama = formData.get('nama');
    const phone = formData.get('phone');
    const paket = formData.get('paket');
    const tanggal = formData.get('tanggal');
    const jumlah = formData.get('jumlah');
    const pesan = formData.get('pesan');
    
    // Validate required fields
    if (!nama || !phone || !paket || !tanggal || !jumlah) {
        showNotification('Mohon lengkapi semua field yang wajib diisi!', 'error');
        return;
    }
    
    // Format date
    const dateObj = new Date(tanggal);
    const formattedDate = dateObj.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Package names mapping
    const packageNames = {
        'mudah': 'Tingkat Mudah (Rp 150.000-185.000)',
        'menengah': 'Tingkat Menengah (Rp 175.000-250.000)',
        'sulit': 'Tingkat Sulit (Rp 200.000-350.000+)',
        'custom': 'Custom Package'
    };
    
    // Create WhatsApp message
    let message = `*BOOKING TREKKING JEJAKSENTUL.ID*\n\n`;
    message += `📋 *Detail Booking:*\n`;
    message += `👤 Nama: ${nama}\n`;
    message += `📱 WhatsApp: ${phone}\n`;
    message += `📦 Paket: ${packageNames[paket]}\n`;
    message += `📅 Tanggal: ${formattedDate}\n`;
    message += `👥 Jumlah Peserta: ${jumlah} orang\n`;
    
    if (pesan) {
        message += `💬 Pesan: ${pesan}\n`;
    }
    
    message += `\nMohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih! 🏔️`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/6285163689179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success notification
    showNotification('Pesan berhasil dikirim! Anda akan dialihkan ke WhatsApp.', 'success');
    
    // Reset form
    this.reset();
});

// Notification Function
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    // Set background color based on type
    const colors = {
        'success': '#4CAF50',
        'error': '#f44336',
        'warning': '#FF9800',
        'info': '#2196F3'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Append to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Gallery Lightbox (Simple Implementation)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4').textContent;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${title}">
                <h3>${title}</h3>
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        // Lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const lightboxContent = lightbox.querySelector('.lightbox-content');
        lightboxContent.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            text-align: center;
            position: relative;
        `;
        
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 80vh;
            border-radius: 10px;
        `;
        
        const lightboxTitle = lightbox.querySelector('h3');
        lightboxTitle.style.cssText = `
            color: white;
            margin-top: 1rem;
            font-size: 1.5rem;
        `;
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            background: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #333;
        `;
        
        document.body.appendChild(lightbox);
        
        // Animate in
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
        // Close functionality
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => lightbox.remove(), 300);
        }
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Escape key to close
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.package-card, .route-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Price Calculator (Optional feature)
function calculatePrice(packageType, participants, customOptions = {}) {
    const basePrices = {
        'mudah': { min: 150000, max: 185000 },
        'menengah': { min: 175000, max: 250000 },
        'sulit': { min: 200000, max: 350000 }
    };
    
    const basePrice = basePrices[packageType];
    if (!basePrice) return null;
    
    let finalPrice = basePrice.min;
    
    // Group discount for more than 10 people
    if (participants > 10) {
        finalPrice *= 0.9; // 10% discount
    }
    
    // Weekend surcharge
    if (customOptions.isWeekend) {
        finalPrice *= 1.1; // 10% surcharge
    }
    
    return {
        min: Math.round(finalPrice),
        max: Math.round(basePrice.max * (participants > 10 ? 0.9 : 1) * (customOptions.isWeekend ? 1.1 : 1)),
        participants: participants,
        packageType: packageType
    };
}

// Loading State for Forms
function setLoadingState(button, isLoading = true) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = `<span class="loading"></span> Mengirim...`;
    } else {
        button.disabled = false;
        button.innerHTML = button.getAttribute('data-original-text') || 'Kirim ke WhatsApp';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Store original button text
    const submitBtn = bookingForm?.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.setAttribute('data-original-text', submitBtn.innerHTML);
    }
    
    // Set minimum date to today for booking form
    const dateInput = document.getElementById('tanggal');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    console.log('JejakSentul.id website loaded successfully! 🏔️');
});