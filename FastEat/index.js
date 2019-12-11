let restaurants = [];

async function getRestaurants() {
    try {
        const res = await fetch('./json.json');
        const data = await res.json();
        restaurants = data;
        console.log("data", restaurants);
    } catch (error) {
        console.log("error")
    }
    printRestaurantCard(restaurants);
}
getRestaurants();


function createRestaurantCard(restaurant) {
    console.log("REST", restaurant);
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

        return li;
    }

}

function printRestaurantCard(restaurants) {
    restaurants.forEach((restaurant) => {
        console.log("RESTAURANTS", restaurant)
        createRestaurantCard(restaurant);
    })
}

export {
    getRestaurants,
    createRestaurantCard
};