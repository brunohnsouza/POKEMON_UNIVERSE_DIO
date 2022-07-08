/** ===============
    HOVER ANIMATION
    =============== */

// FUNCTION ACTIVATED WHEN PLACING THE MOUSE ON A CARD
function handleMouseEnter() {
    this.classList.add('p-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

// FUNCTION ACTIVATED WHEN REMOVING THE MOUSE FROM ANY CARD 
function handleMouseLeave() {
    this.classList.remove('p-card--hovered');
    document.body.id = '';
}

// ROLE RESPONSIBLE FOR ADDING AN 'EVENT LISTENER' TO CARDS 
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('p-card'); // RECEBE TODOS OS ELEMENTOS DO DOCUMENTO COM ESSA CLASSE

    for (let index = 0; index < cardElements.length; index++) { 
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

// WAITING FOR AN EVENT TO HAPPEN TO CONTINUE
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

// FUNCTION RESPONSIBLE FOR ROTATION OF THE CAROUSELS AND ACTIVATING THE BOTTOM BUTTONS
function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.p-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.p-controller__button--active');
    activeButtonElement.classList.remove('p-controller__button--active');
    selectedButtonElement.classList.add('p-controller__button--active');
}
