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
  const result = document.getElementById("result");
  const sound = document.getElementById("sound");
  const btn = document.getElementById("search-btn");

  btn.addEventListener("click", () => {
    let wordInput = document.getElementById("word_input").value;
    fetch(`${url}${wordInput}`)
      .then(response => response.json())
      .then(data => {
        result.innerHTML = `
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
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
      })
      .catch(() => {
        result.innerHTML = `<h3 class= "error">could Not Find the Word</h3>`;

    });
});

  function playSound() {
  sound.play();
}


 })