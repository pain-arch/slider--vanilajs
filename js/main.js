const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg'
];

let imgIndex = 0;
const imgSrc = document.getElementById('images');

function startSlider(){
    setInterval( ()=>{
        if (imgIndex >= images.length) {
            imgIndex = 0;
        }
        const imgUrl = images[imgIndex];
        imgSrc.setAttribute('src', imgUrl);
        imgIndex++; 
    }, 1000);

};

function stopSlider(){
    location.reload();
    imgSrc.setAttribute('src', 'images/img-1.jpg')
}