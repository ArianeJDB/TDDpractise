import * as restaurants from '../FastEat/json.json';
import { getRestaurants, createRestaurantCard, printRestaurantCard, hideRestaurants } from '../FastEat/index.js'
import { restaurantCard, fosterCard, restaurant, allRestaurants, mainHTML } from './restaurants.fixture.js';

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
        printRestaurantCard(allRestaurants);
    
        expect(createRestaurantCard).toHaveBeenCalledTimes(3)


    }
)})

describe('hideRestaurants', () => {
    test('should add display:none class', () => {
        document.body.innerHTML = mainHTML;
        const main = document.querySelector('main');
        const li = document.querySelector('li');
       // main.setAttribute('class', 'hidden')
        //console.log(main.classList[0])
        const event = li.click();
        hideRestaurants(event, main);

        expect(main.style.display).toBe('hidden')
    })
})