export interface Usuario {
    uid: string|any;
    nombre: string;
    apellido:string;
    email:string;
    rol: string;
    contrasena: string;
}

export interface DatoUsuarios {
    uid: string|any;
    sexo:string;
    edad:number;
    altura:number;
    peso:number;
    imc:number;
}