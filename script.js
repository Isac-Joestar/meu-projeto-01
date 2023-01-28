var abrir = document.querySelector('#abrir')
var fechar = document.querySelector('#fechar')
var menuBtn = document.querySelector('.menu_btn')
var menuMobile =  document.querySelector('#menu_mobile')
console.log(menuMobile)
document.querySelectorAll('.menu_btn i').forEach((e)=>{

    e.addEventListener('click', ()=>{
        if(e.classList.contains('abrir')){
               
                abrir.style.display = 'none'
                fechar.style.display = 'flex'
                menuMobile.style.display = 'flex'
                setTimeout(()=>{
                    menuMobile.classList.add('change_bg')
                },1)
              
            }else{
                abrir.style.display = 'flex'
                fechar.style.display = 'none'
                menuMobile.classList.remove('change_bg')
                setTimeout(()=>{
                    menuMobile.style.display = 'none'
                }, 500)
              
            }
    })
 
})