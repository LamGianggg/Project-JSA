let destinations = {
    data : [
        {
            name: 'UNITED STATES',
            image: 'img/united-states.jpg',
            place: 'How Do Factories Cause Air Pollution?',
            link: './blog/air_pollution.html'
        },

        {
            name: 'EUROPE',
            image: 'img/amsterdam.jpg',
            place: 'How many creatures will survive through water pollution?',
            link: './blog/water_pollution.html'
        },

        {
            name: 'AUSTRALIA',
            image: 'img/australia.jpg',
            place: 'What are the consequences of land pollution?',
            link: './blog/land_pollution.html'
        }
    ]
};

for(let items of destinations.data){
    let card= document.createElement('div');
    card.classList.add('grid_column-4');
    card.classList.add('gap');

    let image = document.createElement('img');
    image.classList.add('pollution');
    image.setAttribute('src', items.image);
    image.onclick = function () {
        window.location.href = items.link;
    };

    let name = document.createElement('a');
    name.classList.add('place');
    name.setAttribute('href', items.link )
    name.innerText = items.name;

    card.appendChild(image);
    card.appendChild(name);
    document.getElementById('destinations').appendChild(card);
}