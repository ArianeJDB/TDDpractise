const URL = './json.js'
let restaurants = [];
let errorMsg;

async function getRestaurants() {

    try{
        const res = await fetch('./json.js');
        const data = await res.text();
        restaurants = data;
         console.log("data",restaurants);
    }catch(error){
     errorMsg="error";
    console.log("errorMSG", errorMsg)        
    }    
}
getRestaurants();



function createRestaurantCard () {

    const list = document.querySelector('.restaurants_list');
    if(list){
        const li = document.createElement('li')
    const name = document.createElement('h2')
    const img = document.createElement('img')
    const typeOfFood = document.createElement('p')
    li.class = 'restaurant_card';
    name.class = 'restaurant_name';
    img.class = 'restaurant_img';
    typeOfFood.class = 'restaurant_kindOfFood';
    li.appendChild(name);
    li.appendChild(img);
    li.appendChild(typeOfFood)
    list.appendChild(li);

    return list;
    }
    

}
export { getRestaurants, createRestaurantCard };