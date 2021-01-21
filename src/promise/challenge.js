const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';


fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));

fetchData(API)
    .then(data => {
        console.log(`El personaje es: ${data.results[0].name} es: ${data.results[0].species} y de origen: ${data.results[0].origin.name}`);
        return fetchData(`${API}${data.results[1].id}`)
    })
    .then(data => {
        console.log(`Este segundo personaje se llama: ${data.name} es: ${data.species} `)
    })
    .catch(error => console.error('Error en la peticion ' + error));