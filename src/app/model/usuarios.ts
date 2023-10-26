export type Roles = 'Usuario' | 'Visitante' | 'Administrador';

export interface Usuario {
    uid: string|any;
    nombre: string;
    apellido:string;
    email:string;
    rol?: Roles;
    contrasena: string;
}