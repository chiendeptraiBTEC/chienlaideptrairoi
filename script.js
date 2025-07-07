// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle && menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('open');
});

// Đóng menu khi click ngoài (mobile)
document.addEventListener('click', function(e) {
  if (mainNav && mainNav.classList.contains('open')) {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove('open');
    }
  }
});

// Search popup
const searchBtn = document.getElementById('searchBtn');
const searchInputWrapper = document.getElementById('searchInputWrapper');
const closeSearch = document.getElementById('closeSearch');
searchBtn && searchBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  searchInputWrapper.style.display = 'flex';
  document.getElementById('searchInput').focus();
});
closeSearch && closeSearch.addEventListener('click', function() {
  searchInputWrapper.style.display = 'none';
});
document.addEventListener('click', function(e) {
  if (searchInputWrapper && searchInputWrapper.style.display === 'flex') {
    if (!searchInputWrapper.contains(e.target) && e.target !== searchBtn) {
      searchInputWrapper.style.display = 'none';
    }
  }
});
// Ngăn click trong input không đóng popup
searchInputWrapper && searchInputWrapper.addEventListener('click', function(e) {
  e.stopPropagation();
});

// Popup open/close
function openPopup(id) {
  // ...
}
function closePopup(id) {
  // ...
}

// Smooth scroll
function scrollToSection(id) {
  // ...
}

// Carousel alumni
function initAlumniCarousel() {
  // ...
}

// Popup đăng ký Hero
const openRegister = document.getElementById('openRegister');
const registerPopup = document.getElementById('registerPopup');
const closeRegister = document.getElementById('closeRegister');
openRegister && openRegister.addEventListener('click', function(e) {
  e.preventDefault();
  registerPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeRegister && closeRegister.addEventListener('click', function() {
  registerPopup.classList.remove('active');
  document.body.style.overflow = '';
});
registerPopup && registerPopup.addEventListener('click', function(e) {
  if (e.target === registerPopup) {
    registerPopup.classList.remove('active');
    document.body.style.overflow = '';
  }
});
// Smooth scroll cho nút Tìm Hiểu
const scrollToAbout = document.getElementById('scrollToAbout');
scrollToAbout && scrollToAbout.addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('about-program').scrollIntoView({ behavior: 'smooth' });
});

// Popup mô tả ngành
const programInfoBtns = document.querySelectorAll('.program-info-btn');
programInfoBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const major = btn.getAttribute('data-major');
    alert('Thông tin chi tiết ngành: ' + major);
  });
});
const closeMajorBtns = document.querySelectorAll('.close-popup[data-close]');
closeMajorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const id = btn.getAttribute('data-close');
    const popup = document.getElementById(id);
    if (popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
// Đóng popup khi click ngoài
['popup-design','popup-business','popup-it','popup-semicon'].forEach(id => {
  const popup = document.getElementById(id);
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

// Alumni carousel (5 thẻ)
const alumniCarousel = document.getElementById('alumniCarousel');
const alumniCards = alumniCarousel ? Array.from(alumniCarousel.children) : [];
const alumniPrev = document.getElementById('alumniPrev');
const alumniNext = document.getElementById('alumniNext');
let alumniIndex = 0;
function getAlumniPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 5;
}
function showAlumni() {
  const perView = getAlumniPerView();
  alumniCards.forEach((card, i) => {
    if (i >= alumniIndex && i < alumniIndex + perView) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
function nextAlumni() {
  const perView = getAlumniPerView();
  alumniIndex = Math.min(alumniIndex + perView, alumniCards.length - perView);
  showAlumni();
}
function prevAlumni() {
  const perView = getAlumniPerView();
  alumniIndex = Math.max(alumniIndex - perView, 0);
  showAlumni();
}
alumniNext && alumniNext.addEventListener('click', nextAlumni);
alumniPrev && alumniPrev.addEventListener('click', prevAlumni);
window.addEventListener('resize', showAlumni);
showAlumni();
// Alumni popup
const alumniMoreBtns = document.querySelectorAll('.alumni-more-btn');
alumniMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const alumni = btn.getAttribute('data-alumni');
    const popup = document.getElementById('popup-' + alumni);
    if (popup) {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});
['popup-thanh','popup-mai','popup-quyet'].forEach(id => {
  const popup = document.getElementById(id);
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

// News popup
const newsMoreBtns = document.querySelectorAll('.news-more-btn');
newsMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Thông tin chi tiết tin tức sẽ được bổ sung sau!');
  });
});
['popup-chieusang','popup-hanhtrinh','popup-yakult'].forEach(id => {
  const popup = document.getElementById(id);
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

// Footer social icons
const socialLinks = {
  facebook: 'https://facebook.com/fptbtec',
  youtube: 'https://youtube.com',
  tiktok: 'https://tiktok.com',
};
document.querySelectorAll('.footer-icon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    const type = icon.getAttribute('data-social');
    if (socialLinks[type]) {
      window.open(socialLinks[type], '_blank');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Khởi tạo các chức năng khi DOM sẵn sàng
  initAlumniCarousel();
});

// Dropdown menu hiện đại: click mới mở, click ra ngoài thì đóng
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
  const toggle = drop.querySelector('.dropdown-toggle');
  toggle && toggle.addEventListener('click', function(e) {
    e.preventDefault();
    // Đóng tất cả dropdown khác
    dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
    drop.classList.toggle('open');
  });
});
window.addEventListener('click', function(e) {
  dropdowns.forEach(drop => {
    if (!drop.contains(e.target)) {
      drop.classList.remove('open');
    }
  });
});

// Popup Liên hệ
const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const closeContact = document.getElementById('closeContact');
contactBtn && contactBtn.addEventListener('click', function(e) {
  e.preventDefault();
  contactPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeContact && closeContact.addEventListener('click', function() {
  contactPopup.classList.remove('active');
  document.body.style.overflow = '';
});
contactPopup && contactPopup.addEventListener('click', function(e) {
  if (e.target === contactPopup) {
    contactPopup.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Bộ lọc ngành hot
const filterBtns = document.querySelectorAll('.filter-btn');
const programCards = document.querySelectorAll('.program-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    programCards.forEach(card => {
      if (filter === 'all') card.style.display = '';
      else if (filter === 'hot') card.classList.contains('hot') ? card.style.display = '' : card.style.display = 'none';
    });
  });
});

// Footer Đăng Ký Ngay mở popup
const footerRegisterBtn = document.getElementById('footerRegisterBtn');
footerRegisterBtn && footerRegisterBtn.addEventListener('click', function() {
  const popup = document.getElementById('registerPopup');
  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');
newsletterForm && newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  newsletterSuccess.style.display = 'block';
  setTimeout(() => newsletterSuccess.style.display = 'none', 3000);
  newsletterForm.reset();
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn && scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// HERO TYPEWRITER & POEM POPUP
const heroTypewriter = document.getElementById('heroTypewriter');
const heroPoem = [
  'Trạng Code ngồi bên cửa sổ,',
  'Nắng vàng rơi trên trang thơ,',
  'Mùa hè BTEC rực rỡ,',
  'Mở lối truyền thống, hiện đại hòa mơ.'
];
function typeWriterEffect(lines, el, speed = 45, lineDelay = 700) {
  let line = 0, char = 0;
  el.textContent = '';
  function typeLine() {
    if (line >= lines.length) return;
    if (char < lines[line].length) {
      el.textContent += lines[line][char];
      char++;
      setTimeout(typeLine, speed);
    } else {
      el.textContent += '\n';
      line++;
      char = 0;
      setTimeout(typeLine, lineDelay);
    }
  }
  typeLine();
}
if (heroTypewriter) {
  typeWriterEffect(heroPoem, heroTypewriter);
}
// Popup thơ Trạng Code
const openPoem = document.getElementById('openPoem');
const poemPopup = document.getElementById('poemPopup');
const closePoem = document.getElementById('closePoem');
openPoem && openPoem.addEventListener('click', function(e) {
  e.preventDefault();
  poemPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closePoem && closePoem.addEventListener('click', function() {
  poemPopup.classList.remove('active');
  document.body.style.overflow = '';
});
poemPopup && poemPopup.addEventListener('click', function(e) {
  if (e.target === poemPopup) {
    poemPopup.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Hiệu ứng mở menu mobile
const toggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Filter ngành học (duplicate removed)
// const filterBtns = document.querySelectorAll('.filter-btn');
// filterBtns.forEach(btn => {
//   btn.addEventListener('click', function() {
//     filterBtns.forEach(b => b.classList.remove('active'));
//     this.classList.add('active');
//     // Lọc card ngành học ở đây nếu muốn
//   });
// });

// Popup chi tiết card
const cardBtns = document.querySelectorAll('.card-btn');
cardBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Thông tin chi tiết sẽ được bổ sung sau!');
  });
});

// Alumni carousel (demo scroll)
const alumniCarouselEl = document.querySelector('.alumni-carousel');
if(alumniCarouselEl) {
  alumniCarouselEl.addEventListener('wheel', e => {
    alumniCarouselEl.scrollLeft += e.deltaY;
  });
}

// Scroll to top
const scrollBtn = document.querySelector('.scroll-top');
if(scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
}

// Hero Animation Controller
document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero-section');
  const scrollDragonGroup = document.querySelector('.scroll-dragon-group');
  
  if (heroSection && scrollDragonGroup) {
    // Start animation after a short delay
    setTimeout(() => {
      // First, move scroll to final position
      scrollDragonGroup.classList.add('final-position');
      
      // After scroll starts moving, animate other elements
      setTimeout(() => {
        heroSection.classList.add('animate-elements');
      }, 200); // Start showing other elements when scroll is 200ms into its animation
      
    }, 500); // Initial delay before starting animation
  }
});

// Chatbox toggle logic
const chatboxToggleBtn = document.querySelector('.chatbox-toggle-btn');
const chatbox = document.querySelector('.chatbox');
const chatboxOptions = document.querySelector('.chatbox-options');

if (chatboxToggleBtn && chatbox) {
  chatboxToggleBtn.addEventListener('click', function(e) {
    chatbox.classList.toggle('open');
    if (chatbox.classList.contains('open')) {
      chatbox.focus();
    }
  });
  
  // Đóng chatbox khi click ngoài vùng chatbox
  document.addEventListener('mousedown', function(e) {
    if (chatbox.classList.contains('open') && !chatbox.contains(e.target) && !chatboxToggleBtn.contains(e.target)) {
      chatbox.classList.remove('open');
    }
  });
}

// --- XỬ LÝ INPUT CHATBOX ---
// Lấy phần tử input chatbox để lắng nghe sự kiện nhập tin nhắn
const chatboxInput = document.querySelector('.chatbox-input');
// Lắng nghe sự kiện nhấn phím trên input chatbox
if (chatboxInput) {
  chatboxInput.addEventListener('keypress', function(e) {
    // Nếu nhấn Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      const message = this.value.trim();
      if (message) {
        // Thêm tin nhắn người dùng vào khung chat
        addUserMessage(message);
        this.value = '';
        // Gửi phản hồi tự động từ bot
        setTimeout(() => {
          addBotResponse(message);
        }, 500);
      }
    }
  });
}
// Lấy khung chứa input chatbox để chèn chatbox-body (khung tin nhắn động) vào đúng vị trí
const inputWrapper = document.querySelector('.chatbox-input-wrapper');

// Xử lý click vào các option
if (chatboxOptions) {
  chatboxOptions.addEventListener('click', function(e) {
    if (e.target.classList.contains('chatbox-option') || e.target.closest('.chatbox-option')) {
      const option = e.target.closest('.chatbox-option');
      const optionText = option.querySelector('span').textContent;
      
      // Thêm tin nhắn người dùng
      addUserMessage(optionText);
      
      // Phản hồi theo option
      setTimeout(() => {
        addBotResponse(optionText);
      }, 500);
    }
  });
}

// Hàm kiểm tra và render nội dung chat (text + ảnh)
function renderChatContent(message) {
  // Regex tìm tất cả link ảnh
  const imgRegex = /(https?:\/\/(?:[\w.-]+)\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^\s]*)?)/gi;
  let parts = [];
  let lastIndex = 0;
  let match;
  // Tìm tất cả các link ảnh trong message
  while ((match = imgRegex.exec(message)) !== null) {
    // Thêm text trước ảnh (nếu có)
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: message.slice(lastIndex, match.index) });
    }
    // Thêm ảnh
    parts.push({ type: 'img', content: match[1] });
    lastIndex = imgRegex.lastIndex;
  }
  // Thêm phần text còn lại (nếu có)
  if (lastIndex < message.length) {
    parts.push({ type: 'text', content: message.slice(lastIndex) });
  }
  // Tạo HTML
  return parts.map(part => {
    if (part.type === 'img') {
      return `<img src="${part.content}" alt="image" style="max-width: 100%; max-height: 120px; display: block; margin: 4px 0; border-radius: 6px; box-shadow: 0 1px 4px #0002;" loading="lazy">`;
    } else if (part.type === 'text' && part.content.trim() !== '') {
      // Escape HTML
      return `<span>${part.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`;
    } else {
      return '';
    }
  }).join('');
}

// Hàm thêm tin nhắn người dùng
function addUserMessage(message) {
  const chatboxBody = document.querySelector('.chatbox-body') || createChatboxBody();
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message user-message';
  // Nếu message là HTML img (từ upload), render trực tiếp
  if (typeof message === 'string' && message.trim().startsWith('<img')) {
    messageDiv.innerHTML = `
      <div class="message-content">
        ${message}
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="message-content">
        ${renderChatContent(message)}
      </div>
    `;
  }
  chatboxBody.appendChild(messageDiv);
  chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

// Hàm thêm phản hồi bot
function addBotResponse(userMessage) {
  const chatboxBody = document.querySelector('.chatbox-body') || createChatboxBody();
  let response = '';
  // Logic phản hồi theo tin nhắn
  if (userMessage.includes('khóa học') || userMessage.includes('Khóa học')) {
    response = 'Chúng tôi có các khóa học: Công nghệ thông tin, Quản trị kinh doanh, Thiết kế đồ họa, Ngôn ngữ Anh. Bạn quan tâm khóa nào?';
  } else if (userMessage.includes('thông tin') || userMessage.includes('trường')) {
    response = 'BTEC là trường đào tạo theo chuẩn quốc tế. Chúng tôi có cơ sở vật chất hiện đại và đội ngũ giảng viên chất lượng cao.';
  } else if (userMessage.includes('học phí') || userMessage.includes('phí')) {
    response = 'Học phí dao động từ 15-25 triệu/năm tùy theo ngành học. Bạn có thể liên hệ hotline để được tư vấn chi tiết.';
  } else if (userMessage.includes('đăng ký') || userMessage.includes('tuyển sinh')) {
    response = 'Để đăng ký, bạn có thể: 1) Đăng ký online trên website, 2) Gọi hotline, 3) Đến trực tiếp trường. Bạn muốn đăng ký theo cách nào?';
  } else if (userMessage.includes('ảnh demo')) {
    response = 'Đây là ảnh demo: https://images.unsplash.com/photo-1506744038136-46273834b3fb.jpg https://images.unsplash.com/photo-1465101046530-73398c7f28ca.jpg';
  } else {
    response = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể. Bạn có thể hỏi về khóa học, thông tin trường, học phí hoặc đăng ký.';
  }
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message bot-message';
  messageDiv.innerHTML = `
    <div class="message-content">
      ${renderChatContent(response)}
    </div>
  `;
  chatboxBody.appendChild(messageDiv);
  chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

// Hàm tạo chatbox body nếu chưa có
function createChatboxBody() {
  const customChatbox = document.querySelector('.custom-chatbox');
  const chatboxBody = document.createElement('div');
  chatboxBody.className = 'chatbox-body';
  
  // Chèn chatbox-body vào giữa options và input
  const inputWrapper = document.querySelector('.chatbox-input-wrapper');
  customChatbox.insertBefore(chatboxBody, inputWrapper);
  
  return chatboxBody;
}

// Xử lý upload ảnh từ user
const chatboxUpload = document.querySelector('.chatbox-upload');
if (chatboxUpload) {
  chatboxUpload.addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          // Gửi ảnh như một tin nhắn user
          addUserMessage(`<img src="${evt.target.result}" alt="user image" style="max-width:100%;max-height:120px;display:block;margin:4px 0;border-radius:6px;box-shadow:0 1px 4px #0002;">`);
        };
        reader.readAsDataURL(file);
      }
    });
    chatboxUpload.value = '';
  });
}

// Hiệu ứng glassmorphism/shadow cho navbar khi cuộn
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add('navbar-glass');
  } else {
    navbar.classList.remove('navbar-glass');
  }
});

// Navbar toggle functionality
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
  
  // Đóng menu khi click ngoài
  document.addEventListener('click', function(e) {
    if (navbarMenu.classList.contains('active')) {
      if (!navbarMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
      }
    }
  });
  
  // Đóng menu khi click vào link
  navbarMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });
}

// Nút đăng ký navbar
const navbarRegisterBtn = document.querySelector('.navbar-register-btn');
if (navbarRegisterBtn) {
  navbarRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Mở popup đăng ký hoặc scroll đến form đăng ký
    const registerPopup = document.getElementById('registerPopup');
    if (registerPopup) {
      registerPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      // Nếu không có popup, scroll đến section đăng ký
      const registerSection = document.querySelector('#register, .register-section');
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Đóng menu mobile nếu đang mở
    if (navbarToggle && navbarMenu) {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  });
}

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.classList.add('dark');
        darkModeToggle.textContent = '☀️';
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark');
        
        // Change icon
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';
            localStorage.setItem('darkMode', 'true');
        } else {
            darkModeToggle.textContent = '🌙';
            localStorage.setItem('darkMode', 'false');
        }
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
});

// ==== HIGHLIGHTS: STUDENT JOURNEY TIMELINE POPUP ====
document.querySelectorAll('.journey-step').forEach(step => {
  step.addEventListener('click', function() {
    const stepKey = step.getAttribute('data-step');
    const popup = document.getElementById('popup-' + stepKey);
    if (popup) {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});
document.querySelectorAll('.close-popup[data-close]').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const id = btn.getAttribute('data-close');
    const popup = document.getElementById(id);
    if (popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
document.querySelectorAll('.journey-popup').forEach(popup => {
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
// ==== END HIGHLIGHTS POPUP ====

// Alumni Honor Board Carousel - 3 cards per view
(function() {
  const cards = document.querySelectorAll('.alumni-honor-board .alumni-card');
  const dots = document.querySelectorAll('.alumni-honor-board .carousel-dot');
  const cardsPerView = 3;
  let current = 0;
  function showCards(idx) {
    cards.forEach((c, i) => {
      c.classList.toggle('active', i >= idx * cardsPerView && i < (idx + 1) * cardsPerView);
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  // Tính số trang
  const totalPages = Math.ceil(cards.length / cardsPerView);
  // Nếu cần, tạo thêm dot
  const controls = document.querySelector('.alumni-honor-board .carousel-controls');
  if (controls && dots.length < totalPages) {
    for (let i = dots.length; i < totalPages; i++) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot';
      controls.appendChild(dot);
      dot.addEventListener('click', () => {
        current = i;
        showCards(current);
      });
    }
  }
  // Gán lại dots sau khi có thể đã thêm mới
  const allDots = document.querySelectorAll('.alumni-honor-board .carousel-dot');
  allDots.forEach((dot, idx) => {
    dot.onclick = () => {
      current = idx;
      showCards(current);
    };
  });
  if(cards.length > 0) showCards(current);
})();

// Filter tabs for Modern News Board
const newsTabs = document.querySelectorAll('.news-tab');
const newsCards = document.querySelectorAll('.modern-news-board .news-card');
newsTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    newsTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const type = tab.getAttribute('data-type');
    newsCards.forEach(card => {
      if (type === 'all' || card.getAttribute('data-type') === type) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}); 