export type Roles = 'Usuario' | 'Visitante' | 'Admin';

export interface Usuario {
    uid: string|any;
    nombre: string;
    apellido:string;
    email:string;
    rol?: Roles;
    contrasena: string;
    sexo:number;
    edad:number;
    altura:number;
    peso:number;
}