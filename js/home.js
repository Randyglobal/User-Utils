let icon = document.getElementById('icon');
let nav = document.getElementById('nav');

nav.style.display = 'none'

icon.addEventListener('click', event =>{
    event.preventDefault();
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }

})