const menuToggel = document.querySelector('.menu-toggel');
const span = document.querySelectorAll('span');

const nav = document.querySelector('nav ul');
const contentH3 = document.querySelector('#content h3');

// gantiText = true;
let products = {}



menuToggel.onclick = () => {
    span[0].classList.toggle('efect1');
    span[2].classList.toggle('efect2');
    span[1].classList.toggle('efect3');
}
menuToggel.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


function changeColor(e){
    const text = document.getElementById(e.id)    
    if(e.id in products){
        products[e.id] = !products[e.id]
        if(products[e.id]){
            text.style.color="red"
        }else{
            text.style.color="black"
        }
    }else{
        text.style.color="red"
        products[e.id] = true
    }
}
