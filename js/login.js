// alert("i'm here for password Input")
// let passwordd = window.document.getElementById('password');
// let button = window.document.getElementById('submit');

let eye = window.document.getElementById('eyeIcon')
let password = window.document.getElementById('password');
password.type = 'password';
// button.addEventListener('click', function(){
//     if(password.length == 8){


//     }
// })

submit.onclick = () => {
    localStorage.setItem('label', userName.value);
}
// click.onclick = () => {
//     localStorage.setItem('label', userInput.value);
// }

eye.addEventListener('click', function(){
    if(password.type =='password'){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
})




