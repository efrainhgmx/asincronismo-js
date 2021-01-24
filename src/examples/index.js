//Ejercicio 1 
//Arreglo de objetos.
const movies = [{
    id: 1,
    title: "Iron Man",
    year: 2008
}, {
    id: 2,
    title: "Iron Man 2",
    year: 2010
}, {
    id: 3,
    title: "Captain America",
    year: 2011
}, {
    id: 4,
    title: "Thor",
    year: 2011
}, {
    id: 5,
    title: "The Avengers",
    year: 2012
}];

//Consumo de datos mediante promesas:
const getData = () => {
    return new Promise ((resolve, reject) => {
        if(movies.length === 5) {
            setTimeout(() => {
                resolve(movies);
            }, 2500)
        } else {
            reject(new Error ('Error in data movies'))
        }
    });
}

getData()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//Consumo de API con AJAX 
//Modulo para hacer peticiones con Noje Js
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const dataAPI = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error ('Error in: ' + url_api))
            }
        });
        xhttp.send();
    });
}