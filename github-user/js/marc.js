const username_input = document.getElementById('username-input');
const search_form = document.querySelector('.search-form');


// bio
//     :
//     "I am a computer science teacher with experience in Java, PHP, Python, JavaScript, HTML, CSS, SQL, and more!"
// company
//     :
//     "Kirkwood Community College"
// created_at
//     :
//     "2016-02-20T14:50:58Z"
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

function loadUser(event) {
    event.preventDefault(); // Use this whenever using a submit eventListener to prevent the form from submitting to a server
    // console.log(username_input.value);
    // reset default state
    myLocation.classList.remove("is-not-available");
    fetch('https://api.github.com/users/' + username_input.value)
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
                let myNewLink = document.createElement("a");
                myNewLink.href = promise.blog;
                myNewLink.className = "result__link";
                myNewLink.rel = "nofollow me";
                myNewLink.textContent = promise.blog;
                console.log(myNewLink);
                console.log(link.lastElementChild);
                link.lastElementChild.innerHTML = myNewLink;
            } else {
                link.classList.add("is-not-available");
                link.lastElementChild.textContent = "Not available";
            }
        });
}

search_form.addEventListener('submit', loadUser);