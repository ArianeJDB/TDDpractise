import * as restaurants from '../FastEat/json.json';
import {
    getRestaurants,
    createRestaurantCard,
    printRestaurantCard,
    hideRestaurants,
    catchRestaurant,
    createFoodCard,
    filterByNameRestaurant,
    addToCart,
    createBackButton,
    printModalCart,
    goBack,
    substractDish,
    deleteDish, 
    selectRestaurant
} from '../FastEat/index.js'
import {
    fosterCard,
    restaurant,
    allRestaurants,
    mainHTML,
    allDishes,
    fosterDishes,
    nameRestaurant,
    backButton,
    fosterFoodCard,
    arrayCartFilled,
    dishObject,
    modal,
    modalResult,
    goBackContext,
    mainHTMLGoBack,
    selectedDish,
    src,
    modalFull,
    arrayCart,
    expectedModal,
    modalContext,
    modalContextResult, selectRestaurantFixture
} from './restaurants.fixture.js';

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


    })
})

describe('printFoodCard', () => {
    test('should print each food of a restaurant with data in a card', () => {
        const printFoodCard = jest.fn();
        const createFoodCard = jest.fn();

        createFoodCard.mockReturnValueOnce(true).mockReturnValueOnce(false);

        allDishes.forEach(dish => createFoodCard(dish));
        printFoodCard(restaurants);

        expect(createFoodCard).toHaveBeenCalledTimes(1)


    })
})

describe('createFoodCard', () => {
    test("should create a foodCard", () => {

        document.body.innerHTML = `<main></main>`;
        let main = document.querySelector("main");

        createFoodCard(fosterDishes, main);

        expect(main.innerHTML.length).toBeGreaterThan(0)
    })

})

test('add a dish to an empty array(cart)', () => {
    document.body.innerHTML = fosterFoodCard;
    const li = document.createElement("li");
    li.classList.add("food_card");
    const event = {
        currentTarget: {
            parentElement: {
                parentElement: li
            }
        }
    }
    let arrayCart = []
    addToCart(arrayCart, event, dishObject.dishName, dishObject.dishImg, dishObject.dishPrice)
    expect(addToCart(arrayCart, event, dishObject.dishName, dishObject.dishImg, dishObject.dishPrice)).toStrictEqual(arrayCartFilled)
})

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
        const expected = main.innerHTML
        expect(expected).toBe("");

    })
})


describe("filterByNameRestaurant", () => {
    test("should filter with the restaurant name", () => {
        const expected = filterByNameRestaurant(nameRestaurant, allRestaurants);
        expect(expected).toEqual(fosterDishes)

    })
})

describe("createBackButton", () => {
    document.body.innerHTML = backButton;
    const result = document.querySelector(".back_button");
    const expected = createBackButton();
    expect(expected).toStrictEqual(result);
})




test("printModalCart", () => {
    document.body.innerHTML = modal;
    const myCart = document.querySelector("#myCart");
    expect(printModalCart(arrayCartFilled).innerHTML).toBe(modalResult)
})

test("goBack", () => {
    document.body.innerHTML = goBackContext;
    const main = document.querySelector('main');

    goBack(main);
    expect(main.innerHTML).toBe(mainHTMLGoBack)
})

describe("substractDish,deleteDish", () => {
    test("deleteDish", () => {
        document.body.innerHTML = modalFull;
        
        const div = document.querySelector(".modal-content");
        const subsButton = {
            currentTarget: {
                parentElement: div
            }
        }
        deleteDish(arrayCart, selectedDish, src, subsButton)
        expect(document.body.innerHTML).toBe(expectedModal)

    })
    test("substractDish", () => {
        
        document.body.innerHTML = modalContext;
        document.querySelector('.item_modal_container');
        const arrayCart=[{
            dishImg: "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
            dishName: "Alitas de Pollo",
            dishPrice: 8,
            dishCount: 3
        }];
        const div = document.querySelector(".modal-content");
        const event = {
            currentTarget: {
                parentElement: div
            }

        };
        substractDish(event, arrayCart)
        expect(selectedDish).toEqual(modalContextResult);
    })
})

describe('selectRestaurant', () => {
    test('should print the selected restaurant', () => {
        document.body.innerHTML = mainHTML
        const input = ['Americana'];

        //const output = selectRestaurantFixture;

        const event = {
            currentTarget: {
                value: input
            }
        }

        // selectRestaurant(restaurants);
       const expected =  selectRestaurant(event, allRestaurants)
     
        expect(expected).toStrictEqual(selectRestaurantFixture)
    })
})