/**
 * YES SME - ERP & E-Commerce SaaS Landing Page Controller
 * Handles Dynamic Table Rendering, Category Search, FAQ Accordions, and Modal Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initPricingCards();
  initEnterpriseCard();
  initComparisonTable();
  initFaqAccordion();
  initContactModal();
  initMobileNav();
  initTableSearch();
  initScrollSpy();
});

// SVG Icons helper
const ICONS = {
  checkCircle: `<span class="check-icon" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M5 10.5L8.5 14L15 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`,
  tableCheck: `<span class="val-check" title="Included" aria-label="Included"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M5 10.5L8.5 14L15 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`,
  tableCross: `<span class="val-cross" title="Not Included" aria-label="Not Included">—</span>`,
  infoCircle: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" width="14" height="14"><circle cx="10" cy="10" r="8" stroke-width="1.8"/><path d="M10 9v5m0-8h.01" stroke-width="2" stroke-linecap="round"/></svg>`,
  chevronDown: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" width="16" height="16"><path d="M5 7.5L10 12.5L15 7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  server: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><rect x="3" y="4" width="14" height="4" rx="1.5" stroke-width="1.7"/><rect x="3" y="12" width="14" height="4" rx="1.5" stroke-width="1.7"/><path d="M6 6h.01M6 14h.01" stroke-width="2" stroke-linecap="round"/></svg>`,
  box: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M10 2.5L17 6.5v7l-7 4-7-4v-7l7-4z" stroke-width="1.6"/><path d="M3 6.5l7 4 7-4M10 10.5v7" stroke-width="1.6"/></svg>`,
  users: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><circle cx="7.5" cy="6.5" r="3" stroke-width="1.7"/><path d="M2.5 16.5a5 5 0 0110 0" stroke-width="1.7"/><path d="M14 4.5a3 3 0 010 6m-1 6a4.5 4.5 0 004.5-4.5" stroke-width="1.7"/></svg>`,
  activity: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M3 10h3.5l2.5-6 3 12 2.5-6H17" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  branch: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M3 7l7-4 7 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" stroke-width="1.6"/><path d="M7 17v-6h6v6" stroke-width="1.6"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  globe: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="7.5" stroke-width="1.7"/><path d="M2.5 10h15M10 2.5a12.5 12.5 0 010 15 12.5 12.5 0 010-15" stroke-width="1.6"/></svg>`
};

/**
 * 1. Render Pricing Cards (4-column layout)
 */
function initPricingCards() {
  const container = document.getElementById('pricingCardsGrid');
  if (!container) return;

  const html = PRICING_DATA.packages.map(pkg => {
    const isPopular = pkg.isPopular;
    const badgeHtml = pkg.badge ? `<div class="popular-badge">${pkg.badge}</div>` : '';
    
    // Capacity list HTML
    const capacityItems = [];
    if (pkg.limits.products) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.box}
          <span>Products: <strong>${pkg.limits.products}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.hosting) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.cloud}
          <span>Hosting: <strong>${pkg.limits.hosting}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.website) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.globe}
          <span>Website: <strong>${pkg.limits.website}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.storage) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.server}
          <span>Storage: <strong>${pkg.limits.storage}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.store) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.branch}
          <span>Store: <strong>${pkg.limits.store}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.branches) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.branch}
          <span>Branches: <strong>${pkg.limits.branches}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.traffic) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.activity}
          <span>Traffic: <strong>${pkg.limits.traffic}</strong></span>
        </li>
      `);
    }
    if (pkg.limits.users) {
      capacityItems.push(`
        <li class="capacity-item">
          ${ICONS.users}
          <span>Admin Users: <strong>${pkg.limits.users}</strong></span>
        </li>
      `);
    }

    // Key Highlights HTML
    const highlightsHtml = pkg.highlights.map(item => `
      <li>
        ${ICONS.checkCircle}
        <span>${item}</span>
      </li>
    `).join('');

    const formattedMonthly = Number(pkg.monthlyPrice).toLocaleString('en-US');
    const formattedSetup = Number(pkg.setupFee).toLocaleString('en-US');

    return `
      <article class="pricing-card ${isPopular ? 'is-popular' : ''}" id="card-${pkg.id}">
        ${badgeHtml}
        
        <div class="card-header">
          <h3 class="package-name">${pkg.name}</h3>
          <p class="package-tagline">${pkg.tagline}</p>
        </div>

        <div class="card-price-box">
          <div class="monthly-price-wrap">
            <span class="currency-sym">৳</span>
            <span class="price-amount">${formattedMonthly}</span>
            <span class="price-unit">/ month</span>
          </div>

          <div class="setup-fee-pill" title="One-time setup & onboarding fee">
            <span>One-time setup:</span>
            <strong>৳${formattedSetup}</strong>
          </div>
        </div>

        <div class="card-capacity-box">
          <div class="capacity-title">Plan Capacity & Quota</div>
          <ul class="capacity-list">
            ${capacityItems.join('')}
          </ul>
        </div>

        <div class="card-features-box">
          <div class="features-box-title">Key Feature Highlights</div>
          <ul class="features-list">
            ${highlightsHtml}
          </ul>
        </div>

        <div class="card-cta-wrap">
          <button type="button" 
                  class="btn btn-block ${isPopular ? 'btn-accent' : 'btn-primary'} open-plan-modal" 
                  data-plan-id="${pkg.id}" 
                  data-plan-name="${pkg.name}"
                  aria-label="Select ${pkg.name} Package">
            ${pkg.ctaText}
          </button>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * 2. Render Package 5: Custom / Enterprise
 */
function initEnterpriseCard() {
  const container = document.getElementById('enterpriseShowcase');
  if (!container) return;

  const ent = PRICING_DATA.customEnterprise;
  const highlightsHtml = ent.highlights.map(h => `
    <li>
      ${ICONS.checkCircle}
      <span>${h}</span>
    </li>
  `).join('');

  container.innerHTML = `
    <div class="enterprise-card">
      <div class="enterprise-info">
        <div class="enterprise-badge">${ent.badge}</div>
        <h3 class="enterprise-title">${ent.name}</h3>
        <p class="enterprise-desc">${ent.tagline}</p>
        
        <ul class="enterprise-highlights">
          ${highlightsHtml}
        </ul>
      </div>

      <div class="enterprise-action">
        <div class="enterprise-pricing-label">${ent.priceDisplay}</div>
        <div class="enterprise-pricing-sub">${ent.setupFeeDisplay}</div>
        <button type="button" class="btn btn-lg btn-secondary open-plan-modal" data-plan-id="${ent.id}" data-plan-name="${ent.name}">
          ${ent.ctaText}
        </button>
      </div>
    </div>
  `;
}

/**
 * 3. Render 13-Category Detailed Comparison Table (Exactly 4 Plans)
 */
function initComparisonTable() {
  const tbody = document.getElementById('comparisonTableBody');
  if (!tbody) return;

  let tableHtml = '';

  PRICING_DATA.comparisonCategories.forEach(cat => {
    // Category Header row
    tableHtml += `
      <tr class="tr-category-header" data-category-id="${cat.id}">
        <td colspan="5">
          <div class="category-header-flex">
            <span>${cat.title}</span>
          </div>
        </td>
      </tr>
    `;

    // Feature rows
    cat.features.forEach(feat => {
      const renderCell = (val) => {
        if (val === true) return ICONS.tableCheck;
        if (val === false) return ICONS.tableCross;
        if (val === "To Be Confirmed") return `<span class="val-tbc">To Be Confirmed</span>`;
        return `<span class="val-text">${val}</span>`;
      };

      const tooltipHtml = feat.tooltip ? `
        <span class="tooltip-icon" data-tooltip="${feat.tooltip}" tabindex="0" aria-label="Feature info">
          ${ICONS.infoCircle}
        </span>
      ` : '';

      tableHtml += `
        <tr class="tr-feature" data-category-id="${cat.id}" data-feature-name="${feat.name.toLowerCase()}">
          <td class="td-feature-name">
            <div class="feature-title-wrap">
              <span>${feat.name}</span>
              ${tooltipHtml}
            </div>
          </td>
          <td class="td-val col-starter">${renderCell(feat.starter)}</td>
          <td class="td-val col-basic">${renderCell(feat.basic)}</td>
          <td class="td-val col-medium">${renderCell(feat.medium)}</td>
          <td class="td-val col-high">${renderCell(feat.high)}</td>
        </tr>
      `;
    });
  });

  tbody.innerHTML = tableHtml;
}

/**
 * 4. Comparison Table Real-time Search & Filter
 */
function initTableSearch() {
  const searchInput = document.getElementById('tableSearchInput');
  const countDisplay = document.getElementById('searchResultCount');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const rows = document.querySelectorAll('#comparisonTableBody .tr-feature');
    const catHeaders = document.querySelectorAll('#comparisonTableBody .tr-category-header');
    
    let matchCount = 0;

    rows.forEach(row => {
      const name = row.getAttribute('data-feature-name') || '';
      const isMatch = name.includes(query);
      row.style.display = isMatch ? '' : 'none';
      if (isMatch) matchCount++;
    });

    // Hide empty category headers when filtering
    catHeaders.forEach(catHeader => {
      const catId = catHeader.getAttribute('data-category-id');
      const visibleSiblingRows = document.querySelectorAll(`#comparisonTableBody .tr-feature[data-category-id="${catId}"]:not([style*="display: none"])`);
      catHeader.style.display = (visibleSiblingRows.length > 0) ? '' : 'none';
    });

    if (countDisplay) {
      if (query.length > 0) {
        countDisplay.textContent = `Showing ${matchCount} matching features`;
        countDisplay.style.display = 'inline-block';
      } else {
        countDisplay.style.display = 'none';
      }
    }
  });

  // Expand / Collapse all button
  const toggleBtn = document.getElementById('toggleAllCategoriesBtn');
  if (toggleBtn) {
    let allExpanded = true;
    toggleBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      const catHeaders = document.querySelectorAll('#comparisonTableBody .tr-category-header');
      catHeaders.forEach(header => {
        const catId = header.getAttribute('data-category-id');
        const rows = document.querySelectorAll(`#comparisonTableBody .tr-feature[data-category-id="${catId}"]`);
        rows.forEach(r => r.style.display = allExpanded ? '' : 'none');
      });
      toggleBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
    });
  }
}

/**
 * 5. FAQ Accordion Logic
 */
function initFaqAccordion() {
  const faqContainer = document.getElementById('faqContainer');
  if (!faqContainer) return;

  const faqHtml = PRICING_DATA.faqs.map((item, index) => `
    <div class="faq-item ${index === 0 ? 'is-open' : ''}">
      <button type="button" class="faq-question-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <span class="faq-toggle-icon">${ICONS.chevronDown}</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          ${item.answer}
        </div>
      </div>
    </div>
  `).join('');

  faqContainer.innerHTML = faqHtml;

  // Click handler
  faqContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question-btn');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('is-open');

    // Close other items for a clean single-open accordion feel
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('is-open');
      el.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/**
 * 6. Contact / Get Started Modal
 */
function initContactModal() {
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const planSelect = document.getElementById('modalPlanSelect');
  const form = document.getElementById('contactLeadForm');
  const feedback = document.getElementById('modalFeedback');

  if (!modal) return;

  // Populate plan select dropdown
  if (planSelect) {
    let options = `<option value="">Select a package</option>`;
    PRICING_DATA.packages.forEach(p => {
      options += `<option value="${p.id}">${p.name} (৳${p.monthlyPrice.toLocaleString()}/mo)</option>`;
    });
    options += `<option value="custom">Custom / Enterprise (Tailored)</option>`;
    planSelect.innerHTML = options;
  }

  // Open modal triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-plan-modal');
    if (!trigger) return;

    const planId = trigger.getAttribute('data-plan-id');
    if (planSelect && planId) {
      planSelect.value = planId;
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
    if (feedback) feedback.style.display = 'none';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Submitting Request...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.reset();

        if (feedback) {
          feedback.style.display = 'block';
          feedback.innerHTML = `
            <strong>Thank you!</strong> Your request has been recorded. Our enterprise specialist will call you at the provided number within 2 business hours.
          `;
        }
      }, 700);
    });
  }
}

/**
 * 7. Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('siteNavLinks');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('is-mobile-open');
    const isOpen = navLinks.classList.contains('is-mobile-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-mobile-open');
    });
  });
}

/**
 * 8. ScrollSpy & Sticky Nav Elevation
 */
function initScrollSpy() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = [];

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        sections.push({ id: href, el: target, link });
      }
    }
  });

  const updateNav = () => {
    const scrollY = window.scrollY;

    // Header shadow & border elevation
    if (header) {
      if (scrollY > 15) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // ScrollSpy active link tracking
    const triggerOffset = scrollY + 140;
    let current = null;

    sections.forEach(item => {
      const top = item.el.offsetTop;
      const height = item.el.offsetHeight;
      if (triggerOffset >= top && triggerOffset < top + height) {
        current = item;
      }
    });

    sections.forEach(item => {
      if (current && item.id === current.id) {
        item.link.classList.add('is-active');
      } else {
        item.link.classList.remove('is-active');
      }
    });
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}
