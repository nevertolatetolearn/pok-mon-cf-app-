let pokemonList = [
  {name: 'Sawk' , height: '1.4', type:['fighting','huamn-like','karate']},
  {name: 'Togepi' , height: '.3', type:['fairy','no-eggs', 'normal']},
  {name: 'Togetic' , height: '.6', type:['fairy','flying','normal']},
  {name: 'Togekiss' , height: '1.5', type:['fairy','flying','normal']},
  {name: 'Charmander' , height: '.6', type:['monster','dragon','fire']},
  {name: 'Charmeleon' , height: '1.1', type:['monster','dragon','fire']},
  {name: 'Charizard' , height: '1.7', type:['monster','dragon','fire','flying']},
  {name: 'Blitzle' , height: '.8', type:['electric','horse','speed','thunder']},
  {name: 'Zebstrika' , height: '1.6', type:['electric','horse','speed','thunder']}

];

// For loop: to check the different Pokemons heights and 
//print out the correct information relating to the right conditions.
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 1.5) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!" + "<br>");
    } else if (pokemonList[i].height >= 1.0 && pokemonList[i].height < 5) {
      document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!" + "<br>");
    } else {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!" + "<br>");
    }
  }
