document.getElementById('randomGirl').addEventListener('click', function() {
    const heartRain = document.createElement('div');
    heartRain.classList.add('heart-rain');
    document.body.appendChild(heartRain);
  
    const hearts = 30;
    const duration = 5; // Cambiar la duración de la animación si es necesario
  
    for (let i = 0; i < hearts; i++) {
      const heart = document.createElement('img');
      heart.src = './fonts/corazon.png'; // Ruta de la imagen de corazón
      heart.classList.add('heart');
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.animationDuration = Math.random() * duration + 3 + 's'; // Modifica los valores para ajustar la velocidad
      heart.style.width = '20px'; // Ajusta el tamaño de la imagen
      heart.style.height = '20px'; // Mantiene la relación de aspecto
      heartRain.appendChild(heart);
    }
  
    setTimeout(() => {
      heartRain.remove();
    }, 10000); // Cambia este valor si deseas ajustar la duración de la lluvia
  });
  