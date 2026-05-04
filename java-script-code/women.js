
const sarees = document.getElementById("sarees");
const modern = document.getElementById("modern");
const kurthis = document.getElementById("kurthis");
const dynamic_container = document.querySelector(".dynamic-container");
const dynamicProducts = document.querySelector(".dynamic-products");

const saree_products = [

    {
        image:"project_images/women's wear/sarees/saree-2.jpg",
        title:"Royal Silk Elegance",
        price:"Rs.3,999"
    },

    {
      
        image:"project_images/women's wear/sarees/saree-3.jpg",
        title:"Ivory Grace Saree",
        price:"Rs.4,299"

    },

    {
      
        image:"project_images/women's wear/sarees/saree-1.jpg",
        title:"Velvet Bloom Saree",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/women's wear/sarees/saree-6.jpg",
        title:"Regal Charm Saree",
        price:"Rs.3,999"

    },


    {
      
        image:"project_images/women's wear/sarees/saree-7.jpg",
        title:"Classic Royale Drapes",
        price:"Rs.2,999"

    },


    {
      
        image:"project_images/women's wear/sarees/saree-8.jpg",
        title:"Golden Aura Silk",
        price:"Rs.3,499"

    }

]

const modern_products = [

    {
        image:"project_images/women's wear/modern wear/modern-1.jpg",
        title:"Urban Muse Dress",
        price:"Rs.1,999"
    },

    {
      
        image:"project_images/women's wear/modern wear/modern-2.jpg",
        title:"Velvet Aura Gown",
        price:"Rs.1,299"

    },

    {
      
        image:"project_images/women's wear/modern wear/modern-3.jpg",
        title:"Celestial Flow Dress",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/women's wear/modern wear/modern-5.jpg",
        title:"Ivory Luxe Ensemble",
        price:"Rs.2,999"

    },


    {
      
        image:"project_images/women's wear/modern wear/modern-4.jpg",
        title:"Aurora Chic Dress",
        price:"Rs.1,999"

    },


    {
      
        image:"project_images/women's wear/modern wear/modern-ware.jpg",
        title:"Modern Grace Outfit",
        price:"Rs.3,499"

    }

]

const kurthi_products = [

    {
        image:"project_images/women's wear/kurthis/kurthi-1.jpg",
        title:"Regal Cotton Ensemble",
        price:"Rs.1,999"
    },

    {
      
        image:"project_images/women's wear/kurthis/kurthi-2.jpg",
        title:"Elegant Aura Kurthi",
        price:"Rs.2,299"

    },

    {
      
        image:"project_images/women's wear/kurthis/kurthi-3.jpg",
        title:"Classic Ethnic Elegance",
        price:"Rs.3,599"

    },


    {
      
        image:"project_images/women's wear/kurthis/kurthi-4.jpg",
        title:"Timeless Grace Set",
        price:"Rs.1,799"

    },


    {
      
        image:"project_images/women's wear/kurthis/kurthi-5.jpg",
        title:"Heritage Charm Set",
        price:"Rs.3,599"

    },


    {
      
        image:"project_images/women's wear/kurthis/kurthi-set.jpg",
        title:"Moonlight Ethnic Set",
        price:"Rs.1,499"

    }

]

function displayProducts(products) {

    dynamic_container.innerHTML = "";

    products.forEach((product) => {

        dynamic_container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}">

            <h3>${product.title}</h3>

            <p>${product.price}</p>

            <button class="wishlist-btn">❤️ Wishlist</button>

        </div>

        `;

    });

}

let wishlistCount = 0;

document.addEventListener("click", (event) => {

    if(event.target.classList.contains("wishlist-btn")) {

        wishlistCount++;

        document.getElementById("wishlist-count").textContent = wishlistCount;

    }

});



sarees.addEventListener("click", () => {

    displayProducts(saree_products);

    dynamicProducts.scrollIntoView({

    behavior: "smooth" 

});

});


modern.addEventListener("click", () => {

    displayProducts(modern_products);

    dynamicProducts.scrollIntoView({

    behavior: "smooth"

});

});


kurthis.addEventListener("click", () => {

    displayProducts(kurthi_products);

    dynamicProducts.scrollIntoView({

    behavior: "smooth"

});

});

const searchInput = document.getElementById("input");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    if(searchValue.includes("saree")) {

        displayProducts(saree_products);

        dynamicProducts.scrollIntoView({

            behavior:"smooth"

        });

    }

    else if(searchValue.includes("modern")) {

        displayProducts(modern_products);

        dynamicProducts.scrollIntoView({

            behavior:"smooth"

        });

    }

    else if(searchValue.includes("kurthi")) {

        displayProducts(kurthi_products);

        dynamicProducts.scrollIntoView({

            behavior:"smooth"

        });

    }

});