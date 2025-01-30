// List of image filenames in the images folder
const imageFilenames = [
    "bangles1.jpg", "dress1.jpg", "dress5.jpg", "earings3.jpg", "pants2.jpg", "shirt.jpg", 
    "shoes.jpg", "shoes4.jpg", "skirt1.jpg", "skirt5.jpg",
    "bangles2.jpg", "dress2.jpg", "earings.jpg", "earings4.jpg", "pants3.jpg", "shirt1.jpg", 
    "shoes1.jpg", "shoes5.jpg", "skirt2.jpg", "skirt6.jpg",
    "bangles3.jpg", "dress3.jpg", "earings1.jpg", "pants.jpg", "pants4.jpg", "shirt2.jpg", 
    "shoes2.jpg", "shoes6.jpg", "skirt3.jpg", "skirt7.jpg",
    "dress.jpg", "dress4.jpg", "earings2.jpg", "pants1.jpg", "pants5.jpg", "shirt3.jpg", 
    "shoes3.jpg", "skirt.jpg", "skirt4.jpg", "skirt8.jpg"
];

// Function to generate product list dynamically
function generateProductList() {
    const productListContainer = document.getElementById('product-list');

    imageFilenames.forEach(filename => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = `../images/${filename}`;
        img.alt = filename;
        const description = document.createElement('p');
        // Remove the file extension and numbers from the filename
        const filenameWithoutExtension = filename.replace(/\.[^/.]+$/, ""); // Remove the extension
        const filenameWithoutNumbers = filenameWithoutExtension.replace(/\d+/g, ''); // Remove numbers
        description.textContent = `${filenameWithoutNumbers.split('_')[0]} (Clothing)`;

        

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const likeButton = document.createElement('button');
        likeButton.classList.add('like');
        likeButton.textContent = 'Like';
        buttonsDiv.appendChild(likeButton);

        const dislikeButton = document.createElement('button');
        dislikeButton.classList.add('dislike');
        dislikeButton.textContent = 'Dislike';
        buttonsDiv.appendChild(dislikeButton);

        productDiv.appendChild(img);
        productDiv.appendChild(description);
        productDiv.appendChild(buttonsDiv);

        productListContainer.appendChild(productDiv);

        // Add event listeners for buttons
        likeButton.addEventListener('click', () => {
            alert(`You liked the product: ${filename}`);
        });

        dislikeButton.addEventListener('click', () => {
            alert(`You disliked the product: ${filename}`);
        });
    });
}

// Call the function to generate the product list when the page loads
document.addEventListener('DOMContentLoaded', generateProductList);

// Toggle between signup and login forms
function toggleForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (formType === 'signup') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none'; // Hide the login form on signup
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block'; // Show the login form on login
    }
}

// Signup form validation and storing details in localStorage
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        // Store the user's signup details in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert("Signup successful!");  // Normally send data to the server
        toggleForm('login');  // Automatically switch to login form
    } else {
        alert("Please fill out all fields.");
    }
});

// Login form validation with data retrieved from localStorage
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username && password) {
        if (username === storedUsername && password === storedPassword) {
            alert("Login successful!");  // Successful login
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("Please fill out all fields.");
    }
});

document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', () => {
        alert('You liked the product!');
    });
});

document.querySelectorAll('.dislike').forEach(button => {
    button.addEventListener('click', () => {
        alert('You disliked the product!');
    });
});


