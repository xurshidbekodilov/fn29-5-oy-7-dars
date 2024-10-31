const form = document.querySelector('.registration-form form');
const cardContainer = document.querySelector('.card-container');

function createCard(data) {
    return `
    <div class="card">
        <img src="${data.picture}" alt="Rasm">
        <h3>Ism: ${data.firstName}</h3>
        <p>Familiya: ${data.lastName}</p>
        <p>Telefon: ${data.number}</p>
        <p>Email: ${data.email}</p>
    </div>
    `;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        number: document.getElementById('tel').value,
        email: document.getElementById('email').value,
        picture: document.getElementById('imageUrl').value
    };
    let card = createCard(data);
    cardContainer.innerHTML += card;
    form.reset();
});
