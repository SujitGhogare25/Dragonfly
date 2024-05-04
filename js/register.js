const scriptURL = 'https://script.google.com/macros/s/AKfycbxZ5ef0Ozz273xY41wJsmlOonmZ1Qg_W3I3DF2KhFcPiIboEGmGGOn9Dq6p3OC9Xs4FXg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us...! We will contact you Soon...."))
        .catch(error => console.error('Error!',error.message))
})