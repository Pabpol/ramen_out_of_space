export default function () {
    const aboutUs = document.createElement('section');
    const h1 = document.createElement('H1');
    const p = document.createElement('p');
    const svg3 = document.createElement('img');
    aboutUs.setAttribute('class', `about-us`);
    aboutUs.setAttribute('id', `About us`);

    svg3.setAttribute('src', '/img/Asset 2.svg')
    svg3.setAttribute('class', `svg3`);
   
    h1.setAttribute('class', 'about-us-title')
    h1.textContent = "About Ramen out of space";
    p.setAttribute('class', 'about-us-text')
    p.textContent =`My first disturbances were not tasty at all, but concerned the more abstract matters. actualy was, a feeling of profound and inexplicable pleasure concerning the ramen. I developed a queer love of seeing my own ramen, as if my eyes would find it something utterly alien and inconceivably abhorrent.`

    aboutUs.appendChild(h1);
    aboutUs.appendChild(p);
    aboutUs.appendChild(svg3);

    return aboutUs;
}
