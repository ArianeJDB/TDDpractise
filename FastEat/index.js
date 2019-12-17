let restaurants = [];
const main = document.querySelector('main');
async function getRestaurants() {
    try {
        const res = await fetch('./json.json');
        const data = await res.json();
        for (let restaurant of data) {
            restaurants.push(restaurant)
        }
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

        li.addEventListener('click', () => {
            hideRestaurants(main);
        })
        li.addEventListener('click', catchRestaurant)

        return li;

    }
}

function createFoodCard(filterDishes) {
    const back_button = createBackButton();
    const list = document.createElement('ul');
    list.setAttribute('class', 'food_list');
    list.appendChild(back_button)
    if (filterDishes && main) {
        for (let food of filterDishes) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const nameContainer = document.createElement('div')
            const priceContainer = document.createElement('div')
            img.src = food.img;
            const name = document.createElement('h2');
            name.textContent = food.name;
            const description = document.createElement('p');
            description.textContent = food.description;
            const ingredients = document.createElement('p');
            ingredients.textContent = "Ingredientes: " + food.ingredients;
            const price = document.createElement('span')
            price.textContent = food.price + "€";
            const addImg = document.createElement('img');
            li.setAttribute("class", "food_card");
            name.setAttribute("class", "food_name");
            img.setAttribute("class", "food_img");
            nameContainer.setAttribute("class", "name_container");
            priceContainer.setAttribute("class", "price_container")
            description.setAttribute("class", "food_description");
            ingredients.setAttribute("class", "food_ingredients");
            price.setAttribute('class', 'food_price');
            addImg.src = "./src/add.png"
            addImg.setAttribute('class', 'add_cart')
            li.appendChild(img);
            nameContainer.appendChild(name);
            nameContainer.appendChild(description);
            nameContainer.appendChild(ingredients);
            li.appendChild(nameContainer);
            priceContainer.appendChild(price);
            priceContainer.appendChild(addImg);
            li.appendChild(priceContainer);
            list.appendChild(li);
            main.appendChild(list)
            back_button.addEventListener("click", goBack);
        }
    }
}



function printRestaurantCard(restaurants) {
    console.log(restaurants)
    restaurants.forEach((restaurant) => {
        createRestaurantCard(restaurant);

    })

}


function catchRestaurant(event) {

    if (event) {
        let nameRestaurant;
        const selectedRestaurant = event.currentTarget.innerHTML;
        if (selectedRestaurant.search("Foster Hollywood") > 0) {
            nameRestaurant = "Foster Hollywood";
        } else if (selectedRestaurant.search("Ni Hao Arturo Soria") > 0) {
            nameRestaurant = "Ni Hao Arturo Soria";
        } else if (selectedRestaurant.search("Tagliatella") > 0) {
            nameRestaurant = "Tagliatella"
        }
        filterByNameRestaurant(nameRestaurant, restaurants);
    }
}

function filterByNameRestaurant(nameRestaurant, restaurants) {
    const filterResraurant = restaurants.filter(restaurant =>
        restaurant.restaurantName.includes(nameRestaurant)
    );
    const filterDishes = filterResraurant[0].dishes;
    createFoodCard(filterDishes);
    return filterDishes;
}


function hideRestaurants(main) {
    if (main) {
        main.innerHTML = "";
    }
    createFoodCard();
}

function createBackButton() {
    const backButton = document.createElement('button');
    backButton.setAttribute('class', 'back_button');
    backButton.innerHTML = "Volver";
    return backButton;
}

function goBack() {
    
    if (main) {
        main.innerHTML = "";
        main.innerHTML = `<p id="selectorText">Seleccione el tipo de comida que desea:
        <select>
                <option value="all">Todas</option>
                <option value="american">Americana</option>
                <option value="chineese">China</option>
                <option value="italian">Italiana</option>
              </select>
            </p>`
        const ul = document.createElement("ul")
        ul.setAttribute("class", "restaurant_list");
        main.appendChild(ul)
        printRestaurantCard(restaurants)


    }

}

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// })



export {
    getRestaurants,
    createRestaurantCard,
    printRestaurantCard,
    hideRestaurants,
    catchRestaurant,
    createFoodCard,
    filterByNameRestaurant,
    createBackButton
};