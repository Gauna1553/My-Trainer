import { Ejercicio } from "./ejercicios";

// Estructura que tendran las rutinas
export interface Rutina {
    idRutina: string | any;
    nombre: string;
    ejercicios: Ejercicio[];
}