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

//export { getRestaurants };