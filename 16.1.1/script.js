function mostrarPokemon(url){
fetch(url)
.then((response)=>{
  if (!response.ok){
    throw new Error ("error en la respuesta");
  }
  return response.json();
})
.then((data)=>{
  const contenidoDetalles = `
  <h3>${data.name}</h3>
  <img src="${data.sprites.front_default}"></img>
  <p>Especie: ${data.species.name} </p>
  <p>Peso: ${data.weight}</p>
  
  
  `
  document.getElementById("detalle").innerHTML = contenidoDetalles;
  
})

};

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("esta andando");
fetch("https://pokeapi.co/api/v2/pokemon")
.then((response)=>{
    if (!response.ok) {
        throw new Error("Esto es un error");
      }
      return response.json();
    
    })
    .then((data) => {
      console.log("esta andando2");
     const tabla =  document.getElementById("tabla");
     data.results.forEach(element => {
       const contenidoTabla = ` 
        
        <tbody>
          <tr scope="row">
            <td>${element.name}</td>
            <td scope="row"><button class="btn btn-primary" onclick="mostrarPokemon('${element.url}')">Ver detalles</button></td>
          </tr>
        </tbody>`
        tabla.innerHTML+= contenidoTabla;
     });
      
      })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un problema al cargar la información del producto.");
    });
  })