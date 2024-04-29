const cardContainer = document.querySelector('.card-carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const list = document.querySelector('.list-help');
const navbar = document.querySelector('.navbar');

let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

showCard(currentIndex);

function come (){
 if (list.style.height === "0px") {
    list.style.height = "100px"
 }else{
    list.style.height = "0px"
 }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const name = nameInput.value;
    const phone = phoneInput.value;
    const botToken = '7042099489:AAGBUtACN010HFAV1nXGjliTIhJporeDV_s';
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=6959013020&text=Name: ${name}%0APhone: ${phone}`)
        .then(response => {
            if (response.ok) {
                alert("Muvaffaqiyatli jo'natildi. Javobimizni kuting!");
                nameInput.value = ""; 
                phoneInput.value = ""; 
            } else {
                alert("Iltimos qaytadan urunib ko'ring");
            }
        })
        .catch(error => console.error('Error:', error));
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

