
$(document).ready(function () {
    let buscar = (e) => {
        e.preventDefault();
        let pokemon= $("input");
    
        if (pokemon.val().length==0){
            alert("Tiene que escribir el número o nombre del pokemon que quieras ver")
            pokemon.focus();
            return 0;
          
     }
        if (pokemon.val() < 1 || pokemon.val() > 893 ){
            alert("Tiene que introducir un número entero entre el 1 y 893")
            pokemon.val("");
            pokemon.focus();
            return 0;
        } else{
            pokemon.val("");
            pokemon.focus();
        }
    
    }
    
    $('form').on('submit', buscar);
 
      //llamada 1
     // $('#buscando').on('click',()=>{
       
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/50`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let infoPoke = response;
                $('#mostraerPoke').html(`
                <h5>Nombre: <span class="text-white">${infoPoke.name.toUpperCase()}</span></spam></h5>
                <img id="imgpoke" src="${infoPoke.sprites.front_default}" alt="${infoPoke.id}">
                `);
                $('#movimientos > ul').html("");
                infoPoke.moves.forEach((movimiento,index) => {
                    $('#movimientos > ul').append(`
                        <li>${index+1} - ${movimiento.move.name}</li>
                    `);
                });

                       //grafico
        let options = {
            title: {
                text: `Información de ${infoPoke.name.toUpperCase()}`,
                fontColor: "#2f4f4f",
                fontSize: 30,
                padding: 30,
                margin: 25,
                backgroundColor: "#FFFFE0",
                borderThickness: 1,
                cornerRadius: 15,
                fontWeight: "bold",            
            },
            animationEnabled: true,
            axisY: {
                title: "Valores"
            },
            legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center"
                },
            data: [              
                {
                    type: "column",
                    dataPoints: [
                        { label: "HP",  y: response.stats[0].base_stat},
                        { label: "ATTACK", y: response.stats[1].base_stat},
                        { label: "DEFENSE", y: response.stats[2].base_stat},
                        { label: "SPECIAL ATTACK",  y: response.stats[3].base_stat},
                        { label: "SPECIAL DEFENSE", y: response.stats[4].base_stat},
                        { label: "SPEED",  y: response.stats[5].base_stat},
                    ]
                }
            ]
        };
        $("#mostrarGrafico").CanvasJSChart(options);


            },
            error: function(error){
                console.error(error);
                $('#mostraerPoke').html(`
                <p>El Nombre o Número: ${entrada} buscado no existe, intenta nuevamente</p>
                <p>El estado de la busqueda es ${error.status}</p>
            `)
            }
        });
  

   //llamada 2

    $('#buscando').on('click',()=>{
        let entrada = $('input').val();
        console.log(entrada);
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${entrada}`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let infoPoke = response;
                $('#mostraerPoke').html(`
                <h5>Nombre: <span class="text-white">${infoPoke.name.toUpperCase()}</span></spam></h5>
                <img id="imgpoke" src="${infoPoke.sprites.front_default}" alt="${infoPoke.id}">
                `);
                $('#movimientos > ul').html("");
               
                infoPoke.moves.forEach((movimiento,index) => {
                    $('#movimientos > ul').append(`
                        <li>${index+1} - ${movimiento.move.name}</li>
                    `);
                });

                //grafico
        let options = {
            title: {
                text: `Información de ${infoPoke.name.toUpperCase()}`,
                fontColor: "#2f4f4f",
                fontSize: 30,
                padding: 30,
                margin: 25,
                backgroundColor: "#FFFFE0",
                borderThickness: 1,
                cornerRadius: 15,
                fontWeight: "bold",           
            },
            animationEnabled: true,
            axisY: {
                title: "Valores"
            },
            legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center"
                },
            data: [              
                {
                    type: "column",
                    dataPoints: [
                        { label: "HP",  y: response.stats[0].base_stat},
                        { label: "ATTACK", y: response.stats[1].base_stat},
                        { label: "DEFENSE", y: response.stats[2].base_stat},
                        { label: "SPECIAL ATTACK",  y: response.stats[3].base_stat},
                        { label: "SPECIAL DEFENSE", y: response.stats[4].base_stat},
                        { label: "SPEED",  y: response.stats[5].base_stat},
                    ]
                }
            ]
        };
        $("#mostrarGrafico").CanvasJSChart(options);
                
            },
            error: function(error){
                console.error(error);
                $('#mostraerPoke').html(`
                <p>El Nombre o Número: ${entrada} buscado no existe, intenta nuevamente</p>
                <p>El estado de la busqueda es ${error.status}</p>
            `)
            }
        });
        
        
    });

   

});

$("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  //validar formulario

   //boton

  /* let boton= document.getElementById("buscando");

   boton.addEventListener("click", verificar);

   // obtener imput
   let pokemon= document.querySelector("input");
  
  let validar = (event) =>{
    event.preventDefault();
    let busqueda= document.querySelector('input').value;

    if (busqueda.length >= 1 && busqueda.length <= 900 && busqueda.match(patron) || entradaNombre.value.match(patron2)) {
        resultado.innerHTML = `<p>${entradaNombre.value}</p>`
    } else {
        alert("Debes ingresar un número entre 1 - 900 o el nombre del pokemón");
        resultado.innerHTML = `<p class="fondo">Debe agregar un nombre permitido</p>`
    }
}*/

// obtener imput kkkkkkkkkkkkk
/*let pokemon= document.querySelector("input");

function valida_envia(){
    //validar si se ingreso algo
    if (pokemon.value.length==0){
        alert("Tiene que escribir el número o nombre del pokemon que quieras ver")
        pokemon.focus();
        return 0;
 }
    if (pokemon.value < 1 || pokemon.value > 893 ){
        alert("Tiene que introducir un número entero entre el 1 y 893")
        pokemon.value=("");
        pokemon.focus();
        return 0;
    } else{
        pokemon.focus();
    }
}*/

/*let buscar = (e) => {
    e.preventDefault();
    let pokemon= $("input");

    if (pokemon.val().length==0){
        alert("Tiene que escribir el número o nombre del pokemon que quieras ver")
        pokemon.focus();
        return 0;
 }
    if (pokemon.val() < 1 || pokemon.val() > 893 ){
        alert("Tiene que introducir un número entero entre el 1 y 893")
        pokemon.val()=("");
        pokemon.focus();
        return 0;
    } else{
        pokemon.focus();
    }

}

$('form').on('submit', buscar);*/
 