//Buscar datos del pokemon, segun su numero o nombre
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`


    fetch(urlApi)
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))
}

//Mostrar informacion del pokemon
function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);

    infoDiv.innerHTML = `
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p><strong>Número:</strong> ${datosPokemon.id}</p>
    <p><strong>Peso:</strong> ${datosPokemon.weight/10}Kg</p>
    <p><strong>Altura:</strong> ${datosPokemon.height*10}cm</p>
    `
}

//Error en busqueda de pokemon
function mostrarError(contenedorNumero){
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);

    infoDiv.innerHTML = `
    <p class="pk-ms">Pokémon no encontrado.<br> Intenta con otro nombre o número.</p>
    `
}

//Pokémon por default
window.onload = function (){
     // Genera números aleatorios entre 1 y 1025 para cada Pokémon
     const randomPokemon1 = Math.floor(Math.random() * 1025) + 1;
     const randomPokemon2 = Math.floor(Math.random() * 1025) + 1;
 
     // Asigna los números aleatorios a los campos de entrada
     document.getElementById("pokemonInput1").value = randomPokemon1;
     document.getElementById("pokemonInput2").value = randomPokemon2;
 
     // Llama a la función buscarPokemon con los valores aleatorios
     buscarPokemon(1);
     buscarPokemon(2);
}