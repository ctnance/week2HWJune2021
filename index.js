const imgSize = 300;
let posX = 0; // Positions are based on percentages
let maxPosX = 0; // Needs to initialize based on image count
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
const slider = document.getElementById("js-imgSlider");

const loadImages = () => {
    const jsImageSlider = document.getElementById("js-imgSlider");
    const cssImageSlider = document.getElementById("css-imgSlider");
    
    for (let i = 0; i < imgs.length; i++) {
        let img = document.createElement("img");
        img.src = imgs[i];
        img.alt = `image${i+1}`;
        
        maxPosX = ((imgs.length/2) * 100) - 100;
        console.log("MAX POS " + maxPosX);
        i < (imgs.length/2) ? cssImageSlider.appendChild(img) : jsImageSlider.appendChild(img);
    }
    console.log("CSS Images: " + cssImageSlider.childElementCount);
    console.log("JS Images: " + jsImageSlider.childElementCount);
}

// Sets image size for local images
const setImageSize = () => {
    const jsImageSlider = document.getElementById("js-imgSlider");
    const cssImageSlider = document.getElementById("css-imgSlider");

    const jsImages = jsImageSlider.getElementsByTagName("img");
    const cssImages = cssImageSlider.getElementsByTagName("img");

    for (let i = 0; i < jsImages.length; i++) {
        jsImages[i].style.width = `${imgSize}px`;
        cssImages[i].style.width = `${imgSize}px`;
        jsImages[i].alt = `image${i+1}`;
        cssImages[i].alt = `image${i+1}`;
    }
}

const setCarouselStyle = () => {
    const carouselWindows = document.getElementsByClassName("carousel-window");

    for (let i = 0; i < carouselWindows.length; i++) {
        carouselWindows[i].style.width = `${imgSize}px`;
        carouselWindows[i].style.height = `${imgSize}px`;
        console.log("WINDOWS STYLE" + carouselWindows[i].style)
    }
}

const nextSlide = () => {
    posX -= 100;
    // Checks if current X Position is past the maximum negative value. If true--loop to zero.
    if (posX < -maxPosX) { posX = 0; }
    slider.style.transform = `translateX(${posX}%)`;
    console.log("X Position = " + posX);
}

const prevSlide = () => {
    posX += 100;
    // Checks if current X Position is greater than zero. If true--loop back to maximum negative value.
    if (posX > 0) { posX = -maxPosX; }
    slider.style.transform = `translateX(${posX}%)`;
    console.log("X Position = " + posX);
}

const animateCarousel = () => {
    setInterval(nextSlide, 6000);
}

loadImages();
setCarouselStyle();
animateCarousel();