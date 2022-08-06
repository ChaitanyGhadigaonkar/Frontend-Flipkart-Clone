console.log("Hello World")
const slide = document.querySelector(".slide");
const slide_svg1 = document.querySelector(".slide-svg1");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");
const slide_svg2 = document.querySelector(".slide-svg2");

slide_svg1.addEventListener('click', () => {
    console.log("clicked");
    slide1.classList.toggle("over-hid");
    slide2.classList.toggle("over-hid");
    // slide3.classList.toggle("over-hid");
}
)
slide_svg2.addEventListener('click', () => {
    console.log("clicked");
    slide1.classList.toggle("over-hid");
    slide2.classList.toggle("over-hid");
    // slide3.classList.toggle("over-hid");
}
)

const off_svg = document.querySelector(".offer-svg")
const item_box = document.querySelector(".item-box")
const off_svg1 = document.querySelector(".offer-svg-1")
const item_box1 = document.querySelector(".item-box-1")
const off_svg_2 = document.getElementById("offer-svg2")
const off1_svg_2 = document.getElementById("offer1-svg2")
const off1_svg_1 = document.getElementById("offer1-svg")


off_svg.addEventListener('click', () => {
    console.log("clicked");
    item_box.scrollBy(250, 0);
    off_svg_2.style.display = "flex";

})
off_svg_2.addEventListener('click', () => {
    console.log("clicked");
    item_box.scrollBy(-1000, 0);
    off_svg_2.style.display = "none";

})
off_svg1.addEventListener('click', () => {
    console.log("clicked");
    item_box1.scrollBy(250, 0);
    off1_svg_2.style.display = "flex";
})
off1_svg_2.addEventListener('click', () => {
    console.log("clicked");
    item_box1.scrollBy(-1000, 0);
    off1_svg_2.style.display = "none";

})
const hamburger =document.querySelector(".hamburger")
const nav =document.querySelector(".nav")
const navbar =document.querySelector(".navbar")
const svgMain =document.querySelector(".svg")
hamburger.addEventListener("click",()=>{
    nav.classList.toggle("dis-hid");
    nav.classList.toggle("nav-height");
    navbar.classList.toggle("nav-height");
    svgMain.classList.toggle("bottom-len");





})