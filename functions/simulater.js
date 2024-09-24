//SIMULADOR INVERSION
function simulador () {

  do {
    opcion = parseInt(prompt("Ingrese 1 para hacer la simulacion\nIngrese 2 para consultar los planes de servicios\nIngrese 0 para salir"))
    if (opcion === 1) {
        simuladorInversion()
    }
    if (opcion === 2) {
      consultaServicios()
    }
  } while (opcion != 0) 

  function simuladorInversion () {

    // Toma el monto invertido
    let montoInvertido = parseInt(prompt("Ingrese el monto a invertir")) 
    // El monto debe ser superior a 100 sino vuelve a iniciar la funcion
    if (isNaN(montoInvertido)) {
      return(
        alert("Solamente se pueden ingresar numeros"),
          simuladorInversion()
        )
    }
    if (montoInvertido < 10000){
      alert("ERROR, la inversion minima es de 10000 USD"),
        simuladorInversion()
    } 
    // Toma la criptomoneda que elije el cliente 
    let criptomoneda = prompt("Elija la criptomoneda en la cual quiere invertir (BNB) (BTC) (BUSD) (ETH)") 
    // Contenedor de criptomonedas y sus precios
    let switchObject = {
      bnb: 280,
      btc: 990,
      busd: 12,
      eth: 30
    }
      
    // Toma el monto de la inversion y lo divide al valor de la criptomoneda que eligio el clientes
    let resultadoInversion = Math.round(montoInvertido / switchObject [criptomoneda.toLowerCase()])
    // Toma el monto de la inversion para sacar el valor de la comision
    let comision = resultadoInversion % 5
    // Toma el resultado de la comision y del valor de las criptomonedas para sacar el valor total de lo que ganara el cliente
    let resultadoInversionComision = Math.round(resultadoInversion - comision)

    return (
      alert("Con tu monto de inversion, puedes comprar" + " " + resultadoInversion + " " + "de" + " " + criptomoneda),
      alert("Nosotros nos quedariamos con el 5% de tu compra" + " " + comision + " " + "unidades"),
      alert("El total de" + " " + criptomoneda + " " + "que adquiriste es de:" + " " + resultadoInversionComision + " " + "unidades")
    )

  }

    
    //Planes de servicios
    // let planPersonal = {
    //   caracteristicas: {
    //     paginas: 5,
    //     seguridad: "Incluido",
    //     hosting: "Incluido",
    //     mantenimiento: "Incluido",
    //     ecommerce: "Incluido",
    //     integracionCRM: "No Incluido",
    //     integracionEmailMarketing: "No Incluido",
    //     pasarelaPago: "No Incluido",
    //     metodosEnvio: "No Incluido",
    //     gestionPedidos: "No Incluido"
    //   },
    //   precio: 4
    // }
    // let planPersonalProfesional = {
    //   caracteristicas: {
    //     paginas: 15,
    //     seguridad: "Incluido",
    //     hosting: "Incluido",
    //     mantenimiento: "Incluido",
    //     ecommerce: "Incluido",
    //     integracionCRM: "No Incluido",
    //     integracionEmailMarketing: "No Incluido",
    //     pasarelaPago: "No Incluido",
    //     metodosEnvio: "No Incluido",
    //     gestionPedidos: "No Incluido"
    //   },
    //   precio: 8
    // }
    // let planEmpresa = {
    //   caracteristicas: {
    //     paginas: 50,
    //     seguridad: "Incluido",
    //     hosting: "Incluido",
    //     mantenimiento: "Incluido",
    //     ecommerce: "Incluido",
    //     integracionCRM: "Incluido",
    //     integracionEmailMarketing: "Incluido",
    //     pasarelaPago: "No Incluido",
    //     metodosEnvio: "No Incluido",
    //     gestionPedidos: "No Incluido"
    //   },
    //   precio: 12
    // }
    // let planShopping = {
    //   caracteristicas: {
    //     paginas: "Ilimitado",
    //     seguridad: "Incluido",
    //     hosting: "Incluido",
    //     mantenimiento: "Incluido",
    //     ecommerce: "Incluido",
    //     integracionCRM: "Incluido",
    //     integracionEmailMarketing: "Incluido",
    //     pasarelaPago: "Incluido",
    //     metodosEnvio: "Incluido",
    //     gestionPedidos: "Incluido"
    //   },
    //   precio: 20
    // }
  let servicios = [
  {
    nombre:"Plan Personal", 
    paginas:"5", 
    seguridad:"Incluido", 
    hosting:"Incluido", 
    mantenimiento:"Incluido", 
    ecommerce:"Incluido", 
    integracionCRM:"No Incluido", 
    integracionEmailMarketing:"No Incluido", 
    pasarelaPago:"No Incluido", 
    metodosEnvio:"No Incluido", 
    GestionPedidos:"No Incluido", 
    precio: 4,
    stock: "si"
  },
  {
    nombre:"Plan Personal Profesional", 
    paginas:"15", 
    seguridad:"Incluido", 
    hosting:"Incluido", 
    mantenimiento:"Incluido", 
    ecommerce:"Incluido", 
    integracionCRM:"No Incluido", 
    integracionEmailMarketing:"No Incluido", 
    pasarelaPago:"No Incluido", 
    metodosEnvio:"No Incluido", 
    GestionPedidos:"No Incluido", 
    precio: 8,
    stock: "si"
  },
  {
    nombre:"Plan Empresa", 
    paginas:"50", 
    seguridad:"Incluido", 
    hosting:"Incluido", 
    mantenimiento:"Incluido", 
    ecommerce:"Incluido", 
    integracionCRM:"Incluido", 
    integracionEmailMarketing:"Incluido", 
    pasarelaPago:"No Incluido", 
    metodosEnvio:"No Incluido", 
    GestionPedidos:"No Incluido", 
    precio: 12,
    stock: "no"
  },
  {
    nombre:"Plan Shopping", 
    paginas:"Ilimitado", 
    seguridad:"Incluido", 
    hosting:"Incluido", 
    mantenimiento:"Incluido", 
    ecommerce:"Incluido", 
    integracionCRM:"Incluido", 
    integracionEmailMarketing:"Incluido", 
    pasarelaPago:"Incluido", 
    metodosEnvio:"Incluido", 
    GestionPedidos:"Incluido", 
    precio: 20,
    stock: "si"
  }
  ]
  
  function consultaServicios () {
    let containerServicios = document.getElementById("lista-servicios")
    for (const servicio of servicios){
      let tablaServicios = document.createElement("div")
      if(servicio.stock = "no"){
        tablaServicios.className = "servicioSinStock"
      } else {
        tablaServicios.className = "servicio col-12"
      }
      tablaServicios.id = servicio.id
      tablaServicios.innerHTML = `
        <table class="table table-hover rounded-5 py-5 my-5">
          <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Ultimo precio</th>
                <th scope="col">Cambios en 24h</th>
                <th scope="col">Cap. de mercado</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <th class="d-flex p-2 align-items-center">
                  <img class="rounded-5" src="./images/criptomonedas/bnb.png" alt="">
                  <h4 class="mx-xl-3 mx-2 my-0">BNB</h4>
                  <span>BNB</span>
                </th>
                <td>$286,4</td>
                <td><code>+0,39%</code></td>
                <td>$46.239M</td>
              </tr>
              <tr>
                <th class="d-flex p-2 align-items-center">
                  <img class="rounded-5" src="./images/criptomonedas/bitcoin.webp" alt="">
                  <h4 class="mx-xl-3 mx-2 my-0">Bitcoin</h4>
                  <span>BTC</span>
                  <td>$19.572</td>
                  <td><code>+2,11%</code></td>
                  <td>$375.443M</td>
                </th>
              </tr>
              <tr>
                <th class="d-flex p-2 align-items-center">
                  <img class="rounded-5" src="./images/criptomonedas/busd.png" alt="">
                  <h4 class="mx-xl-3 mx-2 my-0">BUSD</h4>
                  <span>BUSD</span>
                  <td>$0,9999</td>
                  <td><code>+0,00%</code></td>
                  <td>$21.042M</td>
                </th>
              </tr>
              <tr>
                <th class="d-flex p-2 align-items-center">
                  <img class="rounded-5" src="./images/criptomonedas/ethereum.png" alt="">
                  <h4 class="mx-xl-3 mx-2 my-0">Ethereum</h4>
                  <span>ETH</span>
                  <td>$1.320</td>
                  <td><code>+1,80%</code></td>
                  <td>$162.075M</td>
                </th>
              </tr>
          </tbody>
      </table>
      `
      containerServicios.append(tablaServicios)
    }
  }

}





  