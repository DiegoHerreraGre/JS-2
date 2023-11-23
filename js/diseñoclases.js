let combatientes = [];

class TiposCombatientes {
    tipo;
    categoria;
    estilo;
    experiencia;
    constructor(tipo, categoria, estilo, experiencia) {
        this.tipo = tipo;
        this.categoria = categoria;
        this.estilo = estilo;
        this.experiencia = experiencia;
    }
}

let ingresoDatosUsuario;

while (
    (ingresoDatosUsuario = prompt('Eliga su tipo de combatiente (escriba el nombre): Vortex | Escala | Hyperion')) &&
    (ingresoDatosUsuario === 'Vortex' || ingresoDatosUsuario === 'Escala' || ingresoDatosUsuario === 'Hyperion')
    ) {
    if (ingresoDatosUsuario === 'Vortex') {
        let tipo1 = new TiposCombatientes('Ataque', 'Nivel alto', 40, 60);
        let aux1 = tipo1;
        combatientes.push(aux1 = 'Vortex' );

    } else if (ingresoDatosUsuario === 'Escala') {
        let tipo2 = new TiposCombatientes('Defensa', 'Nivel medio', 70, 55);
        let aux2 = tipo2;
        combatientes.push(aux2 = 'Escala');

    } else if (ingresoDatosUsuario === 'Hyperion') {
        let tipo3 = new TiposCombatientes('Defensa', 'Nivel alto', 90, 67)
        let aux3 = tipo3;
        combatientes.push(aux3 = 'Hyperion');

    }

    console.log(combatientes);

    if ((ingresoDatosUsuario !== 'Vortex' || ingresoDatosUsuario !== 'Escala' || ingresoDatosUsuario !== 'Hyperion')) {
        alert('No escribiste bien el nombre de tu personaje 😭')
    }

}