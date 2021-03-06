export const restaurantCard = `<ul class="restaurants_list"><li class="restaurant_card"><h2 class="restaurant_name"></h2><img class="restaurant_img" src="" alt=""><p class="restaurant_kindOfFood"></p></li></ul>`

export const fosterCard = `<ul class="restaurant_list"><li class="restaurant_card"><img src="https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg" class="restaurant_img"><h2 class="restaurant_name">Foster Hollywood</h2><p class="restaurant_kindOfFood">Americana</p><img src="src/rating_stars_5.png" class="rating_img"></li></ul>`

export const restaurant = {
    "restaurantName": "Foster Hollywood",
    "restaurantImg": "https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg",
    "kindOfFood": "Americana",
    "rating": "src/rating_stars_5.png",
    "dishes": {
        "appetizer": {
            "name": "Alitas de Pollo",
            "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
            "description": "Alitas de pollo con salsa barbacoa",
            "ingredients": "Pollo, Salsa Barbacoa",
            "price": 8
        },
        "first": {
            "name": "Ensalada César",
            "img": "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ",
            "description": "Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César",
            "ingredients": "Lechuga, Pechuga de Pollo, Salsa César",
            "price": 13
        },
        "seconds": {
            "name": "Hamburguesa Bacon Cheeseburguer",
            "img": "https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&timestamp=1520183558",
            "description": "Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas",
            "ingredients": "Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar",
            "price": 15
        },
        "dessert": {
            "name": "CheeseCake",
            "img": "https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
            "description": "Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos",
            "ingredients": "Leche, queso, azúcar, galletas, arándanos",
            "price": 6
        }
    }
}

export const allRestaurants = [{
        "restaurantName": "Foster Hollywood",
        "restaurantImg": "https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg",
        "kindOfFood": "Americana",
        "rating": "src/rating_stars_5.png",
        "dishes": [{
                "type": "Appetizer",
                "name": "Alitas de Pollo",
                "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
                "description": "Alitas de pollo con salsa barbacoa",
                "ingredients": "Pollo, Salsa Barbacoa",
                "price": 8
            },
            {
                "type": "Primero",
                "name": "Ensalada César",
                "img": "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ",
                "description": "Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César",
                "ingredients": "Lechuga, Pechuga de Pollo, Salsa César",
                "price": 13
            },
            {
                "type": "Segundo",
                "name": "Hamburguesa Bacon Cheeseburguer",
                "img": "https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&timestamp=1520183558",
                "description": "Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas",
                "ingredients": "Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar",
                "price": 15
            },
            {
                "type": "Postre",
                "name": "CheeseCake",
                "img": "https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
                "description": "Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos",
                "ingredients": "Leche, queso, azúcar, galletas, arándanos",
                "price": 6
            }
        ]
    },
    {
        "restaurantName": "Ni Hao Arturo Soria",
        "restaurantImg": "https://t1.salir.ltmcdn.com/es/articles/2/0/5/img_comida_china_en_santander_502_600.jpg",
        "kindOfFood": "China",
        "rating": "src/rating_stars_3.png",
        "dishes": [{
                "type": "appetizer",
                "name": "Rollito de Primavera",
                "img": "https://okdiario.com/img/2018/12/26/receta-de-rollito-de-primavera-vietnamita-655x368.jpg",
                "description": "Rollito de primavera clásico con salsa agridulce",
                "ingredients": "Lechuga, zanahoria, carne de ternera picada, hojaldre",
                "price": 1.5
            },
            {
                "type": "first",
                "name": "Arroz Tres Delicias",
                "img": "https://www.arrozsos.es/wp-content/uploads/2013/10/Arroz-tres-delicias-1080x675.jpg",
                "description": "Arroz tres delicias, perfecta elección para acompañar",
                "ingredients": "Arroz, guisantes, jamón cocido, tortilla francesa",
                "price": 5
            },
            {
                "type": "seconds",
                "name": "Pollo Al Limón",
                "img": "https://www.comedera.com/wp-content/uploads/2018/05/pollo-al-limon.jpg",
                "description": "Tiras de pollo frito acompañados de salsa de limón",
                "ingredients": "Pollo, huevo, pan rallado, limón",
                "price": 8
            },
            {
                "type": "dessert",
                "name": "Helado Frito",
                "img": "https://i.ytimg.com/vi/wBPTe_H8b30/maxresdefault.jpg",
                "description": "Receta originar de Helado Frito , típico postre chino",
                "ingredients": "Helado, huevo, harina, pan, leche, canela",
                "price": 5

            }
        ]
    }, {
        "restaurantName": "Tagliatella",
        "restaurantImg": "https://i0.wp.com/gastronomiaoviedo.com/wp-content/uploads/2017/07/La-Tagliatella-comida-italiana-2.jpg?fit=1659%2C644&ssl=1",
        "kindOfFood": "Italiana",
        "rating": "src/rating_stars_4.png",
        "dishes": {
            "appetizer": {
                "name": "Provoloneta",
                "img": "https://www.googleapis.com/download/storage/v1/b/static-goxo/o/dishes%2F154310216915706530468896689416.JPEG?generation=1543102169276916&alt=media",
                "description": "Queso provolone fundido con hierbas",
                "ingredients": "Queso provolone, hierbas varias",
                "price": 9.5
            },
            "first": {
                "name": "Pasta con salsa pesto",
                "img": "https://cdn.kiwilimon.com/recetaimagen/324/th5-640x426-3203.jpg",
                "description": "Deliciosos linguinis de la casa con salsa de pesto de albahaca con piñones y queso parmesano",
                "ingredients": "Pasta al huevo, albahaca, piñones, aceite de oliva, queso parmesano",
                "price": 11
            },
            "seconds": {
                "name": "Pizza mar y tierra",
                "img": "https://www.xtremefoodies.com/food-images/7480/Das-Pastellhaus/Pizza-Mar-y-Tierra",
                "description": "Pizza auténtica con toque mediterráneo",
                "ingredients": "Harina, queso mozzarela, tomate, gambas, calamares, pulpo",
                "price": 13
            },
            "dessert": {
                "name": "Tiramisú",
                "img": "https://www.recetasdesbieta.com/wp-content/uploads/2019/07/tiramisu-1.jpg",
                "description": "Delicioso postre típico italiano",
                "ingredients": "Leche, queso mascarpone, ron",
                "price": 6
            }
        }
    }
]

export const mainHTML = `<main><p id="selectorText">Seleccione el tipo de comida que desea:<select><option value="all">Todas</option><option value="american">Americana</option><option value="chineese">China</option><option value="italian">Italiana</option></select></p><ul class="restaurant_list"><li class="restaurant_card"><img src="https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg" class="restaurant_img"><h2 class="restaurant_name">Foster Hollywood</h2><p class="restaurant_kindOfFood">Americana</p><img src="src/rating_stars_5.png" class="rating_img"></li><li class="restaurant_card"><img src="https://t1.salir.ltmcdn.com/es/articles/2/0/5/img_comida_china_en_santander_502_600.jpg" class="restaurant_img"><h2 class="restaurant_name">Ni Hao Arturo Soria</h2><p class="restaurant_kindOfFood">China</p><img src="src/rating_stars_3.png" class="rating_img"></li><li class="restaurant_card"><img src="https://i0.wp.com/gastronomiaoviedo.com/wp-content/uploads/2017/07/La-Tagliatella-comida-italiana-2.jpg?fit=1659%2C644&amp;ssl=1" class="restaurant_img"><h2 class="restaurant_name">Tagliatella</h2><p class="restaurant_kindOfFood">Italiana</p><img src="src/rating_stars_4.png" class="rating_img"></li></ul></main>`

export const mainHTMLGoBack =`<p id="selectorText">Seleccione el tipo de comida que desea:
        <select>
                <option value="all">Todas</option>
                <option value="american">Americana</option>
                <option value="chineese">China</option>
                <option value="italian">Italiana</option>
              </select>
            </p><ul class="restaurant_list"></ul>`

export const selectedLi = `<img src="https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg" class="restaurant_img"><h2 class="restaurant_name">Foster Hollywood</h2><p class="restaurant_kindOfFood">Americana</p><img src="src/rating_stars_5.png" class="rating_img">`

export const foodCard = `<li class="food_card"><img src="https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg" class="food_img"><h5 class="food_name">Alitas de Pollo</h5><p class="food_description">Alitas de pollo con salsa barbacoa</p><p class="food_ingredients">Pollo, Salsa Barbacoa</p><span class="food_price">8</span><button class="add_cart"></button></li>`

export const allDishes = [{
    "appetizer": {
        "name": "Alitas de Pollo",
        "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
        "description": "Alitas de pollo con salsa barbacoa",
        "ingredients": "Pollo, Salsa Barbacoa",
        "price": 8
    },
    "first": {
        "name": "Ensalada César",
        "img": "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ",
        "description": "Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César",
        "ingredients": "Lechuga, Pechuga de Pollo, Salsa César",
        "price": 13
    },
    "seconds": {
        "name": "Hamburguesa Bacon Cheeseburguer",
        "img": "https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&timestamp=1520183558",
        "description": "Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas",
        "ingredients": "Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar",
        "price": 15
    },
    "dessert": {
        "name": "CheeseCake",
        "img": "https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
        "description": "Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos",
        "ingredients": "Leche, queso, azúcar, galletas, arándanos",
        "price": 6
    }
}]

export const fosterDishes = [{
        "type": "Appetizer",
        "name": "Alitas de Pollo",
        "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
        "description": "Alitas de pollo con salsa barbacoa",
        "ingredients": "Pollo, Salsa Barbacoa",
        "price": 8
    },
    {
        "type": "Primero",
        "name": "Ensalada César",
        "img": "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ",
        "description": "Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César",
        "ingredients": "Lechuga, Pechuga de Pollo, Salsa César",
        "price": 13
    },
    {
        "type": "Segundo",
        "name": "Hamburguesa Bacon Cheeseburguer",
        "img": "https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&timestamp=1520183558",
        "description": "Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas",
        "ingredients": "Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar",
        "price": 15
    },
    {
        "type": "Postre",
        "name": "CheeseCake",
        "img": "https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
        "description": "Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos",
        "ingredients": "Leche, queso, azúcar, galletas, arándanos",
        "price": 6
    }
]

export const nameRestaurant = "Foster Hollywood";

export const backButton = `<button class="back_button">Volver</button>`;


export const filterDishes = {
    "type": "Appetizer",
    "name": "Alitas de Pollo",
    "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
    "description": "Alitas de pollo con salsa barbacoa",
    "ingredients": "Pollo, Salsa Barbacoa",
    "price": 8
}


export const fosterFoodCard = `<ul class="food_list"><li class="food_card"><img src="https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg" class="food_img"><div class="name_container"><h2 class="food_name">Alitas de Pollo</h2><p class="food_description">Alitas de pollo con salsa barbacoa</p><p class="food_ingredients">Ingredientes: Pollo, Salsa Barbacoa</p></div><div class="price_container"><span class="food_price">8€</span><img src="./src/add.png" class="add_cart"></div></li></ul>`

export const arrayCartFilled = [{
    dishImg: "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
    dishName: "Alitas de Pollo",
    dishPrice: 8,
    dishCount: 2
}]

export const dishObject = {
    dishName:"Alitas de Pollo",
    dishImg:"https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
    dishPrice:8
}

export const modal = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Tu pedido:</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <pre id="myCart">Pedido Vacío</pre>  
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      <button  type="button" class="btn btn-primary">Pagar</button>
    </div>
  </div>
</div>
</div>`

export const modalResult = `<div class=\"item_modal_container\"><img class=\"img_modal\" src=\"https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg\"><img class=\"subs_button\" src=\"./src/subsButton.png\"><p>Alitas de Pollo (2)</p><p>8€</p></div><p class=\"total\">Precio total: 16€</p>`

export const goBackContext = `<main><ul class="food_list"><button class="back_button">Volver</button><li class="food_card"><img src="https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg" class="food_img"><div class="name_container"><h2 class="food_name">Alitas de Pollo</h2><p class="food_description">Alitas de pollo con salsa barbacoa</p><p class="food_ingredients">Ingredientes: Pollo, Salsa Barbacoa</p></div><div class="price_container"><span class="food_price">8€</span><img src="./src/add.png" class="add_cart"></div></li><li class="food_card"><img src="https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ" class="food_img"><div class="name_container"><h2 class="food_name">Ensalada César</h2><p class="food_description">Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César</p><p class="food_ingredients">Ingredientes: Lechuga, Pechuga de Pollo, Salsa César</p></div><div class="price_container"><span class="food_price">13€</span><img src="./src/add.png" class="add_cart"></div></li><li class="food_card"><img src="https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&amp;timestamp=1520183558" class="food_img"><div class="name_container"><h2 class="food_name">Hamburguesa Bacon Cheeseburguer</h2><p class="food_description">Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas</p><p class="food_ingredients">Ingredientes: Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar</p></div><div class="price_container"><span class="food_price">15€</span><img src="./src/add.png" class="add_cart"></div></li><li class="food_card"><img src="https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg" class="food_img"><div class="name_container"><h2 class="food_name">CheeseCake</h2><p class="food_description">Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos</p><p class="food_ingredients">Ingredientes: Leche, queso, azúcar, galletas, arándanos</p></div><div class="price_container"><span class="food_price">6€</span><img src="./src/add.png" class="add_cart"></div></li></ul></main>`;

export const selectedDish = {dishName: "Alitas de Pollo", dishImg: "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg", dishPrice: 8, dishCount: 4};
export const src = "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg";
export const modalFull = `<div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Tu pedido:</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><pre id="myCart"><div class="item_modal_container"><img class="img_modal" src="https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg"><img class="subs_button" src="./src/subsButton.png"><p>Alitas de Pollo (1)</p><p>8€</p></div><p class="total">Precio total: 8€</p></pre></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" class="btn btn-primary">Pagar</button></div></div>`
export const subsButton = `<div class="item_modal_container"></div>`;
export const arrayCart = [{
    dishImg: "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
    dishName: "Alitas de Pollo",
    dishPrice: 8,
    dishCount: 1
}]
export const expectedModal = `<div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Tu pedido:</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><pre id="myCart"><p class="total">Precio total: 0€</p></pre></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" class="btn btn-primary">Pagar</button></div></div>`;

export const modalContext = `<div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Tu pedido:</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><pre id="myCart"><div class="item_modal_container"><img class="img_modal" src="https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg"><img class="subs_button" src="./src/subsButton.png"><p>Alitas de Pollo (4)</p><p>8€</p></div><p class="total">Precio total: 32€</p></pre></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" class="btn btn-primary">Pagar</button></div></div>`

export const modalContextResult = {dishName: "Alitas de Pollo", dishImg: "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg", dishPrice: 8, dishCount: 3}

export const selectRestaurantFixture = [{
    "restaurantName": "Foster Hollywood",
    "restaurantImg": "https://intuasturias.es/blog/admin/resources/FOSTER4/fosters-hollywood.jpg",
    "kindOfFood": "Americana",
    "rating": "src/rating_stars_5.png",
    "dishes": [{
            "type": "Appetizer",
            "name": "Alitas de Pollo",
            "img": "https://www.comedera.com/wp-content/uploads/2013/07/alitas-de-pollo-al-horno.jpg",
            "description": "Alitas de pollo con salsa barbacoa",
            "ingredients": "Pollo, Salsa Barbacoa",
            "price": 8
        },
        {
            "type": "Primero",
            "name": "Ensalada César",
            "img": "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgranchef/R/Receta-de-ensalada-Cesar-1.jpg?itok=1RBs6hiJ",
            "description": "Fabulosa ensalada con los mejores brotes y piezas de pollo, y nuestra salsa especial César",
            "ingredients": "Lechuga, Pechuga de Pollo, Salsa César",
            "price": 13
        },
        {
            "type": "Segundo",
            "name": "Hamburguesa Bacon Cheeseburguer",
            "img": "https://www.tgifridays.es/sites/default/files/styles/dish/public/dish/fridays-classic-burgers/cheesy-bacon-cheeseburger.jpg?itok=3hEzu2J5&timestamp=1520183558",
            "description": "Exquisita hamburguesa 100% vacuno con bacon y queso cheddar acompañado de patatas fritas",
            "ingredients": "Lechuga, Tomate, Cebolla, 200g Carne Vacuno, Queso Chedar",
            "price": 15
        },
        {
            "type": "Postre",
            "name": "CheeseCake",
            "img": "https://www.thespruceeats.com/thmb/zXB9_pJ9Z40SUi75eRezebs5lTM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
            "description": "Nuestra famosa cheesecake , receta original americana, con mermelada de arándanos",
            "ingredients": "Leche, queso, azúcar, galletas, arándanos",
            "price": 6
        }
    ]
}]