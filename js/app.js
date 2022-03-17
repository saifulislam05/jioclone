
const menuBtn = document.querySelector('.menu_bar')
const nav = document.querySelector('.mobile_menu')
const menu_item = document.querySelector('.menu_item')

const exbar=document.querySelector('.ex_bar')
const nested_nav=document.querySelector('.nested_nav')


menuBtn.addEventListener('click', () => {
    // nav.classList.toggle(' nav_active')
    
    if(menuBtn.classList.contains('icofont-navigation-menu')) {
        menuBtn.classList.add('icofont-close')
        menuBtn.classList.remove('icofont-navigation-menu')
    }else{
       

        menuBtn.classList.remove('icofont-close')
        menuBtn.classList.add('icofont-navigation-menu')
    }
})

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open')

   
})



//  menu_item


menu_item.addEventListener('click', () => {
    // nav.classList.toggle(' nav_active')
    
    if(exbar.classList.contains('icofont-plus')) {
        exbar.classList.add('icofont-minus')
        exbar.classList.remove('icofont-plus')
    }else{
       

        exbar.classList.remove('icofont-minus')
        exbar.classList.add('icofont-plus')
    }
})

menu_item.addEventListener('click', () => {
    nested_nav.classList.toggle('expand')

})
