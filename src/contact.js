export default function () {
    const contact = document.createElement('section');
    const info = document.createElement('div');
    const map = document.createElement('div');
    const address = document.createElement('p');
    const insta = document.createElement('p');
    const face = document.createElement('p');
    const mapImg = document.createElement('img');

    contact.setAttribute('class', 'contact');
    contact.setAttribute('id', 'Contact');


    info.setAttribute('class', 'info');
    map.setAttribute('class', 'map');
    address.setAttribute('class', `address`);
    insta.setAttribute('class', `insta`);
    face.setAttribute('class', `face`);
    mapImg.setAttribute('src', 'img/location.png')

    address.innerHTML = `<i class="fa-solid fa-location-pin"></i> Addres 123, city, country.`;
    insta.innerHTML = `<i class="fa-brands fa-instagram"></i> @ramen_out_of_space`;
    face.innerHTML = `<i class="fa-brands fa-facebook-square"></i> Ramen out of space`;

    info.appendChild(address);
    info.appendChild(insta);
    info.appendChild(face);

    map.appendChild(mapImg);

    contact.appendChild(info);
    contact.appendChild(map);

    return contact;
}
