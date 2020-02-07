document.addEventListener('DOMContentLoaded', function () {
    
    
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mobile-nav-box');
    const menuList = document.querySelector('.mobile-nav');
    const mobileMenu = document.querySelector('.mobile-nav-box');

    burger.addEventListener('click', function(){
        burger.classList.toggle('change');

        if(menu.style.display === 'block') {
            menu.style.display = 'none'
            menuList.style.display = 'none'
            mobileMenu.classList.remove('mobile-nav-box-up');
        } else {
            menu.style.display = 'block'
            menuList.style.display = 'block'
            mobileMenu.classList.add('mobile-nav-box-change');
        };


    });

    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const btn = document.querySelector('#submit-questions');
    const checkboxInput = document.querySelector('#checkbox');

    btn.addEventListener('click', function(){
        usernameInput.value = '';
        emailInput.value = '';
        checkboxInput.checked = false;

    });

});