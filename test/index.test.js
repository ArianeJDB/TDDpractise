import * as restaurants from '../FastEat/json.json';
import { getRestaurants, createRestaurantCard, printRestaurantCard, hideRestaurants, catchRestaurant, createFoodCard,filterByNameRestaurant, addToCart, createBackButton } from '../FastEat/index.js'
import { restaurantCard, fosterCard, restaurant, allRestaurants, mainHTML, selectedLi, foodCard, allDishes, fosterDishes,nameRestaurant, filterDishes, backButton, fosterFoodCard, arrayCartFilled, dishObject} from './restaurants.fixture.js';

describe('When called succesfully', () => {
    let mockGetRestaurants = getRestaurants;
    beforeAll((done) => {
        mockGetRestaurants = jest.fn(() => {
            return Promise.resolve(restaurants);
        })
        //cierre del ciclo + limpieza
        done();
    })
    //caso espefcifico
    test('should return result', done => {
        mockGetRestaurants()
            .then((data) => {
                //comparo data con el mock
                expect(data).toBe(restaurants);
                done();
            })
    })
    
})


describe("When called rejected", () => {
    let mockGetRestaurants;
    const errorMsg = "error";
    //beforeAll solo limpia la function getfilms();
    beforeAll((done) => {
        //jest.fn es el spy
        mockGetRestaurants = jest.fn(() => {
            return Promise.reject(errorMsg);
        })
        //cierre del ciclo + limpieza
        done();
    })
    test('should return err', done => {
        
        mockGetRestaurants()
            .then(() => {

                //comparo data con el mock            
            })
            .catch(() => {
                expect(errorMsg).toBe("error");
                done();
            })
    })
})

describe('createRestaurantCard', () => {
    test('creates a card for each restaurant', () => {
        
        document.body.innerHTML = fosterCard;
        const card = document.querySelector('.restaurant_card');
        expect(createRestaurantCard(restaurant).innerHTML).toEqual(card.innerHTML)
    });

})


describe('printRestaurantCard', () => {
    test('should print each restaurant with data in a card', () => {
        const printRestaurantCard = jest.fn();
        const createRestaurantCard = jest.fn();

        createRestaurantCard.mockReturnValueOnce(true).mockReturnValueOnce(false);

        allRestaurants.forEach(restaurant => createRestaurantCard(restaurant));
        printRestaurantCard(restaurants);
    
        expect(createRestaurantCard).toHaveBeenCalledTimes(3)


    }
)})

describe('printFoodCard', () => {
    test('should print each food of a restaurant with data in a card', () => {
        const printFoodCard = jest.fn();
        const createFoodCard = jest.fn();

        createFoodCard.mockReturnValueOnce(true).mockReturnValueOnce(false);

        allDishes.forEach(dish => createFoodCard(dish));
        printFoodCard(restaurants);
    
        expect(createFoodCard).toHaveBeenCalledTimes(1)


    }
)})



describe('hideRestaurants', () => {
        
    
    test('when click in li hideRestaurant should be call', () => {
        document.body.innerHTML = mainHTML;
        const hideRestaurants = jest.fn();
        const li = document.querySelector('li');
        li.addEventListener('click', hideRestaurants)
        li.click();
        expect(hideRestaurants).toHaveBeenCalled();
       
    })
    test('then should add display:none class', () => {
        document.body.innerHTML = mainHTML;
        const main = document.querySelector('main');
     
      hideRestaurants(main)
      const expected= main.innerHTML
        expect(expected).toBe("");
       
    })
})

// describe('catchRestaurant', () => {
//     test('should catch clicked restaurant', () => {
//         document.body.innerHTML = mainHTML;
//         const li = document.querySelector('.restaurant_card');
//         li.click();
//       const catchRestaurant = jest.fn()
        

        
        // li.addEventListener('click', ()=>{
        //     catchRestaurant(event)})
            //const nameRestaurant = 'Foster Hollywood'
       // catchRestaurant(event);
        //const restaurantSelected = event.currentTarget
 
//         expect(catchRestaurant).toBeCalled();
        
//     })
// })
describe("filterByNameRestaurant", () => {
    test("should filter with the restaurant name",()=>{
        
        
    const expected =filterByNameRestaurant(nameRestaurant,allRestaurants);
    expect(expected).toEqual(fosterDishes)

    })
})

describe("createBackButton", () => {
    document.body.innerHTML = backButton;
    const result = document.querySelector(".back_button");
    const expected = createBackButton();
    expect(expected).toStrictEqual(result);
})


describe('createFoodCard', () => {
test("should create a foodCard", () => {
  
    document.body.innerHTML= `<main></main>`;
    let main = document.querySelector("main");

    createFoodCard(fosterDishes,main);

    expect(main.innerHTML.length).toBeGreaterThan(0)
})

})

test('add a dish to an empty array(cart)', () => {
    document.body.innerHTML = fosterFoodCard;
    const li = document.createElement("li");
    li.classList.add("food_card");
    const event = {
        currentTarget:{
            parentElement : {
                parentElement:li
            }
        }
    }
    let arrayCart= []
  
  
    
    
    
   
   
    addToCart(arrayCart,event,dishObject.dishName,dishObject.dishImg,dishObject.dishPrice)
    expect(addToCart(arrayCart)).toStrictEqual(arrayCartFilled)
})
