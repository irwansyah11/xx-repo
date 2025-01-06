// Scroll to products section
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth" });
}

// Add to cart functionality
const cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  alert(`${productName} has been added to your cart!`);
  updateCartDisplay();
}

// Update cart display (for demonstration)
function updateCartDisplay() {
  console.log("Current cart:", cart);
}

// Assign event listeners to buttons
window.onload = () => {
  const productButtons = document.querySelectorAll(".product button");

  productButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("h3").innerText;
      const productPrice = product
        .querySelector("p")
        .innerText.replace("$", "");
      addToCart(productName, parseFloat(productPrice));
    });
  });
};

// funsi navbar responsif //
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
