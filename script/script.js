//Crear un objeto-*-Para eso necesito una clase con los datos que voy a usar
class Mascota {
  constructor(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
  }
}
//Crear un Objeto

//DONDE LAS GUARDO? -- Crear un array Vacio
const listaMascotas =  [];
//Crear un array Vacio

//Pedirles los datos al usuario-- ((Va a ser en una funcion))--Porque quiero que pase cuando yo quiero
const nuevaMascota = () => {
  let nombre = prompt("Como se llama la mascota?"); //  Pedir datos a Usuario
  let tipo = prompt("Que raza es su mascot?"); //  Pedir datos a Usuario
  let edad = parseInt(prompt("Que edad tiene su mascota?")); //  Pedir datos a Usuario

  let mascotaNueva = new Mascota(nombre, tipo, edad); // Variable para ir armando un nuevo Objeto

//Preguntar si hay algo en el local storage
  if (localStorage.getItem("mascots")== null){
    listaMascotas.push(mascotaNueva);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas));

  }else{
     
    const listaStorage = JSON.parse(localStorage.getItem("mascotas"));//(1)Veo que hay
          listaStorage.push(mascotaNueva);//(2)Lo empujo de nuevo al array  
          localStorage.setItem("mascotas", JSON.stringify(listaStorage));
   
  }
//   listaMascotas.push(mascotaNueva);

  //Fijarme si hay algo en el localStorage para que no sobreescriba y lo borre a lo que hay
//   const listaStorage = JSON.parse(localStorage.getItem("mascotas"));//(1)Veo que hay

//   listaStorage.push(mascotaNueva);//(2)Lo empujo de nuevo al array  
//   localStorage.setItem("mascotas", JSON.stringify(listaStorage));
  // Se agrega al local Storage listaMascotas no va como String se parsea con JSON  
  
 
//   return listaMascotas; No se necesita

};
