export default function () {
    const header = document.createElement('header');
    const h1 = document.createElement('H1');
    const svg = document.createElement('img');
    const svg2 = document.createElement('img');


    header.setAttribute('class', `header`);
    header.setAttribute('id', `Home`);
    svg.setAttribute('src', '/dist/img/Asset 2.svg')
    svg.setAttribute('class', `svg`);

    svg2.setAttribute('src', '/dist/img/Asset 2.svg')
    svg2.setAttribute('class', `svg2`);

    h1.setAttribute('class', 'title')
    h1.textContent = "Ramen out of space";
    header.appendChild(h1);
    header.appendChild(svg);
    header.appendChild(svg2);

    return header;
}
