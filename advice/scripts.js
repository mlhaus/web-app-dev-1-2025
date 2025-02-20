const card_dice = document.querySelector('.card_dice');
const card_number = document.querySelector('.card_number');
const card_quote = document.querySelector('.card_quote');

function loadQuote(event) {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json(); // This returns a Promise that contains the JSON
        })
        .then((promise) => {
            const slip = promise.slip; // This retrieves the json
            card_number.textContent = `Advice #${slip.id}`;
            card_quote.innerHTML = `&#8220${slip.advice}&#8221`;
        });
}
window.addEventListener('DOMContentLoaded', loadQuote);
card_dice.addEventListener('click', loadQuote);