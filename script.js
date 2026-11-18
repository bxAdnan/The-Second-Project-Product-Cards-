
// Get HTML Elements
const cartCount = document.getElementById("cart-count");
const cartMessage = document.getElementById("cart-message");

const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Cart Counter
let cartItems = 0;

// Add Products To Cart
addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Increase Cart Counter
        cartItems++;

        // Update Cart Number
        cartCount.textContent = cartItems;

        // Get Product Name
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;

        // Show Message
        cartMessage.textContent =
            productName + " has been added to your cart!";

        // Change Button Text Temporarily
        button.textContent = "Added!";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});
