let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListContainer = document.querySelector(".list-group");
    let createlistItem = document.createElement("li");
    createlistItem.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn-primary");
    button.classList.add("pokemon-button");
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('data-target', '#exampleModal')
    createlistItem.appendChild(button);
    pokemonListContainer.appendChild(createlistItem);
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalHeader = $("modal-header");
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body"); 

    // Clear existing modal content
    modalHeader.empty();
    modalTitle.empty();
    modalBody.empty();

    // Create for name in modal content
    let pokemonName = $("<h1>" + pokemon.name + "</h1>");
    // Create img in modal content
    let pokemonImage = $('<img class="modal-img" style="width:50%">');
    pokemonImage.attr("src", pokemon.imageUrl);
    //Create height in modal content
    let pokemonHeight = $("<p>" + "Height : " + pokemon.height + "</p>");

    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });


  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;

    }).catch(function(e) {
      console.error(e);
    });
  }

  // The rest of the code goes here

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };

})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
