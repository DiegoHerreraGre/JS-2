class PerfilesUsuarios {
    nombre = nombre;
    apellido = apellido;
    telefono = telefono;
    correo = correo;
    edad = edad;

    constructor(nombre, apellido, telefono, correo, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.edad = edad;
    }

    mostrarInformacion() {
        console.log (`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Telf: ${this.telefono}, Correo: ${this.correo}, Edad: ${this.edad}`)
    }
}
let baseDeDatosUsuario = [];
let continuar = true;

while (continuar) {
    let nombre = prompt('Ingresa tus nombres');
    let apellido = prompt('Ingresa tus apellidos');
    let telefono = prompt('Ingresa tu teléfono');
    let correo = prompt('Ingresa tu correo personal');
    let edad = prompt('Ingresa tu edad actual');

    let usuarioNuevo = new PerfilesUsuarios(nombre, apellido, telefono, correo, edad);

    baseDeDatosUsuario.push(usuarioNuevo);

    continuar = confirm ('Confirma los datos')
}

baseDeDatosUsuario.forEach(usuarioNuevo => {
    usuarioNuevo.mostrarInformacion();
});

