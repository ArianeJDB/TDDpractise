let restaurants = [];
const main = document.querySelector('main');

async function getRestaurants() {
    try {
        const res = await fetch('./json.json');
        const data = await res.json();
        restaurants = data;
    } catch (error) {
        console.log("error")
    }
    printRestaurantCard(restaurants);
}
getRestaurants();


function createRestaurantCard(restaurant) {
    const list = document.querySelector('.restaurant_list');
    if (list) {
        const li = document.createElement('li');
        const name = document.createElement('h2');
        name.textContent = restaurant.restaurantName;
        const img = document.createElement('img');
        img.src = restaurant.restaurantImg;
        const typeOfFood = document.createElement('p');
        typeOfFood.textContent = restaurant.kindOfFood;
        const imgRating = document.createElement('img');
        imgRating.src = restaurant.rating;
        li.setAttribute("class", "restaurant_card");
        name.setAttribute("class", "restaurant_name");
        img.setAttribute("class", "restaurant_img");
        typeOfFood.setAttribute("class", "restaurant_kindOfFood");
        imgRating.setAttribute("class", "rating_img");
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(typeOfFood);
        li.appendChild(imgRating);
        list.appendChild(li);

        li.addEventListener('click',()=>{
            hideRestaurants(main);
        } )
        li.addEventListener('click', catchRestaurant)

        return li;

    }


}

function printRestaurantCard(restaurants) {
    restaurants.forEach((restaurant) => {
        createRestaurantCard(restaurant);
    })
}

function catchRestaurant(event){
    if(event){
        return event.currentTarget;
    } 
}

function hideRestaurants(main) {
        if(main){   
            main.innerHTML = "";
        }
        
    }




export {
    getRestaurants,
    createRestaurantCard,
    printRestaurantCard,
    hideRestaurants,
    catchRestaurant
};