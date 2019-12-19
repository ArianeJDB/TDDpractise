let restaurants = [];
let arrayCart = [];
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
        li.addEventListener('click', (event) => {
            filterByNameRestaurant(restaurant.restaurantName, restaurants);
        })
        
        return li;

    }
}

function createFoodCard(filterDishes, main) {
    // console.log(filterDishes)
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
            main.appendChild(list);

            back_button.addEventListener("click", ()=>goBack(main));

            addImg.addEventListener('click', (event) => {
                addToCart(arrayCart, event, food.name, food.img, food.price)


            })

        }
    }
}



function printRestaurantCard(restaurants) {
    // console.log(restaurants)
    restaurants.forEach((restaurant) => {
        createRestaurantCard(restaurant);

    })

}



function filterByNameRestaurant(nameRestaurant, restaurants) {
    const filterResraurant = restaurants.filter(restaurant =>
        restaurant.restaurantName.includes(nameRestaurant)
    );
    const filterDishes = filterResraurant[0].dishes;
    //console.log("filterDishes",filterDishes);
    createFoodCard(filterDishes, main);
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

function addToCart(arrayCart, event , dishName, dishImg, dishPrice) {
    if (event) {
        const foodLi = event.currentTarget.parentElement.parentElement;
        if (foodLi.classList.contains('food_card')) {
            const dishObj = {
                dishName: dishName,
                dishImg: dishImg,
                dishPrice: dishPrice,
                dishCount: 1
            }
            if(arrayCart.length === 0){
              arrayCart.push(dishObj)
              //console.log(arrayCart)
            }else{
                if(arrayCart.filter(dish => dish.dishName === dishObj.dishName).length > 0){
                   arrayCart.find(dish => dish.dishName === dishObj.dishName ).dishCount++; 
                }else{
                    arrayCart.push(dishObj)
                   
                }
            }
            printModalCart(arrayCart)
        }
        return arrayCart;
    }
}

    function printModalCart(arrayCart) {
        const myCart = document.querySelector("#myCart");

        if (myCart) {
            let totalAmount = 0;
            myCart.innerHTML = "";
            if (arrayCart) {
                for (let item of arrayCart) {
                    const div = document.createElement("div");
                    const img = document.createElement("img");
                    const name = document.createElement("p");
                    const price = document.createElement("p");
                    div.setAttribute("class", "item_modal_container");
                    img.setAttribute("class", "img_modal");
                    img.src = item.dishImg;
                    name.textContent = item.dishName+'('+item.dishCount+')';
                    price.textContent = item.dishPrice + "€";
                    div.appendChild(img);
                    div.appendChild(name);
                    div.appendChild(price);
                    myCart.appendChild(div);

                    totalAmount += parseFloat(item.dishPrice * item.dishCount);
                }
                printTotalAmount(totalAmount, myCart);
            }
        }
        return myCart;
    }
   


function printTotalAmount(totalAmount, myCart) {
    const finalAmount = document.createElement("p");
    finalAmount.innerHTML = "Precio total: " + totalAmount + "€";
    myCart.appendChild(finalAmount);
    return finalAmount;
}

function goBack(main) {

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
    createFoodCard,
    filterByNameRestaurant,
    createBackButton,
    addToCart,
    printModalCart,
    goBack

};