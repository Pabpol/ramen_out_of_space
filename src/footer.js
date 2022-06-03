export default function(){
    const footer = document.createElement('footer');
    const creator = document.createElement('p');

    creator.innerHTML = `<i class="fa-brands fa-github"></i> <a href="https://github.com/Pabpol">Pabpol</a>`

    footer.appendChild(creator);

    return footer;
}