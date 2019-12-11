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
    printFoodCard(restaurants)
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

function createFoodCard(food){
    if(main){

    
    const list = document.createElement('ul');
    list.setAttribute('class', 'food_list');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = food.img;
    const name = document.createElement('h5');
    name.textContent = food.name;
    const description = document.createElement('p');
    description.textContent = food.description;
    const ingredients = document.createElement('p');
    ingredients.textContent = food.ingredients;
    const price = document.createElement('span')
    price.textContent = food.price;
    const button = document.createElement('button');

    li.setAttribute("class", "food_card");
    name.setAttribute("class", "food_name");
    img.setAttribute("class", "food_img");
    description.setAttribute("class", "food_description");
    ingredients.setAttribute("class", "food_ingredients");
    price.setAttribute('class', 'food_price');
    button.setAttribute('class', 'add_cart')
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(description);
        li.appendChild(ingredients);
        li.appendChild(price);
        li.appendChild(button);
        list.appendChild(li);
        main.appendChild(list)

        // li.addEventListener('click',()=>{
        //     hideRestaurants(main);
        // } )
        // li.addEventListener('click', catchRestaurant)

        return li;
    }
    }
    
    

function printRestaurantCard(restaurants) {
    restaurants.forEach((restaurant) => {
        createRestaurantCard(restaurant);
    })
}

function printFoodCard(food){
    
    food.forEach((dish) => {
        dish.dishes.forEach(item => {
        createFoodCard(item);
        })
        
    })
}

function catchRestaurant(event){
    if(event){
        return event.currentTarget;
        createFoodCard();
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
    catchRestaurant,
    createFoodCard
};