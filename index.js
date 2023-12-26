import { english, spanish } from './lang.js'

const btnLang = document.getElementById('labelSwitch')

const btn = document.getElementById('switch')

window.onload = () => {

  handleLanguageOnEntry()

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

const handleLanguageOnEntry = () => {
  if(localStorage.getItem('lang') === 'spanish') {
    changeLanguage(spanish)
    btn.checked = false

    btnLang.setAttribute('data-lang', 'spanish')
  } else {
    changeLanguage(english)
    btn.checked = true

    btnLang.setAttribute('data-lang', 'english')
  }
}

const changeLanguage = (lang) => {
  Object.entries(lang).forEach(([section, values]) => {
    Object.entries(values).forEach(([element, content]) => {
      document.querySelector(`.${element}`).innerHTML = content;
    })
  })
}

var onCooldown = false

const handleClick = (e) => {
  if(!onCooldown) {
    onCooldown = true
    const currentLanguage = e.target.getAttribute('data-lang');

    if(currentLanguage === 'spanish') {
      localStorage.setItem('lang', 'english')
      e.target.setAttribute('data-lang', 'english')

      btn.checked = true

      changeLanguage(english)
    } else {
      localStorage.setItem('lang', 'spanish')
      e.target.setAttribute('data-lang', 'spanish')

      btn.checked = false

      changeLanguage(spanish)
    }
    setTimeout(() => onCooldown = false, 5000)
  }
}

btnLang.addEventListener('click', (e) => {
  handleClick(e)
})

