import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

async function* fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    yield data;
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
    console.log(value); //Imprime la lista de los Productos de la API

    const idProduct = value[0].id; //Extrae el id del producto que queremos manipular

    console.log(`Enlace producto: ${urlApi}/products/${idProduct}`);

    fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {

        console.log(value.title); //Imprime el Título del producto solicitado

        const idCategory = value.category.id;

        fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {

            console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        });
    });
});