import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios';
import { DatosService } from 'src/app/shared/services/datos.service';
import { Input } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-calculadora-cal',
  templateUrl: './calculadora-cal.component.html',
  styleUrls: ['./calculadora-cal.component.css']
})

export class CalculadoraCALComponent {

  @Input()imc:number=0;

  constructor (public servicioDatos: DatosService, private servicioAuth: AuthService) {}

  //Aca lo declaramos falso como default para que por las dudas no muestre nada
  loggedIn = false;

  //Defino la visibilidad del pop up
  datosDialog: boolean = false

  database = '';

  editar = false;

  idEditar = '';

  submitted: any;

  datosColeccion: Usuario[] = [];

  datosSeleccionado!: Usuario;

  loading = false;

  ngOnInit() {
    //Aca lo que hacemos es que al iniciar el componente se subscriba al observable que nos dice si el usuario esta logeado o no
    this.servicioAuth.isLoggedIn().subscribe(isLoggedIn => {
      //Aca recibimos el valor en el parametro 'isLoggedIn' y comparamos si es verdadero o falso que esta logeado
      if (isLoggedIn){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    })
    
    this.servicioDatos.obtenerDatos().subscribe(datos => {
      this.datosColeccion = datos;
    })
  }

  datoss: Usuario = {
    edad: 0,
    altura: 0,
    peso: 0,
    imc: 0,
    sexo:''
  }

  //Esta función se encarga de abrir el pop up
  openNew() {
    this.submitted = false;
    this.datosDialog = true;
  }

  //Esta función se encarga de cerrar el pop up
  hideDialog() {
    this.datosDialog = false;
    this.datoss.altura = 0;
    this.datoss.peso = 0;
    this.datoss.sexo ='';
    this.datoss.edad = 0;
  }

  //Esta función se encarga de guardar los nuevos datos para que luego se puedan modificar
  guardarDatos(){
    this.submitted = true;
    if(!this.editar && this.datoss.altura & this.datoss.edad && this.datoss.peso && this.datoss.sexo) {
      this.loading = true;
      const resultado =  this.servicioDatos.agregarDatos(this.datoss).then((resp)=>{
        this.loading = false;
        alert ("Se cargaron los datos de manera correcta")
      })
      .catch ((error) => {
        this.loading = false;
        alert("No se pudieron cargar los datos correctamente")
      })
    }
    else {
      if(this.datoss.altura & this.datoss.edad && this.datoss.peso && this.datoss.sexo) {        
        this.loading = true;
        this.datoss.uid = this.idEditar;
        this.servicioDatos.modificarDatos(this.idEditar, this.datoss).then((resul) => {
          this.loading = false;
          this.editar = false;
          this.datosDialog = false;   
        })
      }
    }
  }

  //Editar datos -> se llama al boton para el pop up
  editarDatos(datosSeleccionado: Usuario) {
    this.datosSeleccionado = datosSeleccionado;
    if (confirm ("¿Desea modificar sus datos?") === true) {
      this.editar = true;
      this.idEditar = datosSeleccionado.uid;
      this.openNew();
    } else {
      alert("No se pudieron modificar los datos");
    }
  }

  editDatos() {
    let datos: Usuario = {
      uid: this.datoss.uid,
      edad: this.datoss.edad,
      altura: this.datoss.altura,
      peso: this.datoss.peso,
      sexo: this.datoss.sexo,
      imc: this.datoss.imc,
      nombre: this.datoss.nombre,
      apellido: this.datoss.apellido,
      email: this.datoss.email,
      rol: this.datoss.rol,
      token: this.datoss.token,
      contrasena: this.datoss.contrasena
    }

    this.servicioDatos.modificarDatos(this.datosSeleccionado.uid, datos)
    .then(datos => {
      alert ("Los datos fueron modificados con exito")
    })
    .catch (error => {
      alert ("No se pudieron modificar los datos"+error)
    })
    
  /*
  Esta funcion toma los valores asignados de la colección de usuarios, y los modifica, excepto el valor ID.
  En caso de hacerlo bien, se muestra el primer mensaje, en caso contrario, muestra el segundo mensaje
  */
  }

  mostrarBorrar(datosSeleccionado: Usuario) {
    this.datosSeleccionado = datosSeleccionado;
    if(confirm("Desea eliminar los datos subidos") === true) {
      this.borrarDatos()
    } else {
      alert ("No se pudieron borrar los datos")
    }
  }

  borrarDatos() {
    this.servicioDatos.eliminarDatos(this.datosSeleccionado.uid)
    .then(respuesta => {
      alert("Los datos se borraron de forma correcta")
    })
    .catch (error => {
      alert("No se pudo borrar los datos"+ error)
    })
  }


  async calcular() {
    try {
        const result = this.servicioDatos.guardarIMC(this.datoss.uid, this.datoss.edad, this.datoss.sexo, this.datoss.altura, this.datoss.peso, this.datoss.imc);
        console.log(result)
      
    } catch (error) {
        console.error('Error al guardar el IMC:', error);
    }

    //Esta función se encarga de calcular tu indice de masa corporal para que el usuario sepa su rango
}

}
