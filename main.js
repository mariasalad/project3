
    // Lightbox functionality for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
            lightbox.innerHTML = `
                <img src="${img.src}" alt="Lightbox Image" class="max-w-full max-h-full">
                <button class="absolute top-4 right-4 text-white text-2xl">&times;</button>
            `;
            document.body.appendChild(lightbox);

            // Close lightbox
            lightbox.querySelector('button').addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
