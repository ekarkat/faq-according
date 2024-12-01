console.log('Hello there')

let questions = document.querySelectorAll('.qa-li')

let plusIcons = document.querySelectorAll('.plus-icon')
let minusIcons = document.querySelectorAll('.minus-icon')
const faqCard = document.querySelector('.qa-li')
let initialHeight = faqCard.scrollHeight

plusIcons.forEach(icon => {
  icon.style.top = (initialHeight/3) + 'px'
  icon.style.right = 0 + 'px'
})
minusIcons.forEach(icon => {
  icon.style.top = (initialHeight/3) + 'px'
  icon.style.right = 0 + 'px'
})

questions.forEach(question => {
  question.addEventListener('click', function () {
    const minusIcon = this.querySelector('.minus-icon')
    const plusIcon = this.querySelector('.plus-icon')
    const description = this.querySelector('p')
    minusIcon.classList.toggle('hide')
    plusIcon.classList.toggle('hide')
    if (description.style.height === '0px' || description.style.height === '') {
      description.style.transition = 'height 200ms ease' // add animation
      description.style.height = description.scrollHeight + 'px'; // add height
      description.style.margin = '24px 0px' // add margine
    } else {
      description.style.transition = 'none'
      description.style.height = '0px';
      description.style.margin = '0px 0px';
    }
  })
})
