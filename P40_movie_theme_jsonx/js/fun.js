const mainContainer = document.querySelector('.ranking');

// function looper= recorre el json
function looper(jsonObj){

    jsonObj.forEach((item)=>{
        
        // creamos contenedor principal
        const artistItem = document.createElement('div');
        artistItem.classList.add('raking__artist-item');
        mainContainer.appendChild(artistItem);

        // creamos contenedor de foto y foto
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('raking__photo-container');
        artistItem.appendChild(photoContainer);

        const photo = document.createElement('img');
        photo.classList.add('raking__photo');
        photo.src= "img/persona.jpg";
        photoContainer.appendChild(photo);

        // creo datos de artista
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('raking__data-container');
        artistItem.appendChild(dataContainer);

        // llamo a iteamCreator 4 veces una por cada item
        itemCreator(dataContainer, 'h2', 'Nombre ', item.name);
        itemCreator(dataContainer, 'p', 'Nombre alternativo: ', item.alternativo_name);
        itemCreator(dataContainer, 'p', 'Rating: ', item.rating);
        itemCreator(dataContainer, 'p', 'ID: ', item.objectID);
        
    })

    function itemCreator(container, itemTag, itemLabel, itemValue){
        const newItem = document.createElement(itemTag);
        container.appendChild(newItem);
        const valueOfItem = itemValue ? itemValue : "no disponible";
        newItem.innerHTML = `<span class="raking__data-item">${itemLabel}</span>${valueOfItem}`
    }

    // Colores
    

}

// funcion initialize
function init(){
    fetch('actors_and_actress.json')
    .then((response)=>{
        movies = response.json().then((data)=>{
            looper(data)
        })
    })
}

init();