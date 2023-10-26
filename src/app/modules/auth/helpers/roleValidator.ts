import { Usuario } from "src/app/model/usuarios";

export class RoleValidator {
    isVistante(usuario: Usuario):boolean {
        return usuario.rol === 'Visitante';
    }

    isAdministrador(usuario: Usuario):boolean {
        return usuario.rol === 'Administrador';
    }

    isUsuario(usuario: Usuario):boolean {
        return usuario.rol === 'Usuario';
    }
}