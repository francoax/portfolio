window.onload = () => {
  const btns = ['homeBtn', 'aboutBtn', 'proyectBtn', 'contactBtn']

  const containers = {
    homeBtn : '.meContainer',
    aboutBtn : '.aboutContainer',
    proyectBtn : '.proyectsContainer',
    contactBtn : '.contactContainer'
  }

  btns.forEach(btn => {
    const btnElement = document.getElementById(btn)
    btnElement.addEventListener('click', () => {
      document.querySelector(containers[btn]).scrollIntoView({behavior : 'smooth'})
    })
  });
}

