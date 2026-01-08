// Atualiza ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Galeria de trabalhos - troca foto principal ao clicar nas miniaturas
const mainPhoto = document.getElementById('main-photo');
const thumbs = document.querySelectorAll('.thumb');
const leftArrow = document.querySelector('.gallery-arrow-left');
const rightArrow = document.querySelector('.gallery-arrow-right');
const thumbnailsContainer = document.querySelector('.works-thumbnails');

if (mainPhoto && thumbs.length > 0) {
    let currentIndex = 0;

    // Função para atualizar foto principal
    function updateMainPhoto(index) {
        if (index >= 0 && index < thumbs.length) {
            const thumb = thumbs[index];
            const photoSrc = thumb.getAttribute('data-photo');
            mainPhoto.src = photoSrc;
            mainPhoto.alt = thumb.querySelector('img').alt;

            // Atualiza classe ativa
            thumbs.forEach(t => t.classList.remove('is-active'));
            thumb.classList.add('is-active');
            currentIndex = index;
        }
    }

    // Event listeners para miniaturas
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateMainPhoto(index);
        });
    });

    // Setas de navegação
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : thumbs.length - 1;
            updateMainPhoto(newIndex);
            // Scroll suave para a miniatura ativa
            thumbs[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            const newIndex = currentIndex < thumbs.length - 1 ? currentIndex + 1 : 0;
            updateMainPhoto(newIndex);
            // Scroll suave para a miniatura ativa
            thumbs[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    }
}