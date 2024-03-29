let pokemonRepository = (function () {
  let t = [];
  function e(e) {
    t.push(e);
  }
  function n() {
    return t;
  }
  function o(t) {
    a(t).then(function () {
      i(t);
    });
  }
  function i(t) {
    let e = $("modal-header"),
      n = $(".modal-title"),
      o = $(".modal-body");
    e.empty(), n.empty(), o.empty();
    let i = $("<h1>" + t.name + "</h1>"),
      a = $('<img class="modal-img" style="width:50%">');
    a.attr("src", t.imageUrl);
    let l = $("<p>Height : " + t.height + "</p>");
    n.append(i), o.append(a), o.append(l);
  }
  function a(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  return (
    window.addEventListener("keydown", (t) => {
      let e = document.querySelector("#modal-container");
      "Escape" === t.key &&
        e.classList.contains("is-visible") &&
        document
          .querySelector("#modal-container")
          .classList.remove("is-visible");
    }),
    {
      add: e,
      getAll: n,
      addListItem: function t(e) {
        let n = document.querySelector(".pokemon-list"),
          i = document.createElement("li");
        i.classList.add("list-group-item");
        let a = document.createElement("button");
        (a.innerText = e.name),
          a.classList.add("btn-block"),
          a.classList.add("btn-primary"),
          a.classList.add("pokemon-button"),
          a.setAttribute("data-toggle", "modal"),
          a.setAttribute("data-target", "#exampleModal"),
          i.classList.add("col-xl-3"),
          i.classList.add("col-lg-4"),
          i.classList.add("col-md-6"),
          i.appendChild(a),
          n.appendChild(i),
          a.addEventListener("click", function () {
            o(e);
          });
      },
      showDetails: o,
      loadList: function t() {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
          .then(function (t) {
            return t.json();
          })
          .then(function (t) {
            t.results.forEach(function (t) {
              e({ name: t.name, detailsUrl: t.url });
            });
          })
          .catch(function (t) {
            console.error(t);
          });
      },
      loadDetails: a,
      showModal: i,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
