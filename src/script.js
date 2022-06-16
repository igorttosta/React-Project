let themeToggler = document.querySelector('#theme-toggler');

    themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}