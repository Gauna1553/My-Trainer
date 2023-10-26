import { Usuario } from "src/app/model/usuarios";

export class RoleValidator {
    isVistante(usuario: Usuario):boolean {
        return usuario.rol === 'Visitante';
    }

    isAdministrador(usuario: Usuario):boolean {
        return usuario.rol === 'Admin';
    }

    isUsuario(usuario: Usuario):boolean {
        return usuario.rol === 'Usuario';
    }
}