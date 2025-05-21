// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar-ancestral');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Gallery Modal: Update image source on click
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; // Button that triggered the modal
            const imgSrc = button.getAttribute('data-img-src'); // Extract info from data-* attributes
            const modalImage = galleryModal.querySelector('#modalImage');
            modalImage.src = imgSrc;
        });
    }

    // Smooth scroll for anchor links (optional, Bootstrap handles some of this with data-bs-spy)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') !== "#" && !anchor.hasAttribute('data-bs-toggle')) { // Avoid conflict with Bootstrap components
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
  let formattedValue = '';

  if (value.length > 0) {
    formattedValue = '(' + value.substring(0, 2);
  }
  if (value.length > 2) {
    formattedValue += ')' + value.substring(2, 7);
  }
  if (value.length > 7) {
    formattedValue += '-' + value.substring(7, 11);
  }

  e.target.value = formattedValue;
});