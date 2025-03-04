const ringButtons = document.querySelectorAll(".ring-button"); //querySelectorAll for all elements access
for(let i=0; i<ringButtons.length; i++)
{
    const ringbtn = ringButtons[i];
    ringbtn.addEventListener("click", function(event){

        const color = event.target.id.replace("-color", "");
        //console.log(color);
        //console.log(typeof event);
        //console.log(event.target);
        //purple add korar age shob guloke check kore purple thakle remove kore dibo and onno ekta border add kore dibp
        for(let j=0; j < ringButtons.length; j++ )
        {
            ringButtons[j].classList.remove("border","border-purple-600");
            ringButtons[j].classList.add("border","border-gray-300");
        }
        //color adding
        event.currentTarget.classList.add("border","border-purple-600");
        //event.currentTarget.classList.remove("border","border-gray-300");

        const productImage = document.getElementById("product-image");
        //productImage.src = "./images/teal.png";
        productImage.src = "./images/" + color + ".png"; //dynamic vabe ashalo 
    });

}


function selectWristSize(size)
{
    
    const sizes = ["S", "M", "L", "XL"];
    for(let i = 0; i < sizes.length; i++)
    {
        const button = document.getElementById('size-' + sizes[i]);
        const element = sizes[i];
        if(size === element)
        {
            button.classList.add('border-purple-600');
        }
        else
        {
            button.classList.remove('border-purple-600');
        }
    }
}


const quantityElements = document.querySelectorAll('.quantity-button');
for (let i = 0; i < quantityElements.length; i++)
    {
        const quantityElement = quantityElements[i];
        
        quantityElement.addEventListener('click', function(event) {
        const amount = event.target.innerText === "+" ? 1 : -1; // Check if button is "+" or "-"

        // Get the actual quantity element (not just the text)
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText); // Convert to integer
        const newQuantity = Math.max(0, currentQuantity + amount); // Prevent negative values
        //  // (o + 1) => 1 ; Math.max(0, 1) ==> max value is 1 so ans is 1
        quantityElement.innerText = newQuantity; // Update the UI
    });
}


// add to cart
let cartCount = 0;
let cartItems = [];
document.getElementById('add-to-cart').addEventListener("click", function(event){
    //console.log('clicked');
    const checkoutContainer = document.getElementById('checkout-container');
    //console.log(checkoutContainer);
    checkoutContainer.classList.remove("hidden");
    const quantity = parseInt(document.getElementById("quantity").innerText);

    if(quantity > 0)
    {
        const checkoutContainer = document.getElementById('checkout-container');
        //console.log(checkoutContainer);
        checkoutContainer.classList.remove("hidden");
        cartCount = cartCount + quantity;
        document.getElementById('cart-count').innerText = cartCount; 

        const selectedColorButton = document.querySelector('button.border-purple-600.w-7');
        //console.log(selectedColorButton);
        const selectedColor = selectedColorButton.id.split('-')[0];
        //console.log(selectedColor);

        const selectedSizeButtons = document.querySelector("button.border-purple-600:not(.w-7)");
        //console.log(selectedSizeButtons); 
        const selectedSize = selectedSizeButtons.innerText.split(" ")[0];
        //console.log(selectedSize);
        const selectedPrice = selectedSizeButtons.innerText.split(" ")[1].split("$")[1];
        //console.log(selectedPrice);

        cartItems.push({
            image: selectedColor + ".png",
            title: " Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            price: quantity * parseInt(selectedPrice)

        });
        console.log(cartItems);

    }
    else
    {
        alert("Please select a quantity");
    }
});


document.getElementById('checkout-btn').addEventListener('click', function(event) {
    const cartModal = document.getElementById('cart-modal'); 
    const cartContainer = document.getElementById("cart-items");

    console.log(cartItems); // Debugging: Check if cartItems has data

    // Clear previous items to prevent duplication
    cartContainer.innerHTML = ""; 

    if (cartItems.length === 0) {
        alert("Your cart is empty!"); 
        return; // Stop execution if cart is empty
    }

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log("Adding to cart modal:", item); // Debugging

        const row = document.createElement("tr");
        row.classList.add("border-b");

        row.innerHTML = `
        <td class="py-2 px-4">
          <div class="flex items-center space-x-2">
            <img class="h-12 w-12 object-cover rounded-md" src="./images/${item.image}" alt="">
            <span class="font-semibold">${item.title}</span>
          </div>
        </td>
        <td class="py-2 px-4">${item.color}</td>
        <td class="py-2 px-4">${item.size}</td>
        <td class="py-2 px-4">${item.quantity}</td> 
        <td class="py-2 px-4">$${item.price}</td>
        `;
        cartContainer.appendChild(row);
    }

    cartModal.classList.remove("hidden");
});

// Close modal on continue shopping
document.getElementById("continue-shopping").addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
});
