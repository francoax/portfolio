window.onload = () => {
  const proyectsContainer = document.querySelector('.proyectsContainer');
  const proyectBtn = document.getElementById('proyectBtn');

  proyectBtn.addEventListener('click', () => {
    proyectsContainer.scrollIntoView({ behavior: "smooth"})
  })
}

