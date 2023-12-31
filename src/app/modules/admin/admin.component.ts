import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from '../auth/services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  database = '';
  submitted = false;

  //Creo un arreglo para guardar la información que despues se recorre para
  usuariosCollecion: Usuario[] = [];
  
  usuarioSeleccionado!: Usuario;

  editar = false;

  idEditar = '';

  //Defino la visibilidad del pop up como falsa de forma defualt
  usuariosDialog: boolean = false;
  //Defino la visibilidad del loading
  loading = false;

  usuarios!: Usuario;

  //Aca los declaramos falso como default para que por las dudas no muestren nada
  loggedIn = false;
  isAdmin: boolean = false;
  stopExecution = true; //Esto evita que el ngOnInit se ejecute en bucle en caso de que el usuario sea admin

  constructor(public usuariosService: UsuariosService, private servicioAuth: AuthService) {}

  ngOnInit() {
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice si el usuario esta logeado o no
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      //Aca recibimos el valor en el parametro 'isLoggedIn' y comparamos si es verdadero o falso que esta logeado
      if (isLoggedIn) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice que tipo de usuario se logeo
    this.servicioAuth.getUserType().subscribe(userType => {
      if(userType === 'admin' && this.stopExecution){
        this.stopExecution = false; //Al volverse falso nos bloquea el paso en el if ya que no cumple más la condición de true
        this.isAdmin = true;
        this.ngOnInit();
      }
    })

    /*Llamamos a la función obtenerUsuario y le enviamos los nuevos valores
    del formulario producto(estos se guardaran en la colección) */
    this.usuariosService.obtenerUsuario().subscribe(usuarios => {
      this.usuariosCollecion = usuarios
      
      //Es una colección para así poder seleccionar a más de un elemento
    })
    
  }

  //Arreglo donde se almacenan todos los datos del objeto de Usuario
  usuarioss: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    rol: '',
    token: '',
    sexo: '',
    edad: 0,
    altura: 0,
    peso: 0,
    imc: 0,
  }

    //Esta funcion abre el popup al hacer que su visibilidad sea verdadera
    openNew() {
      this.submitted = false;
      this.usuariosDialog = true;
    }
    //Esta funcion cierra el popup al hacer que su visibilidad sea falsa y resetea los inputs
    hideDialog() {
      this.usuariosDialog = false;
      this.usuarios.nombre = '';
      this.usuarios.email = '';
      this.usuarios.contrasena = '';
      this.usuarios.rol = '';
    }

    crearUsuario() {
      this.submitted = true;
      if(!this.editar && this.usuarioss.nombre && this.usuarioss.apellido && this.usuarioss.email && this.usuarioss.contrasena && this.usuarioss.rol) {
        this.loading = true;
        const resultado = this.usuariosService.crearUsuario(this.usuarioss).then((resp) => {
          this.loading = false;
          alert("Se creo un nuevo usuario correctamente")
        }) .catch ((error) => {
          this.loading = false;
          alert("No se pudo crear el usuario de forma correcta")
        })
      }
      else {
        if(this.usuarioss.nombre && this.usuarioss.apellido && this.usuarioss.email && this.usuarioss.contrasena && this.usuarioss.rol) {
          this.loading = true;
          this.usuarioss.uid = this.idEditar;
          this.usuariosService.modificarUsuarios(this.idEditar, this.usuarioss).then((resul) => {
            this.loading = false;
            this.editar = false;
            this.usuariosDialog = false;
          })
        }
      }

      /*
    Esta funcion lo que hace es crear ejercicios y almacenarlos en la base de datos de firebase.
    Los datos son almacenados en la constante resultado, y si se logro guardar correctamente, se muestra el primer mensaje.
    En caso de no haberse guardado, se almacena el error y se muestra el segundo mensaje.
    */
    }

    mostrarBorrar(usuariosSeleccionado: Usuario) {
      this.usuarioSeleccionado = usuariosSeleccionado;
      if(confirm("¿Desea eliminar el usuario?") === true) {
        this.borrarUsuario()
      } else {
        alert("No se pudo borrar el usuario deseado")
      }
    }
    /*
      Esta función lo que hace es a traves de un confirm, preguntarle al usuario si quiere eliminar un ejercicio.
      En caso que toque el boton de aceptar, llama a la función de borrarEjercicio(). En caso contrario, aparece el segundo cartel.
    */

    borrarUsuario() {
      this.usuariosService.eliminarUsuarios(this.usuarioSeleccionado.uid)
      .then(respuesta => {
        alert("El usuario se elimino correctamente")
      })
      .catch(error => {
        alert("No se pudo eliminar el usuario: \n" + error)
      })

    /*
    Esta funcion se encargar de tomar la ID de los ejercicios almacenados en la BD, y por medio de un boton
    al cual se le asigna esta función, se borrara el ejercicio deseado.
    Si se pudo borrar correctamente, se muestra el primer mensaje, en caso contrario, se mostrara el segundo.
    */
    }

    //Editar usuario -> se llama al boton para el pop up
    editarUsuario(usuarioSeleccionado: Usuario) {
      this.usuarioSeleccionado = usuarioSeleccionado;
      if (confirm("¿Desea editar el usuario?") === true) {
        this.editar = true;
        this.idEditar = usuarioSeleccionado.uid;
        this.openNew();
      } else {
        alert("No se pudo modificar los datos del usuario")
      }
      
      /*
      Esta función lo que hace es seguir el mismo ejemplo de mostrarBorrar().
      La principal diferencia es que ahora abre una ventana modal con los campos del ejercicio actuales, para así poder editarlos.
    */
    }

    editUsuario() {
      console.log(this.usuarios);
      let datos: Usuario = {
        uid: this.usuarios.uid,
        nombre: this.usuarios.nombre,
        apellido: this.usuarios.apellido,
        email: this.usuarios.email,
        contrasena: this.usuarios.contrasena,
        rol: this.usuarios.rol,
        token: this.usuarios.token,
        sexo: this.usuarios.sexo,
        edad:  this.usuarios.edad,
        altura: this.usuarios.altura,
        peso: this.usuarios.peso,
        imc: this.usuarios.imc
        //se pasan los datos del objeto Usuario para luego poder almacenar los nuevos con la finalidad de poder ser editados
      }

      this.usuariosService.modificarUsuarios(this.usuarioSeleccionado.uid, datos)
      .then(usuarios => {
        alert("El usuario se modifico con exito")
      })
      .catch(error => {
        alert("No se pudo modificar los datos del usuario: (\n" + error)
      })
    }

  /*
  Esta funcion toma los valores asignados de la colección de ejercicios, y los modifica, excepto el valor ID.
  En caso de hacerlo bien, se muestra el primer mensaje, en caso contrario, muestra el segundo mensaje
  */



}