fetch('https://www.dnd5eapi.co/api/features/primal-path')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json)
});

function fetchDescription() {
    return fetch('https://www.dnd5eapi.co/api/features/primal-path')
    .then(resp => resp.json())
    .then(json => renderDescription(json));
  }

function renderDescription(json) {
    const main = document.querySelector('main')
    json.forEach(desc => {
        const h2 = document.createElement('p')
        p.innerHTML = `<p>${book.name}</p>`
        main.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDescription()
})