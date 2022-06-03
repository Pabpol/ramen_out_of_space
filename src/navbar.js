export default function () {
    const navbar  = document.createElement('nav');
    navbar.setAttribute('class', 'navbar')

    let elements = ['Home', 'Menu', 'About us','Contact']
    elements.forEach((element) => {
        const a = document.createElement("a");
        a.setAttribute("class", `navlink`);
        a.setAttribute("href", `#${element}`);
        a.innerHTML = `${element}`
        navbar.appendChild(a);
    });
    return navbar;
}
