export default function createCard(data, category) {
    const card = document.createElement('a');
    card.href = '#';
    card.dataset.category = data.name;
    card.classList.add('card', 'card-category');
    const cardDescription = document.createElement('p');
    if (category === 'Main Page') {
        cardDescription.classList.add('card__description');
        cardDescription.textContent = data.name;
        const cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.src = data.imageSrc;
        card.append(cardImage, cardDescription);
    }
    return card
}