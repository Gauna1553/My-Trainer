import { Usuario } from "src/app/model/usuarios";

export class RoleValidator {
    isVistante(usuario: Usuario):boolean {
        return usuario.rol === 'Visitante';
    }
}