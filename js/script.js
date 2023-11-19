const menuToggle = document.querySelector(".nav-toggle input");
const navbarToggle = document.getElementById('navbarMenu').querySelector('input[type="checkbox"]');
const ul = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  ul.classList.toggle("dropdown");
});

//close dropdown
const dropdownitems = ul.querySelectorAll('a');
dropdownitems.forEach(item => {
    item.addEventListener('click', () => {
        ul.classList.remove("dropdown");
        navbarToggle.checked = false;
    });
});

//randomise img 
const imageUrl = [
    'raw/card-image.png',
    'raw/card-image-2.png',
    'raw/card-image-3.png',
];

function getRandomImage() {
    const rand = Math.floor(Math.random() * imageUrl.length);
    return imageUrl[rand];
};

const cardItems = document.querySelectorAll(".card-item");
cardItems.forEach(card => {
    const img = card.querySelector('img');
    if(img) {
        img.src = getRandomImage();
    }
});