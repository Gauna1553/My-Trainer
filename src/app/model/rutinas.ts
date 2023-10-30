import { Ejercicio } from "./ejercicios";

// Estructura que tendran las rutinas
export interface Rutina {
    idRutina: string;
    nombre: string;
    ejercicios: Ejercicio[];
}