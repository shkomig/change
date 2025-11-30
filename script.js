// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Initialize EmailJS
emailjs.init('rbiLS5aNEZQqMoxM0') // Replace with your EmailJS public key

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)'
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)'
    header.style.boxShadow = 'none'
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up')
    }
  })
}, observerOptions)

// Observe elements for animation
document
  .querySelectorAll('.service-card, .portfolio-item, .stat, .tech-item')
  .forEach((el) => {
    observer.observe(el)
  })

// Contact form handling
const contactForm = document.querySelector('.contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> שולח...'
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(contactForm)
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      to_email: 'haiatia500@gmail.com' // Recipient email
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_338w0sw', // EmailJS service ID
        'vny1spf', // EmailJS template ID
        templateParams
      )

      // Show success message
      showNotification('ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.', 'success')
      contactForm.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      showNotification('אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.', 'error')
    } finally {
      // Reset button
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }
  })
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === 'success'
            ? '#10b981'
            : type === 'error'
            ? '#ef4444'
            : '#3b82f6'
        };
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number')

  counters.forEach((counter) => {
    const target = counter.textContent
    const isPercentage = target.includes('%')
    const isPlus = target.includes('+')
    const isSlash = target.includes('/')

    let finalNumber
    if (isPercentage) {
      finalNumber = parseInt(target.replace('%', ''))
    } else if (isPlus) {
      finalNumber = parseInt(target.replace('+', ''))
    } else if (isSlash) {
      finalNumber = target // Keep as is for 24/7
    } else {
      finalNumber = parseInt(target)
    }

    if (isSlash) {
      counter.textContent = finalNumber
      return
    }

    let current = 0
    const increment = finalNumber / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= finalNumber) {
        current = finalNumber
        clearInterval(timer)
      }

      let displayValue = Math.floor(current)
      if (isPercentage) {
        displayValue += '%'
      } else if (isPlus) {
        displayValue += '+'
      }

      counter.textContent = displayValue
    }, 30)
  })
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 }
)

const statsSection = document.querySelector('.stats')
if (statsSection) {
  statsObserver.observe(statsSection)
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(
    '.floating-elements .element'
  )

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  let current = ''
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
})

// Add CSS for active navigation link
const style = document.createElement('style')
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    .nav-menu.active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow-lg);
        z-index: 999;
    }
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`
document.head.appendChild(style)

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to hero content
  const heroContent = document.querySelector('.hero-content')
  if (heroContent) {
    heroContent.classList.add('fade-in-up')
  }

  // Preload images
  const images = ['logo.png']
  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
})

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close mobile menu
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }
})

// Add focus management for accessibility
document
  .querySelectorAll('a, button, input, select, textarea')
  .forEach((element) => {
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid var(--primary-color)'
      element.style.outlineOffset = '2px'
    })

    element.addEventListener('blur', () => {
      element.style.outline = 'none'
    })
  })

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Header background change
  const header = document.querySelector('.header')
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)'
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)'
    header.style.boxShadow = 'none'
  }

  // Parallax effect
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(
    '.floating-elements .element'
  )

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })

  // Active navigation
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  let current = ''
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
}, 10)

window.addEventListener('scroll', debouncedScrollHandler)

// GitHub Integration

async function fetchGitHubData() {
  const username = 'shkomig';
  const selectedRepos = [
    'social-money-israel',
    'Trading_System',
    'Learning_System',
    'Lemdata',
    'pro-gemini-trading',
    'ZERO'
  ];

  try {
    // Fetch user profile
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();
    // Set avatar
    const avatarImg = document.getElementById('github-avatar');
    if (avatarImg) {
      avatarImg.src = userData.avatar_url;
    }

    // Fetch selected repos
    const reposData = [];
    for (const repoName of selectedRepos) {
      try {
        const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        const repoData = await repoResponse.json();
        if (repoData.name) {
          reposData.push(repoData);
        }
      } catch (error) {
        console.warn(`Error fetching repo ${repoName}:`, error);
      }
    }

    // Populate projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = '';
      reposData.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="project-content">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'אין תיאור זמין.'}</p>
            <div class="project-stars">⭐ ${repo.stargazers_count} כוכבים</div>
            <a href="${repo.html_url}" target="_blank" class="project-link">צפה ב-GitHub</a>
          </div>
        `;
        projectsGrid.appendChild(card);
      });
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

// Call on load
document.addEventListener('DOMContentLoaded', fetchGitHubData)

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item h3')
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement
      parent.classList.toggle('active')
    })
  })

  // Chatbot
  const chatbotButton = document.getElementById('chatbot-button')
  const chatbotWindow = document.getElementById('chatbot-window')
  const chatbotClose = document.getElementById('chatbot-close')
  const chatbotMessages = document.getElementById('chatbot-messages')

  chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex'
  })

  chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none'
  })

  document.addEventListener('click', (e) => {
    if (!chatbotWindow.contains(e.target) && e.target !== chatbotButton) {
      chatbotWindow.style.display = 'none'
    }
  })

  // Handle option buttons
  chatbotMessages.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
      const response = e.target.dataset.response
      let reply = ''
      switch (response) {
        case 'שירותים':
          reply = 'אנו מציעים פיתוח אתרים, אוטומציה עסקית ואפליקציות. בקרו בדף השירותים לפרטים נוספים.'
          break
        case 'יצירת קשר':
          reply = 'מלאו את טופס יצירת הקשר או שלחו מייל ל-info@change.co.il'
          break
        case 'מחירים':
          reply = 'המחירים תלויים בפרויקט. צרו קשר לקבלת הצעת מחיר מותאמת.'
          break
      }
      chatbotMessages.innerHTML += `<p><strong>אתה:</strong> ${response}</p><p><strong>בוט:</strong> ${reply}</p>`
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight
    }
  })
});

