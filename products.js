let products = {
    data: [
        {
            name: 'Air pollution',
            image: 'img/air_pollution.jpg',
            blog: 'How Do Factories Cause Air Pollution?',
            link: './blog/air_pollution.html'
        },

        {
            name: 'Water pollution',
            image: 'img/water_pollution.jpg',
            blog: 'How many creatures will survive through water pollution?',
            link: './blog/water_pollution.html'
        },

        {
            name: 'Land pollution',
            image: 'img/land_pollution.jpg',
            blog: 'What are the consequences of land pollution?',
            link: './blog/land_pollution.html'
        },

        {
            name: 'Light pollution',
            image: 'img/light_pollution.jpg',
            blog: 'Are you really creating light pollution?',
            link: './blog/light_pollution.html'
        }
    ]
};

for (let item of products.data) {
    let card = document.createElement('div');
    card.classList.add('grid_column-3');
    card.classList.add('gap');

    let name = document.createElement('p');
    name.classList.add('text_2');
    name.innerText = item.name;

    let image = document.createElement('img');
    image.classList.add('pollution');
    image.setAttribute('src', item.image);
    image.onclick = function () {
        window.location.href = item.link;
    };

    let blog = document.createElement('a');
    blog.classList.add('blog');
    blog.setAttribute('href', item.link)
    blog.innerText = item.blog;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(blog);
    document.getElementById('products').appendChild(card);
}






