'use strict';


/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const inputRace = document.querySelector('.js-input-race');


//Objetos con cada gatito
const kittenData_1 = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "borde Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_2 = {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Fiona",
    desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_3 = {
    image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    name: "Cielo",
    desc: " borde  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Funciones
function renderKitten(kittenData) {
    const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
    return kitten;
}

function renderKittenList(kittenDataList) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}
//Adicionar nuevo gatito
function addNewKitten(event) {
    event.preventDefault();
    const newKittenDataObject = {
        desc: inputDesc.value,
        photo: inputPhoto.value,
        name: inputName.value,
        race: inputRace.value,
    }

    if (inputDesc.value === "" && inputPhoto.value === "" && inputName.value === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        labelMesageError.innerHTML = "Mola! Un nuevo gatito en Adalab!";
        kittenDataList.push(newKittenDataObject); //añade el gatito
        renderKittenList(kittenDataList); // pinto el gatito
        emptyNewKitten();
    }
}

function emptyNewKitten() {
    inputDesc.value = '';
    inputPhoto.value = '';
    inputName.value = '';
    inputDesc.Race = '';
}

//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}

//Filtrar por descripción
function filterKitten() { //not yet working

    // function filterKitten(ev) {
    //     //Completa el código:
    //     //Haz un filter anidado sobre el listado de gatitos
    //     const kittenListFiltered = kittenDataList.
    //           .filter()
    //           .filter();
    //     //Vuelve a pintar el listado de gatitos filtrados en el HTML.
    //     renderKittenList(kittenListFiltered);
    //   }
    event.preventDefault();
    const descrSearchText = input_search_desc.value.toLowerCase();
    const raceSearchText = inputRace.value.toLowerCase();
    listElement.innerHTML = "";

    const kitten = kittenDataList.filter((pepino) => pepino.desc.toLowerCase().includes(descrSearchText)).filter((pepino) => pepino.race.toLowerCase().includes(raceSearchText));
    //.includes pregunta si la variable incluye lo que le pasamos entre paréntesis --> molaría que se llamase "isIncluding"
    //podemos anidar .filter de modo que hereden el filtro anterior y que equivalga a en un if hacer &&


    listElement.innerHTML += renderKitten(kitten[1]); //recibe una array en lugar de un objeto, puede ser?
    //funciona con el 0/1 pero no con el 2 ¿por qué?
    // for (const kittenItem of kittenDataList) {
    //     if (kittenItem.desc.includes(descrSearchText)) {
    //         listElement.innerHTML += renderKitten(kittenItem);
    //     }
    // }
}

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);






