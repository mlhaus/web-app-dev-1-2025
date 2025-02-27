const username_input = document.getElementById('username-input');
const search_form = document.querySelector('.search-form');


// bio
//     :
//     "I am a computer science teacher with experience in Java, PHP, Python, JavaScript, HTML, CSS, SQL, and more!"
// company
//     :
//     "Kirkwood Community College"
// followers
//     :
//     59
// following
//     :
//     27
// public_repos
//     :
//     65
// twitter_username
//     :
//     null

const avatarImg = document.querySelector('.js-avatar');
const name = document.querySelector('.js-name');
const username = document.querySelector('.js-user-github-link');
const myLocation = document.querySelector('.js-location');
const link = document.querySelector('.js-website');
const createdAt = document.querySelector('.js-time');

function loadUser(event) {
    event.preventDefault(); // Use this whenever using a submit eventListener to prevent the form from submitting to a server
    let user = username_input.value || "octocat";
    // reset default state
    myLocation.classList.remove("is-not-available");
    link.classList.remove("is-not-available");
    fetch('https://api.github.com/users/' + user)
        .then((response) => {
            // console.log(response.json());
            return response.json(); // This returns a Promise that contains the JSON
        })
        .then((promise) => {
            avatarImg.src = promise.avatar_url;
            avatarImg.alt = promise.name;
            name.textContent = promise.name;
            username.textContent = "@" + promise.login;
            username.href = promise.html_url;
            myLocation.lastElementChild.textContent = promise.location || "Not available";
            if(promise.location === null || promise.location === "") {
                myLocation.classList.add("is-not-available");
            }
            if(promise.blog !== null && promise.blog !== "") {
                link.lastElementChild.innerHTML = `<a href="${promise.blog}" class="result__link" rel="nofollow me" target="_blank">${extractDomain(promise.blog)}</a>`;
            } else {
                link.classList.add("is-not-available");
                link.lastElementChild.textContent = "Not available";
            }

            let dateCreated = new Date(promise.created_at);
            // Possible values for month are "numeric", "2-digit", "narrow", "short", "long".
            let month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateCreated);
            createdAt.textContent = `${dateCreated.getDate()} ${month} ${dateCreated.getFullYear()}`;
        });
}
window.addEventListener('DOMContentLoaded', loadUser);
search_form.addEventListener('submit', loadUser);


/**
 * Extracts the domain (example.com) from a URL
 * Source: https://claude.ai/share/3494e4d8-a73f-4b9e-8d16-0ac665dc573a
 * @param {string} url - The URL to extract the domain from
 * @return {string} The domain portion of the URL
 */
function extractDomain(url) {
    // Remove protocol (http:// or https://) if it exists
    let domain = url.replace(/^(?:https?:\/\/)?/, '');
    // Remove www. if it exists
    domain = domain.replace(/^www\./, '');
    // Remove trailing slash and everything after the first slash
    domain = domain.split('/')[0];
    return domain;
}