/**
 * R & R ChemTech - Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle - Close on Link Click & Escape Key
  const menuCheckbox = document.getElementById('mt');
  if (menuCheckbox) {
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        menuCheckbox.checked = false;
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menuCheckbox.checked = false;
      }
    });
  }

  // 2. Animated Stats Counter
  const statsBanner = document.getElementById('statsBanner');
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  const animateCounters = () => {
    const duration = 1600;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const current = Math.floor(easeOut * target);
        counter.textContent = current;
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counters.forEach(counter => {
          counter.textContent = counter.getAttribute('data-target');
        });
      }
    };

    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && statsBanner) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounters();
          observer.unobserve(statsBanner);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBanner);
  }

  // 3. Request a Quote Form Handling
  const quoteForm = document.getElementById('quoteForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = origText;
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
        quoteForm.reset();
        
        if (formSuccess) {
          formSuccess.style.display = 'block';
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 6000);
        }
      }, 700);
    });
  }

  // 4. Export Desk Quick Quote Modal Logic
  const quickModal = document.getElementById('quickQuoteModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const quickQuoteForm = document.getElementById('quickQuoteForm');
  const modalSuccessState = document.getElementById('modalSuccessState');
  const modalCommodityInput = document.getElementById('modalCommodityInput');
  const pillButtons = document.querySelectorAll('.pill-btn');
  const exportDeskButtons = document.querySelectorAll('.ed-row-btn');
  let lastActiveElement = null;

  const openQuickModal = (commodityName) => {
    if (!quickModal) return;
    lastActiveElement = document.activeElement;

    // Reset form & success states
    if (quickQuoteForm) {
      quickQuoteForm.reset();
      quickQuoteForm.style.display = 'flex';
    }
    if (modalSuccessState) {
      modalSuccessState.style.display = 'none';
    }

    // Set target commodity
    const targetCommodity = commodityName || 'Rice';
    if (modalCommodityInput) {
      modalCommodityInput.value = targetCommodity;
    }

    // Update pill buttons state
    pillButtons.forEach(btn => {
      const isMatch = btn.getAttribute('data-value').toLowerCase() === targetCommodity.toLowerCase();
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
    });

    // Animate open
    quickModal.classList.add('is-open');
    quickModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Auto-focus first meaningful field
    setTimeout(() => {
      const destInput = document.getElementById('modalDestination');
      if (destInput) destInput.focus();
    }, 120);
  };

  const closeQuickModal = () => {
    if (!quickModal) return;
    quickModal.classList.remove('is-open');
    quickModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // Expose globally
  window.openQuickModal = openQuickModal;
  window.closeQuickModal = closeQuickModal;

  // Wire Export Desk buttons in Hero (direct + delegation fallback)
  exportDeskButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const commodity = btn.getAttribute('data-commodity');
      openQuickModal(commodity);
    });
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ed-row-btn');
    if (btn) {
      e.preventDefault();
      const commodity = btn.getAttribute('data-commodity') || 'Rice';
      openQuickModal(commodity);
    }
  });

  // Wire Pill buttons inside Modal
  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-value');
      if (modalCommodityInput) {
        modalCommodityInput.value = value;
      }
      pillButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
    });
  });

  // Modal Close buttons
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeQuickModal);

  // Close on Backdrop Click
  if (quickModal) {
    quickModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop') || e.target === quickModal) {
        closeQuickModal();
      }
    });
  }

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quickModal && quickModal.classList.contains('is-open')) {
      closeQuickModal();
    }
  });

  // Fast-track Modal Form Submission
  if (quickQuoteForm) {
    quickQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('modalSubmitBtn');
      const origHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Transmitting to Trade Desk...</span>';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = origHtml;
          submitBtn.disabled = false;
        }
        quickQuoteForm.style.display = 'none';
        if (modalSuccessState) {
          modalSuccessState.style.display = 'block';
        }
      }, 600);
    });
  }

  // 5. Trade FAQ Accordion Logic (Hover to Reveal + Touch/Click Support)
  const faqItems = document.querySelectorAll('.faq-item');

  const activateFaqItem = (targetItem) => {
    if (!targetItem) return;
    faqItems.forEach(item => {
      const isTarget = item === targetItem;
      item.classList.toggle('active', isTarget);
      const trigger = item.querySelector('.faq-trigger');
      if (trigger) {
        trigger.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
      }
    });
  };

  faqItems.forEach(item => {
    // Desktop Hover: Reveal answer automatically on hover
    item.addEventListener('mouseenter', () => {
      activateFaqItem(item);
    });

    // Touch/Click: Expand/toggle on click
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        const isCurrentlyActive = item.classList.contains('active');
        if (isCurrentlyActive) {
          // If already active on touch, allow collapse
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          activateFaqItem(item);
        }
      });
    }
  });
});
