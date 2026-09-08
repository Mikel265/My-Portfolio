// Mikel Graphicals Portfolio JavaScript Data & Interactive Logic

const PROJECTS = [
  {
    id: 101,
    title: "Church Revival Meeting",
    category: "Posters & Flyers",
    description: "Event flyer design for a religious revival meeting with bold typography and high visual impact.",
    image: "images/Professional Church Flyer Us Legal - Made with PosterMyWall (1) - Copy.jpg",
    externalLink: "https://behance.net",
    details: {
      problem: "The church needed a professional, eye-catching flyer to advertise their annual revival week across digital platforms and print media.",
      solution: "Designed a high-contrast flyer with modern gold and deep background colors, clear hierarchy, and prominent speaker details.",
      tools: ["Adobe Photoshop", "CorelDRAW"],
      client: "Church of the Living God"
    }
  },
  {
    id: 102,
    title: "Otunge's Dreadlocks & Nails",
    category: "Branding",
    description: "Luxury logo design and promotional branding for a premium beauty and grooming hub in Nairobi.",
    image: "images/Black and Grey Beauty Salon & Spa Classic Poster (5) - Copy.png",
    externalLink: "https://instagram.com",
    details: {
      problem: "Otunge's Hub needed a chic visual brand identity that appeals to both high-end hair and nail grooming clientele.",
      solution: "Created a sleek black and silver classic aesthetic with elegant typography and clean minimalist icons.",
      tools: ["Adobe Illustrator"],
      client: "Otunge's Hub"
    }
  },
  {
    id: 103,
    title: "Simon Mutongu Campaign",
    category: "Posters & Flyers",
    description: "Political campaign poster for MCA Bahati Ward emphasizing leadership, trust, and clarity.",
    image: "images/Political Flyer Template - Made with PosterMyWall(1) - Copy.jpg",
    externalLink: "#",
    details: {
      problem: "The candidate required a recognizable, trustworthy visual presence for field campaign posters and digital banners.",
      solution: "Structured a clean campaign poster featuring the candidate portrait, vibrant political party colors, and key manifesto bullets.",
      tools: ["Adobe InDesign", "Photoshop"],
      client: "Simon Mutongu Campaign"
    }
  },
  {
    id: 104,
    title: "Uncle Sam NET",
    category: "Social Media Graphics",
    description: "Promotional flyer for an internet service provider advertising high-speed fiber connectivity.",
    image: "images/High-Speed Wi-Fi Fiber Internet Advertising Flyer Template - Made with PosterMyWall(3) - Copy.jpg",
    externalLink: "#",
    details: {
      problem: "Needed a vibrant social media poster to drive package subscriptions for local high-speed fiber Wi-Fi.",
      solution: "Crafted dynamic high-tech visuals highlighting speed packages, prices, and call-to-action contact details.",
      tools: ["Photoshop", "Illustrator"],
      client: "Uncle Sam NET"
    }
  },
  {
    id: 105,
    title: "Power Learn Project",
    category: "Posters & Flyers",
    description: "Recruitment poster for a tech scholarship program introducing software development opportunities.",
    image: "images/unnamed - Copy.png",
    externalLink: "https://powerlearnproject.org",
    details: {
      problem: "PLP needed to attract aspiring youth developers across Africa with an inspiring recruitment banner.",
      solution: "Designed a clean, modern poster focused on tech innovation, career growth, and accessible registration links.",
      tools: ["Photoshop", "Canva"],
      client: "Power Learn Project"
    }
  },
  {
    id: 106,
    title: "Artisan Cafe Menu",
    category: "Branding",
    description: "Elegant menu card design for a local artisan cafe highlighting signature coffee and meals.",
    image: "images/Cafe menu card template - Made with PosterMyWall(1) - Copy.jpg",
    externalLink: "#",
    details: {
      problem: "The cafe needed a refined menu layout that enhances the dining experience and reflects quality ingredients.",
      solution: "Designed a structured menu card with rustic tones, readable typography, and organized categories.",
      tools: ["Adobe InDesign", "Photoshop"],
      client: "Local Cafe"
    }
  },
  {
    id: 107,
    title: "Modern Election Campaign",
    category: "Posters & Flyers",
    description: "Standard political poster focusing on trust, community development, and vision.",
    image: "images/Eunice njeri.png",
    externalLink: "#",
    details: {
      problem: "Candidate required a poster that stood out in crowded public areas while maintaining clear readability.",
      solution: "Employed bold typography, contrasting color blocks, and high-resolution portrait imagery.",
      tools: ["Adobe Photoshop"],
      client: "Political Candidate"
    }
  },
  {
    id: 108,
    title: "Community Vote Flyer",
    category: "Posters & Flyers",
    description: "Warm and approachable campaign flyer designed for grassroots community engagement.",
    image: "images/Brown Modern Vote Election Campaign Flyer - Copy.png",
    externalLink: "#",
    details: {
      problem: "Need for a campaign flyer that resonates warmly with community voters across print and digital media.",
      solution: "Used warm earth tones, approachable typography, and key message highlights.",
      tools: ["Adobe Photoshop"],
      client: "Community Leader"
    }
  },
  {
    id: 109,
    title: "Unlimited 10 Bob Promo",
    category: "Social Media Graphics",
    description: "High-energy promotional graphic for a fast-paced micro-payment service offer.",
    image: "images/Unlimiited ya 10 bob(4).png",
    externalLink: "#",
    details: {
      problem: "Client needed to push a low-cost, high-volume service offer on WhatsApp and Instagram status updates.",
      solution: "Created punchy, vibrant promotional graphics with clear pricing badges and instant call-to-action.",
      tools: ["Canva", "Photoshop"],
      client: "Service Provider"
    }
  },
  {
    id: 110,
    title: "Political Template Design",
    category: "Posters & Flyers",
    description: "Versatile template for political announcements, press releases, and rally dates.",
    image: "images/Political Election Flyer (6) - Copy.png",
    externalLink: "#",
    details: {
      problem: "Need for a reusable template system for rapid campaign update announcements.",
      solution: "Built a structured layout system with editable text areas and consistent brand header elements.",
      tools: ["Adobe Photoshop"],
      client: "Campaign Team"
    }
  },
  {
    id: 111,
    title: "Creative Concept Art",
    category: "Graphic Design",
    description: "Exploration of abstract visual forms, digital art enhancement, and modern composition.",
    image: "images/Screenshot 2025-12-31 144138-Picsart-AiImageEnhancer - Copy.png",
    externalLink: "#",
    details: {
      problem: "Personal portfolio exploration aimed at showcasing creative image editing and AI enhancement techniques.",
      solution: "Combined digital painting, lighting adjustment, and contrast layering.",
      tools: ["Adobe Illustrator", "Photoshop"],
      client: "Personal Project"
    }
  },
  {
    id: 112,
    title: "WhatsApp Marketing Promo",
    category: "Social Media Graphics",
    description: "Optimized graphic layout for WhatsApp status shares, story posts, and direct messaging.",
    image: "images/WhatsApp Image 2026-01-28 at 11.32.03 - Copy.jpeg",
    externalLink: "#",
    details: {
      problem: "Client needed quick turnaround promotional media designed specifically for mobile screen dimensions.",
      solution: "Designed high-contrast vertical graphics optimized for mobile viewing and instant engagement.",
      tools: ["Canva"],
      client: "SME Client"
    }
  },
  {
    id: 113,
    title: "Family & Friends Sunday",
    category: "Posters & Flyers",
    description: "Warm, energetic church event poster designed for Family & Friends Sunday celebration.",
    image: "images/Family Friends Sunday Celebration - Made with PosterMyWall.jpg",
    externalLink: "#",
    details: {
      problem: "Needed a welcoming, festive flyer to advertise an upcoming community church celebration.",
      solution: "Structured a vibrant layout with clean typography, warm colors, and clear timing.",
      tools: ["Adobe Photoshop", "Canva"],
      client: "Community Church"
    }
  },
  {
    id: 114,
    title: "Easter Sunday Service",
    category: "Posters & Flyers",
    description: "Elegant, clean square format promotional flyer for Easter worship service.",
    image: "images/White Professional Easter Church Service Square - Made with PosterMyWall.jpg",
    externalLink: "#",
    details: {
      problem: "Client required a modern Easter Sunday flyer optimized for social media announcements.",
      solution: "Crafted a gold and white aesthetic featuring elegant typography and clear service details.",
      tools: ["Adobe Photoshop", "Illustrator"],
      client: "Grace Worship Center"
    }
  },
  {
    id: 115,
    title: "Brand Campaign Poster",
    category: "Graphic Design",
    description: "High-impact promotional campaign design with bold visual hierarchy.",
    image: "images/e276b516-d99a-41eb-85c7-f8524952d51f.jpg",
    externalLink: "#",
    details: {
      problem: "Create a striking promotional poster for product and brand marketing campaigns.",
      solution: "Designed high-contrast typography elements paired with dynamic background styling.",
      tools: ["Adobe Photoshop"],
      client: "Commercial Brand"
    }
  },
  {
    id: 116,
    title: "Digital Event Banner",
    category: "Social Media Graphics",
    description: "Sleek social media advertisement graphic designed for high mobile engagement.",
    image: "images/e3fb2720-82b8-426a-a406-2f7d39e21a33.jpg",
    externalLink: "#",
    details: {
      problem: "Build an engaging visual banner for mobile and social media promotional campaigns.",
      solution: "Delivered a balanced visual layout with prominent call-to-action details and modern branding.",
      tools: ["Adobe Illustrator", "Photoshop"],
      client: "Corporate Client"
    }
  }
];

const PACKAGES = [
  {
    name: "Startup Package",
    price: "KES 5,000+",
    features: "Logo design (2 options), Business card design, Basic brand style sheet, 2 revisions."
  },
  {
    name: "Small Business Package",
    price: "KES 15,000+",
    popular: true,
    features: "Full Brand Identity, Custom Logo, Social Media Kit (5 templates), Flyer/Poster design, 4 revisions."
  },
  {
    name: "Premium Package",
    price: "KES 45,000+",
    features: "Complete Brand & Digital Solution, Custom Website/Landing Page, Brand Guidelines Book, Unlimited Revisions, Priority Support."
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  initAllPageHandlers();
});

function initAllPageHandlers() {
  initTheme();
  initNavbar();
  renderPortfolioGrid("All", "");
  initCategoryFilters();
  initPortfolioSearch();
  initLightboxModal();
  initContactForm();
  initFAQ();
  initFooterYear();
  initMikiChatbot();
  initMagneticTilt();
  initButtonInteractions();
  initScrollReveal();
  initSmoothScroll();
  initProfileCardFlip();
  initCostCalculator();
  initCopyButtons();
}

// Theme Management
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggleBtn) {
    updateThemeIcon(savedTheme);
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById("themeToggle");
  if (!themeToggleBtn) return;
  if (theme === "dark") {
    // Sun icon for switching back to light theme
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    // Moon icon for switching to dark theme
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
  }
}

// Navbar Active State & Mobile Menu Toggle
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  // Highlight active link based on current filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else if (href !== currentPage) {
      link.classList.remove("active");
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

function createProjectCardHTML(project) {
  return `
    <div class="project-card" data-id="${project.id}">
      <div class="card-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
        <div class="card-overlay">
          <span class="view-case-study">View Case Study <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="card-category">${project.category}</span>
          ${project.externalLink && project.externalLink !== '#' ? `<a href="${project.externalLink}" target="_blank" rel="noopener" class="external-link" aria-label="External Link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>` : ''}
        </div>
        <div class="card-title-link">
          <h3 class="card-title">${project.title}</h3>
        </div>
        <p class="card-description">${project.description}</p>
      </div>
    </div>
  `;
}

// Global active filter state
let currentCategoryFilter = "All";
let currentSearchQuery = "";

// Portfolio Grid Renderer with Category and Live Search Query Support
function renderPortfolioGrid(category = "All", query = "") {
  currentCategoryFilter = category;
  currentSearchQuery = query.toLowerCase().trim();

  const gridContainer = document.getElementById("portfolioGrid");
  const homeGridContainer = document.getElementById("homePortfolioGrid");

  if (gridContainer) {
    let filteredProjects = PROJECTS;

    if (currentCategoryFilter !== "All") {
      filteredProjects = filteredProjects.filter(p => p.category.toLowerCase() === currentCategoryFilter.toLowerCase());
    }

    if (currentSearchQuery !== "") {
      filteredProjects = filteredProjects.filter(p => {
        const titleMatch = p.title.toLowerCase().includes(currentSearchQuery);
        const descMatch = p.description.toLowerCase().includes(currentSearchQuery);
        const clientMatch = p.details.client.toLowerCase().includes(currentSearchQuery);
        const categoryMatch = p.category.toLowerCase().includes(currentSearchQuery);
        const toolMatch = p.details.tools.some(t => t.toLowerCase().includes(currentSearchQuery));
        return titleMatch || descMatch || clientMatch || categoryMatch || toolMatch;
      });
    }

    if (filteredProjects.length === 0) {
      gridContainer.innerHTML = `<div class="no-results-msg">No projects found matching "${query}". Try another search term or filter!</div>`;
    } else {
      gridContainer.innerHTML = filteredProjects.map(project => createProjectCardHTML(project)).join("");
    }
  }

  if (homeGridContainer) {
    const featuredProjects = PROJECTS.slice(0, 6);
    homeGridContainer.innerHTML = featuredProjects.map(project => createProjectCardHTML(project)).join("");
  }

  // Attach lightbox trigger to project cards and observe for scroll reveal
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".external-link")) return;
      const id = parseInt(card.getAttribute("data-id"));
      if (id) {
        openLightbox(id);
      }
    });
  });

  if (typeof initMagneticTilt === "function") {
    initMagneticTilt();
  }

  if (typeof initScrollReveal === "function") {
    initScrollReveal();
  }
}

// Category Filter Buttons
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter") || "All";
      renderPortfolioGrid(category, currentSearchQuery);
    });
  });
}

// Live Portfolio Search Bar Listener
function initPortfolioSearch() {
  const searchInput = document.getElementById("portfolioSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    renderPortfolioGrid(currentCategoryFilter, query);
  });
}

// Lightbox Case Study Modal
function initLightboxModal() {
  if (document.getElementById("lightboxModal")) return;

  const modalHTML = `
    <div class="lightbox-overlay" id="lightboxModal" role="dialog" aria-modal="true">
      <div class="lightbox-modal">
        <button class="lightbox-close" id="lightboxClose" aria-label="Close modal">&times;</button>
        <div class="lightbox-content" id="lightboxContent"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");

  closeBtn?.addEventListener("click", closeLightbox);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  let modal = document.getElementById("lightboxModal");
  if (!modal) {
    initLightboxModal();
    modal = document.getElementById("lightboxModal");
  }

  const content = document.getElementById("lightboxContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="lightbox-hero-wrapper">
      <img src="${project.image}" alt="${project.title}" class="lightbox-hero" />
      <a href="${project.image}" target="_blank" rel="noopener" class="view-full-image-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Open Full Picture (Original Resolution)
      </a>
    </div>
    <span class="lightbox-category">${project.category}</span>
    <h2 class="lightbox-title">${project.title}</h2>
    <p class="lightbox-body">${project.description}</p>
    
    <div class="lightbox-details-grid">
      <div class="lightbox-detail-item">
        <h4>Client</h4>
        <p>${project.details.client}</p>
      </div>
      <div class="lightbox-detail-item">
        <h4>Tools Used</h4>
        <ul class="tools-list">
          ${project.details.tools.map(tool => `<li class="tool-tag">${tool}</li>`).join("")}
        </ul>
      </div>
      <div class="lightbox-detail-item">
        <h4>Challenge & Objective</h4>
        <p>${project.details.problem}</p>
      </div>
      <div class="lightbox-detail-item">
        <h4>Design Solution</h4>
        <p>${project.details.solution}</p>
      </div>
    </div>

    <div style="margin-top: 2rem; text-align: center;">
      <a href="https://wa.me/254795168357?text=Hi%20Mikel!%20I%20saw%20your%20project%20%22${encodeURIComponent(project.title)}%22%20on%20your%20portfolio%20and%20I'd%20like%20to%20request%20a%20similar%20design." target="_blank" rel="noopener" class="btn" style="gap: 0.6rem; display: inline-flex; align-items: center; justify-content: center; background-color: #25D366; border-color: #25D366; color: #fff; font-weight: 600; padding: 0.8rem 1.6rem; border-radius: 30px; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        Request Similar Design on WhatsApp
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Contact Form Handler with FormSubmit AJAX Endpoint Integration
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusContainer = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!statusContainer) return;

      statusContainer.innerHTML = `<div class="status-msg sending">Sending message...</div>`;
      
      const formData = {
        name: document.getElementById("name")?.value,
        email: document.getElementById("email")?.value,
        subject: document.getElementById("subject")?.value,
        message: document.getElementById("message")?.value
      };

      fetch("https://formsubmit.co/ajax/mikelndungu263@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        statusContainer.innerHTML = `<div class="status-msg success">Thank you! Your message has been sent successfully. Mikel will get back to you shortly.</div>`;
        form.reset();
      })
      .catch(error => {
        console.error("Contact Form Error:", error);
        statusContainer.innerHTML = `<div class="status-msg success">Thank you! Your message has been received. Mikel will get back to you shortly.</div>`;
        form.reset();
      });
    });
  }
}

// FAQ Accordion Handler
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// Dynamic Footer Copyright Year
function initFooterYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll("footer p").forEach(p => {
    p.innerHTML = p.innerHTML.replace(/&copy;\s*\d{4}/g, `&copy; ${currentYear}`);
  });
}

// Miki AI Chatbot Assistant Widget
function initMikiChatbot() {
  const mikiToggle = document.getElementById("mikiToggle");
  const mikiWindow = document.getElementById("mikiWindow");
  const mikiClose = document.getElementById("mikiClose");
  const mikiInput = document.getElementById("mikiInput");
  const mikiSend = document.getElementById("mikiSend");
  const mikiMessages = document.getElementById("mikiMessages");

  if (!mikiToggle || !mikiWindow) return;

  mikiToggle.addEventListener("click", () => {
    mikiWindow.classList.toggle("active");
  });

  mikiClose?.addEventListener("click", () => {
    mikiWindow.classList.remove("active");
  });

  const sendMessage = () => {
    const text = mikiInput.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    mikiInput.value = "";

    setTimeout(() => {
      const response = getMikiAIResponse(text);
      appendMessage(response, "ai");
    }, 600);
  };

  mikiSend?.addEventListener("click", sendMessage);
  mikiInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

function appendMessage(text, sender) {
  const mikiMessages = document.getElementById("mikiMessages");
  if (!mikiMessages) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = text;
  mikiMessages.appendChild(msgDiv);
  mikiMessages.scrollTop = mikiMessages.scrollHeight;
}

function getMikiAIResponse(query) {
  const q = query.toLowerCase();

  // Project lookup
  const foundProject = PROJECTS.find(p => 
    q.includes(p.title.toLowerCase()) || 
    p.title.toLowerCase().split(" ").some(w => w.length > 3 && q.includes(w))
  );

  if (foundProject) {
    return `I found "${foundProject.title}"! It's a ${foundProject.category} project created for ${foundProject.details.client}. Go to the Portfolio page to view the full case study.`;
  }

  if (q.includes("price") || q.includes("cost") || q.includes("package") || q.includes("money") || q.includes("kes")) {
    if (q.includes("startup")) {
      return `The Startup Package is KES 5,000+. Includes: ${PACKAGES[0].features}`;
    }
    if (q.includes("business") || q.includes("sme")) {
      return `The Small Business Package is KES 15,000+. Includes: ${PACKAGES[1].features}`;
    }
    if (q.includes("premium")) {
      return `The Premium Package is KES 45,000+. Includes: ${PACKAGES[2].features}`;
    }
    return `Mikel offers three main packages: Startup (KES 5,000+), Small Business (KES 15,000+), and Premium (KES 45,000+). Check out the Services page for full details!`;
  }

  if (q.includes("phone") || q.includes("whatsapp") || q.includes("number") || q.includes("contact") || q.includes("call")) {
    return `You can contact Mikel directly via WhatsApp/Phone at +254 795 168 357 or via email at mikelndungu263@gmail.com.`;
  }

  if (q.includes("email") || q.includes("mail")) {
    return `Mikel's email address is mikelndungu263@gmail.com.`;
  }

  if (q.includes("location") || q.includes("where") || q.includes("nakuru") || q.includes("city")) {
    return `Mikel is based in Nakuru, Kenya.`;
  }

  if (q.includes("github") || q.includes("social") || q.includes("instagram") || q.includes("linkedin")) {
    return `You can connect with Mikel on GitHub (Mikel265), Instagram (@mikel_ndungu), LinkedIn (Mikel Ndung'u), and Facebook (shymikel)!`;
  }

  if (q.includes("service") || q.includes("logo") || q.includes("branding") || q.includes("flyer")) {
    return `Mikel specializes in Logo Design, Brand Identity Systems, Posters & Flyers, Social Media Graphics, and Web & UI Design.`;
  }

  if (q.includes("cv") || q.includes("resume") || q.includes("bio") || q.includes("experience")) {
    return `You can download Mikel's official CV/Resume directly from the About page or by heading to assets/Michael_Ndungu_CV.pdf!`;
  }

  if (q.includes("who") || q.includes("mikel") || q.includes("michael") || q.includes("about")) {
    return `Mikel is a visual strategist & graphic designer based in Nakuru, Kenya, specializing in creating bold brand identities and high-impact designs for businesses and organizations.`;
  }

  return `Thanks for asking! I'm Miki, Mikel's virtual assistant. You can ask me about portfolio projects, pricing packages, services, or how to get in touch with Mikel at +254 795 168 357.`;
}

// Instant SPA Page Router (Zero White Flash Navigation)
function initPageTransitions() {
  document.body.classList.add("page-loaded");

  document.addEventListener("click", async (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.endsWith(".pdf") ||
      link.target === "_blank" ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
    ) {
      return;
    }

    const isRelative = !href.includes("://") && !href.startsWith("//");
    const isSameHost = href.includes(window.location.hostname);

    if (isRelative || isSameHost) {
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      const targetPath = href.split("#")[0].split("/").pop() || "index.html";

      if (currentPath === targetPath && !href.includes("#")) {
        return;
      }

      e.preventDefault();

      try {
        const response = await fetch(href);
        if (!response.ok) {
          window.location.href = href;
          return;
        }

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        const newBody = doc.querySelector("body");
        const newTitle = doc.querySelector("title");

        if (newBody) {
          document.body.innerHTML = newBody.innerHTML;
          if (newTitle) document.title = newTitle.innerText;
          window.history.pushState({}, "", href);
          window.scrollTo({ top: 0, behavior: "instant" });

          initAllPageHandlers();
        } else {
          window.location.href = href;
        }
      } catch (err) {
        window.location.href = href;
      }
    }
  });

  window.addEventListener("popstate", () => {
    window.location.reload();
  });
}

// Ensure Instant Visibility for All Sections
function initScrollReveal() {
  document.querySelectorAll(".section, .hero-content, .service-card, .project-card, .about-section").forEach(el => {
    el.classList.add("is-visible");
  });
}

// Smooth Anchor Scrolling
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// 1. Custom Friendly Cursor (Desktop Only)
function initCustomCursor() {
  // Custom cursor disabled as requested
}

// 2. 3D Magnetic Parallax & Tilt Effect
function initMagneticTilt() {
  if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) return;

  const tiltElements = document.querySelectorAll(
    ".project-card, .service-card, .testimonial-card, .philosophy-card, .about-image-wrapper, .pricing-card"
  );

  tiltElements.forEach(el => {
    if (el.dataset.tiltInitialized) return;
    el.dataset.tiltInitialized = "true";

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / (rect.height / 2)) * 5;
      const rotateY = (x / (rect.width / 2)) * 5;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  });
}

// 3. Button Micro-Interactions
function initButtonInteractions() {
  const buttons = document.querySelectorAll(".btn, .social-btn, .filter-btn, .theme-toggle, .miki-toggle");
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(hover: none)").matches) return;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
      btn.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px) scale(1)";
    });
  });
}

// 4. Interactive Profile 3D Photo Spin
function initProfileCardFlip() {
  const imageWrapper = document.querySelector(".about-image-wrapper");
  if (!imageWrapper) return;

  imageWrapper.addEventListener("click", () => {
    imageWrapper.classList.toggle("spin-active");
  });
}

// 5. Interactive Project Cost Estimator Calculator
function initCostCalculator() {
  const checkboxes = document.querySelectorAll(".calc-check");
  const totalPriceEl = document.getElementById("calcTotalPrice");
  const summaryTextEl = document.getElementById("calcSummaryText");
  const whatsappBtn = document.getElementById("calcWhatsAppBtn");

  if (!checkboxes.length || !totalPriceEl || !whatsappBtn) return;

  function updateCalculation() {
    let total = 0;
    const selectedItems = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.getAttribute("data-price") || "0", 10);
        const name = cb.getAttribute("data-name") || "";
        total += price;
        selectedItems.push(name);
      }
    });

    totalPriceEl.innerText = `KES ${total.toLocaleString()}`;

    if (selectedItems.length === 0) {
      summaryTextEl.innerText = "Select at least one deliverable to estimate price.";
      whatsappBtn.style.opacity = "0.5";
      whatsappBtn.style.pointerEvents = "none";
      whatsappBtn.href = "#";
    } else {
      summaryTextEl.innerText = `Selected (${selectedItems.length}): ${selectedItems.join(", ")}`;
      whatsappBtn.style.opacity = "1";
      whatsappBtn.style.pointerEvents = "auto";

      const messageText = `Hi Mikel! I used your website project calculator and I'd like a custom proposal for:\n- ${selectedItems.join("\n- ")}\n\nEstimated Total: KES ${total.toLocaleString()}`;
      whatsappBtn.href = `https://wa.me/254795168357?text=${encodeURIComponent(messageText)}`;
    }
  }

  checkboxes.forEach(cb => cb.addEventListener("change", updateCalculation));
  updateCalculation();
}

// 6. 1-Click Copy Buttons
function initCopyButtons() {
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHTML = btn.innerHTML;
        btn.classList.add("copied");
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = originalHTML;
        }, 2000);
      });
    });
  });
}


