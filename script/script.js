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