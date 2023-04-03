let pokemonRepository = (function () {
let pokemonList = [
  {name: 'Sawk' , height: 1.4, type:['fighting','huamn-like','karate']},
  {name: 'Togepi' , height: .3, type:['fairy','no-eggs', 'normal']},
  {name: 'Togetic' , height: .6, type:['fairy','flying','normal']},
  {name: 'Togekiss' , height: 1.5, type:['fairy','flying','normal']},
  {name: 'Charmander' , height: .6, type:['monster','dragon','fire']},
  {name: 'Charmeleon' , height: 1.1, type:['monster','dragon','fire']},
  {name: 'Charizard' , height: 1.7, type:['monster','dragon','fire','flying']},
  {name: 'Blitzle' , height: .8, type:['electric','horse','speed','thunder']},
  {name: 'Zebstrika' , height: 1.6, type:['electric','horse','speed','thunder']},

];

function add (pokemon) {
  pokemonList.push(pokemon);
}

function getAll () {
  return pokemonList;
}

function addListItem(pokemon) {
  let pokemonListContainer = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  listItem.appendChild(button);
  pokemonListContainer.appendChild(listItem);
  button.addEventListener('click', function (){
    showDetails(pokemon);
})
}

function showDetails(pokemon) {
  console.log(pokemon.name);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails
}
})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
