// alert("i'm here for password Input")
// let passwordd = window.document.getElementById('password');
// let button = window.document.getElementById('submit');

let eye = window.document.getElementById('eyeIcon');
let eyeClosed = window.document.getElementById('eyeClosed')
let password = window.document.getElementById('password');

eye.style.display = 'block';
eyeClosed.style.display = 'none';
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
    if( password.type = 'password' && eyeClosed.style.display == 'none'){
        password.type = 'text';
        eyeClosed.style.display = 'block'
        // eyeClosed.style.Bottom = '50px'
    }else{
        eyeClosed.style.display = 'none';
        password.type = 'password';

    }
})
eyeClosed.addEventListener('click', function(){
    if( password.type = 'password' && eye.style.display == 'block'){
        password.type = 'password';
        eyeClosed.style.display = 'none'
        // eyeClosed.style.Bottom = '50px'
    }else{
        eyeClosed.style.display = 'none';
        password.type = 'password';

    }
})







