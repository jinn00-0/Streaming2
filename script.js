
    const perfil = document.querySelector('.perfil');
    const opçoes = document.querySelector('.opçoes');
    const sobrepor = document.querySelector('.sobrepor');

    perfil.addEventListener('click', () => {
        opçoes.style.display = opçoes.style.display === 'block' ? 'none' : 'block';
        sobrepor.style.display = sobrepor.style.display === 'block' ? 'none' : 'block';
        opçoes.style.background
    });

    overlay.addEventListener('click', () => {
        opçoes.style.display = 'none';
        sobrepor.style.display = 'none';
    });

