console.log('Hello there')

let questions = document.querySelectorAll('.qa-li')


questions.forEach(question => {
  question.addEventListener('click', function () {
    const minusIcon = this.querySelector('.minus-icon')
    const plusIcon = this.querySelector('.plus-icon')
    const description = this.querySelector('p')
    minusIcon.classList.toggle('hide')
    plusIcon.classList.toggle('hide')
    description.classList.toggle('hide')
  })
})
