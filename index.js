const imgSize = 300;
const imgs = [
    `https://picsum.photos/${imgSize}?random=1`, 
    `https://picsum.photos/${imgSize}?random=2`, 
    `https://picsum.photos/${imgSize}?random=3`,
    `https://picsum.photos/${imgSize}?random=4`,
    `https://picsum.photos/${imgSize}?random=5`,
    `https://picsum.photos/${imgSize}?random=6`, 
    `https://picsum.photos/${imgSize}?random=7`, 
    `https://picsum.photos/${imgSize}?random=8`,
    `https://picsum.photos/${imgSize}?random=9`,
    `https://picsum.photos/${imgSize}?random=10`
];

const loadImages = () => {
    const jsImageSlider = document.getElementById("js-imgSlider");
    const cssImageSlider = document.getElementById("css-imgSlider");
    
    for (let i = 0; i < imgs.length; i++) {
        let img = document.createElement("img");
        img.src = imgs[i];
        img.alt = `image${i}`;
        
        i < imgs.length/2 ? cssImageSlider.appendChild(img) : jsImageSlider.appendChild(img);
    }
    console.log("CSS Images: " + cssImageSlider.childElementCount);
    console.log("JS Images: " + jsImageSlider.childElementCount);
}

// Sets image size for local images
const setImageSize = () => {
    const jsImageSlider = document.getElementById("js-imgSlider");
    const cssImageSlider = document.getElementById("css-imgSlider");

    const jsImages = jsImageSlider.getElementsByTagName('img');
    const cssImages = cssImageSlider.getElementsByTagName('img');

    for (let i = 0; i < jsImages.length; i++) {
        jsImages[i].style.width = `${imgSize}px`;
        cssImages[i].style.width = `${imgSize}px`;
        jsImages[i].alt = `image${i}`;
        cssImages[i].alt = `image${i}`;
    }
}

const setCarouselStyle = () => {
    const carouselWindows = document.getElementsByClassName("carousel-window");

    for (let i = 0; i < carouselWindows.length; i++) {
        carouselWindows[i].style.width = `${imgSize}px`;
        carouselWindows[i].style.height = `${imgSize}px`;
        console.log(carouselWindows[i].style)
    }
}

const nextSlide = () => {
    console.log(imgSize);
    let carousel = document.getElementById("js-imgSlider");
    carousel.style.transform -= `translateX(${imgSize}px);`
}

const prevSlide = () => {
    console.log(imgSize);
    let carousel = document.getElementById("js-imgSlider");
    console.log("HERE: " + carousel.style.transform);
    carousel.style.transform -= `translateX(${imgSize}px);`
}

loadImages();
setCarouselStyle();