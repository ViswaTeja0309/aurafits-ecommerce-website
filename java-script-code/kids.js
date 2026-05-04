const casuals = document.getElementById("kids-casuals");
const party = document.getElementById("kids-party");
const sets = document.getElementById("sets");
const dynamic_container = document.querySelector(".dynamic-container");
const dynamic_products= document.querySelector(".dynamic-products");


const kids_casual_products = [

    {
        image:"project_images/kids wear/kids casuals/kids-wear-1.jpg",
        title:"Sunny Day Styles",
        price:"Rs.1,999"
    },

    {
      
        image:"project_images/kids wear/kids casuals/kids-wear-2.jpg",
        title:"Comfort Luxe Sets",
        price:"Rs.1,599"

    },

    {
      
        image:"project_images/kids wear/kids casuals/kids-wear-3.jpg",
        title:"Urban Junior Wear",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/kids wear/kids casuals/kids-wear-4.jpg",
        title:"Little Chic Collection",
        price:"Rs.1,499"

    },


    {
      
        image:"project_images/kids wear/kids casuals/kids-wear-5.jpg",
        title:"Mini Street Style",
        price:"Rs.2,999"

    },


    {
      
        image:"project_images/kids wear/kids casuals/kids-wear-6.jpg",
        title:"Bloom Everyday Wear",
        price:"Rs.1,499"

    }

]

const kids_party_products = [

    {
        image:"project_images/kids wear/kids party wear/kids-party-wear-1.jpg",
        title:"Urban Muse Dress",
        price:"Rs.2,999"
    },

    {
      
        image:"project_images/kids wear/kids party wear/kids-party-wear-5.jpg",
        title:"Royal Junior Edition",
        price:"Rs.3,599"

    },

    {
      
        image:"project_images/kids wear/kids party wear/kids-party-wear-2.jpg",
        title:"Princess Glam Collection",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/kids wear/kids party wear/kids-party-wear-4.jpg",
        title:"Little Gentleman Collection",
        price:"Rs.1,999"

    },


    {
      
        image:"project_images/kids wear/kids party wear/kids-party-wear-3.jpg",
        title:"Twinkle Party Wear",
        price:"Rs.2,999"

    },


    {
      
        image:"project_images/kids wear/kids party wear/kids-party-wear-6.jpg",
        title:"Elite Celebration Wear",
        price:"Rs.1,499"

    }

]

const kids_sets_products = [

    {
        image:"project_images/kids wear/kids sets/kids-sets.jpg",
        title:"Little Luxe Ensembles",
        price:"Rs.2,999"
    },

    {
      
        image:"project_images/kids wear/kids sets/kids-sets-1.jpg",
        title:"Dreamy Co-ord Collection",
        price:"Rs.2,299"

    },

    {
      
        image:"project_images/kids wear/kids sets/kids-sets-2.jpg",
        title:"Elegant Mini Sets",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/kids wear/kids sets/kids-sets-4.jpg",
        title:"Graceful Bloom Co-ords",
        price:"Rs.1,799"

    },


    {
      
        image:"project_images/kids wear/kids sets/kids-sets-5.jpg",
        title:"Velvet Petal Collection",
        price:"Rs.2,599"

    },


    {
      
        image:"project_images/kids wear/kids sets/kids-sets-6.jpg",
        title:"Modern Princess Co-ords",
        price:"Rs.1,499"

    }

]

function displayproducts(products) {

    dynamic_container.innerHTML = "";

    products.forEach((product) => {

    dynamic_container.innerHTML +=`

    <div class="product-card">

        <img src="${product.image}">

        <h3>${product.title}</h3>

        <p>${product.price}</p>

        <button class="wishlist-btn">❤️ Wishlist</button>

    </div>

    `
});

}

let wishlistCount = 0;

document.addEventListener("click", (event) => {

    if(event.target.classList.contains("wishlist-btn")) {

        wishlistCount++;

        document.getElementById("wishlist-count").textContent = wishlistCount;

    }

});


casuals.addEventListener("click",() =>{

    displayproducts(kids_casual_products);
    dynamic_products.scrollIntoView( {

        behavior:"smooth"
    });
});

party.addEventListener("click",() =>{

    displayproducts(kids_party_products);
    dynamic_products.scrollIntoView( {

        behavior:"smooth"
    });
});

sets.addEventListener("click",() =>{

    displayproducts(kids_sets_products);
    dynamic_products.scrollIntoView( {

        behavior:"smooth"
    });
});



const searchInput = document.getElementById("input");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    if(searchValue.includes("casuals")) {

        displayproducts(kids_casual_products);

        dynamic_products.scrollIntoView({

            behavior:"smooth"

        });

    }

    else if(searchValue.includes("party")) {

        displayproducts(kids_party_products);

        dynamic_products.scrollIntoView({

            behavior:"smooth"

        });

    }

    else if(searchValue.includes("sets")) {

        displayproducts(kids_sets_products);

        dynamic_products.scrollIntoView({

            behavior:"smooth"

        });

    }

});
