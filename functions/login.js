    function newAccount() {

        do {
            opcion = parseInt(prompt("ingrese 1 para comenzar\ningrese 0 para salir"))
            if (opcion === 1) {
                dates()
            }
        } while (opcion != 0)
         
        function dates () {
            let edad = parseInt(prompt("Ingrese edad (solo numeros)"))
            if (edad >= 18) {

                let nameUser = prompt ("Ingrese su nombre")
                let surnameUser = prompt ("Ingrese su apellido")

                alert("Bienvenido" + " " + nameUser + " " + surnameUser)

            } else if (edad < 18) {
                alert("Sos menor de edad, no puedes crearte una cuenta")
                alert("Al ser menor te podemos ofrecer que utilices nuestro simulador para poder ver como funcionan nuestros servicios")

            } else {
                alert("Ingrese un valor válido") 
                newAccount()
            }            
        }

    }