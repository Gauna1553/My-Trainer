//interfaz en donde se especifican los atributos que va a tener el usuario
export interface Usuario {
    uid: string|any;
    nombre: string;
    apellido:string;
    email:string;
    rol: string;
    token: string;
    contrasena: string;
    sexo:number;
    edad:number;
    altura:number;
    peso:number;
}