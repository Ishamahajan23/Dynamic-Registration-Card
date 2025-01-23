

let button = document.querySelector("button");
let newUser=[];
button?.addEventListener("click", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let username = document.getElementById("user-name").value;
    let email = document.getElementById("email").value;
   // Retrieve existing users from localStorage, or initialize an empty array if no users are found
   let users = JSON.parse(localStorage.getItem("users")) || [];
    
   // Create a new user object
   let newUser = { id: Math.floor(Math.random()), name, username, email };

   // Push the new user to the existing users array
   users.push(newUser);

   // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href="index.html";
});





