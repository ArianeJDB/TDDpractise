import { restaurants } from '../FastEat/json.js';
import { getRestaurants, createRestaurantCard } from '../FastEat/index.js'
import { restaurantCard } from './restaurants.fixture.js';

describe('When called succesfully', () => {
    let mockGetRestaurants = getRestaurants;
    //beforeAll solo limpia la function getfilms();
    beforeAll((done) => {
        //jest.fn es el spy
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
        document.body.innerHTML = restaurantCard;
        let expected = createRestaurantCard().innerHTML;
        const card = document.querySelector('.restaurants_list');
        expect(expected).toEqual(card.innerHTML)
    })
})


