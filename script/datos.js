let listaMascotas = JSON.parse(localStorage.getItem("mascotas"));

let contenedor = document.getElementById("contenedor");

if (listaMascotas == null) {
  contenedor.innerHTML = "no ha mascotas en la lista";
} else {
  listaMascotas.forEach(mascota => {
    contenedor.innerHTML +=  `   
                 <h2>mascota.nombre</h2>
                <h3>mascota.tipo</h3>
                <p>Edad: mascota.edad</p>
            `
     })
}
