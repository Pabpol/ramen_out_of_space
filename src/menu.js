export default function(){
    const menu = document.createElement('section');
    const menuTitle = document.createElement('h2');
    const menuItems = document.createElement('div');

    menu.setAttribute('class', 'menu');
    menu.setAttribute('id', 'Menu');

    menuItems.setAttribute('class', 'menuItems')

    menuTitle.setAttribute('class', 'menuTitle')

    menuTitle.textContent ="Menu"

    

    
    let elements = ['Ramen with bacon', 'Ramen with chicken', 'Ramen with chili', 'Ramen with mushrooms', 'Ramen with passion fruit', 'Ramen with seaweed']
    elements.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", `menu-card`);

        const cardTitle = document.createElement('div');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerHTML = `${element}`;
    
        const cardImg = document.createElement('img')
        cardImg.setAttribute('class', 'card-image');
        cardImg.setAttribute('src', `img/${element}.jpg`);

        const price = document.createElement('div');
        price.setAttribute('class', 'price');
        price.innerHTML = `<p>$15.00.-</p>`


        card.appendChild(cardTitle);
        card.appendChild(cardImg);
        card.appendChild(price)
        menuItems.appendChild(card);
    });

    menu.appendChild(menuTitle);
    menu.appendChild(menuItems);

    return menu;

}