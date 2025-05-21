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

// Formatação de Telefone

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


// Carrossel de Anunciantes 1

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('meuAnunciantesCarousel');
    if (!carouselContainer) {
        console.error("Elemento do carrossel não encontrado!");
        return;
    }

    const slidesContainer = carouselContainer.querySelector('.anunciantes-slides');
    const slides = Array.from(carouselContainer.querySelectorAll('.anunciantes-slide'));
    const prevButton = carouselContainer.querySelector('.anunciantes-prev');
    const nextButton = carouselContainer.querySelector('.anunciantes-next');
    const indicatorsContainer = carouselContainer.querySelector('.anunciantes-indicators');

    if (!slidesContainer || slides.length === 0 || !prevButton || !nextButton || !indicatorsContainer) {
        console.error("Um ou mais componentes internos do carrossel não foram encontrados.");
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // Tempo em milissegundos para troca automática (5 segundos)

    // Função para exibir o slide
    function showSlide(index) {
        // Normaliza o índice para o loop
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
    }

    // Função para atualizar os indicadores (bolinhas)
    function updateIndicators() {
        indicatorsContainer.innerHTML = ''; // Limpa indicadores existentes
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('anunciantes-indicator');
            if (i === currentIndex) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                showSlide(i);
                resetAutoPlay(); // Reinicia o autoplay ao clicar no indicador
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    // Navegação
    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoPlay();
    });

    // Autoplay
    function startAutoPlay() {
        stopAutoPlay(); // Garante que não haja múltiplos intervalos
        autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pausar autoplay ao passar o mouse sobre o carrossel
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Inicialização
    if (totalSlides > 0) {
        showSlide(currentIndex); // Mostra o primeiro slide e cria indicadores
        startAutoPlay();
    } else {
        // Opcional: esconder botões e indicadores se não houver slides
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        indicatorsContainer.style.display = 'none';
    }
});

// Carrossel de Anunciantes 2
// Carrossel de Anunciantes 2
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('meuAnunciantesCarousel2');
    if (!carouselContainer) {
        console.error("Elemento do carrossel não encontrado!");
        return;
    }

    const slidesContainer = carouselContainer.querySelector('.anunciantes-slides2');
    const slides = Array.from(carouselContainer.querySelectorAll('.anunciantes-slide2'));
    const prevButton = carouselContainer.querySelector('.anunciantes-prev');
    const nextButton = carouselContainer.querySelector('.anunciantes-next');
    const indicatorsContainer = carouselContainer.querySelector('.anunciantes-indicators');

    if (!slidesContainer || slides.length === 0 || !prevButton || !nextButton || !indicatorsContainer) {
        console.error("Um ou mais componentes internos do carrossel não foram encontrados.");
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    const autoPlayDelay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000; // Tempo em milissegundos para troca automática (entre 3 e 7 segundos)

    // Função para exibir o slide
    function showSlide(index) {
        // Normaliza o índice para o loop
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
    }

    // Função para atualizar os indicadores (bolinhas)
    function updateIndicators() {
        indicatorsContainer.innerHTML = ''; // Limpa indicadores existentes
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('anunciantes-indicator');
            if (i === currentIndex) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                showSlide(i);
                resetAutoPlay(); // Reinicia o autoplay ao clicar no indicador
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    // Navegação
    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoPlay();
    });

    // Autoplay
    function startAutoPlay() {
        stopAutoPlay(); // Garante que não haja múltiplos intervalos
        autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pausar autoplay ao passar o mouse sobre o carrossel
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Inicialização
    if (totalSlides > 0) {
        showSlide(currentIndex); // Mostra o primeiro slide e cria indicadores
        startAutoPlay();
    } else {
        // Opcional: esconder botões e indicadores se não houver slides
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        indicatorsContainer.style.display = 'none';
    }
});
