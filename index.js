fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let data = "";
    json.map((values) => {
      data += `<div class="card">
            <h2 class="tittle">${values.title}</h2>
            <img src="${values.image}" alt="image" class="image">
            <p class="description">${values.description}</p>
            <h4 class="Category">${values.category}</h4>
            <h5 class="price">${"$" + values.price}</h5>
        </div>`;
    });
    document.querySelector(".cards").innerHTML = data;
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });
