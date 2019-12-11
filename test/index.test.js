import * as restaurants from '../FastEat/json.json';
import { getRestaurants, createRestaurantCard, printRestaurantCard, hideRestaurants, catchRestaurant } from '../FastEat/index.js'
import { restaurantCard, fosterCard, restaurant, allRestaurants, mainHTML, selectedLi } from './restaurants.fixture.js';

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
    })
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

describe('catchRestaurant', () => {
    test('should catch clicked restaurant', () => {
        document.body.innerHTML = mainHTML;
       
        const li = document.querySelector('li');
        //console.log("li",li);
        const event = li.click();
        li.addEventListener('click', ()=>{
            catchRestaurant(event)})
        
        
        
        catchRestaurant(event);
        //const restaurantSelected = event.currentTarget
        console.log('li',li)
        expect(li.innerHTML).toEqual(selectedLi);
        
    })
})