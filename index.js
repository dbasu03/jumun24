const scriptURL = 'https://script.google.com/macros/s/AKfycby7ySa2_vMi3fKHvcD4ezgpA8xSZFycVajqvawB-G2HAobhjSeltd24O9eokAyJTizq/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})