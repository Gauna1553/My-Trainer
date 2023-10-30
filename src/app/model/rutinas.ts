import { Ejercicio } from "./ejercicios";

// Estructura que tendran las rutinas
export interface Rutina {
    id: number;
    nombre: string;
    ejercicios: Ejercicio[];
}