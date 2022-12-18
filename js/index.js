document.addEventListener('DOMContentLoaded',()=>{
  // add event listener to login form
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission

    // get username and password from form
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;

    // check if username and password are valid
    if (username === 'admin' && password === 'password') {
      // redirect to another page
      window.location.href = "https://www.example.com/";
    } else {
      alert('Invalid username or password.');
    }
  });

  // add event listener to signup form
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission

    // get username, password, and email from form
    const username = signupForm.elements.username.value;
    const password = signupForm.elements.password.value;
    const email = signupForm.elements.email.value;

    // create a new account
    alert(`Account created for ${username} with email ${email}!`);

    // redirect to another page
    window.location.href = "https://www.example.com/";
  });
  const navItems = document.querySelectorAll("nav li a");

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      const targetElement = document.querySelector(target);
      window.history.pushState({}, target, window.location.origin + target);
      // Update the page content based on the navigation item clicked
      updatePageContent(target);
    });
  });

  function updatePageContent(target) {
    if (target === "#about") {
      // Update the page content to display the "About" section
    } else if (target === "#contact") {
      // Update the page content to display the "Contact" form
    }
  }

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // URL for the dictionary API

const result = document.getElementById("result");
  // get a reference to the element with id "result"

const sound = document.getElementById("sound");
  // get a reference to the element with id "sound"

const btn = document.getElementById("search-btn");
  // get a reference to the element with id "search-btn"

btn.addEventListener("click", () => {
  // add a click event listener to the "search-btn" element

let wordInput = document.getElementById("word_input").value;
  // get the value of the element with id "word_input"

fetch(`${url}${wordInput}`)
  // make a fetch request to the dictionary API with the word input as the endpoint

.then(response => response.json())
  // parse the response as JSON

.then(data => {
  // do something with the data

result.innerHTML = `
  // update the inner HTML of the "result" element with a template literal

<div class="word">
  <h3>${wordInput}</h3>
  <button onclick = "playSound()">
    <i class="fa-regular fa-volume"></i>
  </button>
</div>
<div class="details">
  <p>${data[0].meanings[0].partOfSpeech}</p>
  <p>/${data[0].phonetic}/</p>
</div>
<p class="meaning">
  ${data[0].meanings[0].definitions[0].definition}
</p>
<p class="example">
  ${data[0].meanings[0].definitions[0].example || ""}
</p>
`;
  // the template literal contains HTML elements that display the word, part of speech, phonetic spelling, definition, and example sentence (if available)

sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
  // set the "src" attribute of the "sound" element to the URL of the audio pronunciation of the word

})

.catch(() => {
  // if there is an error with the fetch request

result.innerHTML = `<h3 class= "error">could Not Find the Word</h3>`;
  // update the inner HTML of the "result" element to display an error message

});
});

function playSound() {
  // define a function to play the audio pronunciation of the word

sound.play();
  // play the audio by calling the "play" method on the "sound" element
}
})