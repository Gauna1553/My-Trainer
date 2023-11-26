import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ejercicio } from 'src/app/model/ejercicios';
import { Rutina } from 'src/app/model/rutinas';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { RutinasService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-crearrutinas',
  templateUrl: './crearrutinas.component.html',
  styleUrls: ['./crearrutinas.component.css']
})
export class CrearrutinasComponent {

  //Declaracion de las propiedades que usamos en este componente
  idEditar = '';
  rParaEditar!: Rutina;
  editar!: boolean;
  ejerSubmitted = false;
  submitted = false;
  ejerciciosDialog = false;
  selectedEjer: Ejercicio[] = [];
  ejerciciosColeccion: Ejercicio[] = [];
  loading = false;

  constructor(public servicioRutinas: RutinasService, public servicioEjercicios: EjerciciosService, private router: Router) {}

  ngOnInit() {
    //Esto obtiene la rutina para editar si es que la hay
    this.servicioRutinas.obtenerRutinaParaEditar().subscribe(rutinaRecibida =>{
      this.rParaEditar = rutinaRecibida;
      console.log(this.rParaEditar)
      if(this.rParaEditar != undefined){
        this.editar = true;
      }
    })

    this.servicioEjercicios.obtenerEjercicio().subscribe(ejercicios => {
      this.ejerciciosColeccion = ejercicios
    })
  }
  //Esto se fija si ya se seleccionaron ejercicios con cada cambio que haya en la pagina
  ngDoCheck(){
    if(this.selectedEjer.length > 0){
      this.ejerSubmitted = true
    }
  }

  rutina: Rutina = {
    idRutina: '',
    nombre: '',
    ejercicios: []
  }

  //Abre el dialog que muestra los ejercicios
  openNew() {
    this.ejerciciosDialog = true
  }
  // FUNCION QUE SE EJECUTA AL TOCAR EL BOTON DE CREAR RUTINA
  // ESTA HECHA PARA QUE SOLO SE EJECUTE CORRECTAMENTE AL COMPLETAR LOS CAMPOS
  agregarRutina() {
    this.submitted = true;
    if (this.rutina.nombre && this.selectedEjer.length > 0) {
      this.loading = true;
      this.ejerSubmitted = true;
      this.rutina.ejercicios = this.selectedEjer;
      const resultado = this.servicioRutinas.crearRutina(this.rutina).then((resp) => {
        this.loading = false;
        alert('Se creo la rutina con exito');
        this.router.navigate(['/rutinas']);
      }).catch((error) => {
        this.loading = false;
        alert('No se pudo crear la rutina');
        this.router.navigate(['/rutinas']);
      })
    }else{
      this.ejerSubmitted = false;
    }
  }

  //Esta funcion envia como parametros el id de la rutina y los datos nuevos solo cuando los campos esten completos, ademas avisara cuando esten vacios
  editarRutina(){
      this.idEditar = this.rParaEditar.idRutina;
      this.submitted = true;
      if(this.rutina.nombre && this.selectedEjer.length > 0){
        this.loading = true;
        this.ejerSubmitted = true;
        this.rutina.idRutina = this.idEditar;
        this.rutina.ejercicios = this.selectedEjer;
        this.servicioRutinas.modificarRutina(this.idEditar, this.rutina).then((resul)=>{
          this.loading = false;
          alert("Se actualizo correctamente");
          this.router.navigate(['/rutinas']);
        }).catch((error)=>{
          this.loading = false;
          alert("No se pudo actualizar");
          this.router.navigate(['/rutinas']);
        })
      }else{
        this.ejerSubmitted = false;
      }
  }

  //Te devuelve a la pagina de Rutinas
  volver(){
    this.router.navigate(['/rutinas'])
  }
  //Cierra el dialog que muestra los ejercicios
  cerrarDialog(){
    this.ejerciciosDialog = false
  }
}