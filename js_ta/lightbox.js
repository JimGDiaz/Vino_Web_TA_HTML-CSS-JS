// LIGHT BOX

const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburger');

const imagensToShow = document.querySelector('.img-galeria-0');

console.log(imagenes);
console.log(imagenesLight);
console.log(contenedorLight);


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        // alert("auch, me dolio");

        let src_1 = imagen.getAttribute('src');
        let src_2 = src_1.replace("Antes", "Después");
        
       aparecerImagen(src_2);

       console.log(src_1);
       console.log(src_2);
        
    })
})


contenedorLight.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburger1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburger1.style.opacity = '0';
}