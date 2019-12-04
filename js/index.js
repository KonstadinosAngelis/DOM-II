// Your code goes here
const backgroundColorHtml = document.querySelector("html");
const backgroundNavBar = document.querySelector(".main-navigation");
const backgroundFooter =  document.querySelector(".footer");

const darkModer = document.querySelector(".logo-heading");
darkModer.addEventListener('dblclick', () => {
    alert("Welcome to dark mode");
    darkModer.style.color = "white";
    backgroundColorHtml.style.backgroundColor = "black";
    backgroundNavBar.style.backgroundColor = "black";
    backgroundFooter.style.backgroundColor = "black";

    
document.querySelectorAll("p, h1, h2, h3, h4, a").forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "white";
    })
})
})


const bottomHeadText = document.querySelector(".content-destination");
const bottomText = document.querySelector(".content-destination p");

bottomHeadText.addEventListener("click", () => {
    bottomHeadText.style.border = "5px solid red";
})

bottomText.addEventListener("wheel", () => {
    bottomText.style.color = "blue";
    event.stopPropagation();
})

const funBus = document.querySelector(".funBus")

funBus.addEventListener("dblclick",() => {
    alert("oi!");
    const secretText = document.querySelector("h2");
    secretText.textContent += " Secret! "

    let secretBox = document.createElement("INPUT");
    secretBox.setAttribute("type", "text");
    secretBox.setAttribute("placeholder", "Konami");
    secretBox.setAttribute("id", "konamiCode");
    secretText.appendChild(secretBox);

    let secretSubmit = document.createElement("INPUT");
    secretSubmit.setAttribute("type", "submit");
    secretText.appendChild(secretSubmit);

    secretBox.addEventListener("click", () => {
        gsap.timeline()
            .to(".funBus", {duration: 1, delay: .1, y: -100})
            .to(".funBus", {duration: 1, delay: .1, y: 0})

            .to(".funBus", {duration: 1, delay: .1, y: 100})
            .to(".funBus", {duration: 1, delay: .1, y: 0})

            .to(".funBus", {duration: 1, delay: .1, x: 100})
            .to(".funBus", {duration: 1, delay: .1, x: 0})

            .to(".funBus", {duration: 1, delay: .1, x: -500})
            .to(".funBus", {duration: 1, delay: .1, rotation: -30})

            .to(".funBus", {duration: 0.5, delay: .1, x: 2000 })
            .to(".funBus", {duration: 0.1, delay: 3, x: 0, rotation: 0})

    })
})

