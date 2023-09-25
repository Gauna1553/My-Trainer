import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {

        imageSrc: "../../../assets/hqdefault.jpg",
        thumbnailSrc: "../../../assets/hqdefault.jpg",
        alt: "Imagen 1",
        title: "Gordo ruso"
    },
    {
      imageSrc: "../../../assets/logo.png",
        thumbnailSrc: "../../../assets/logo.png",
        alt: "Imagen 2",
        title: "Imagen 2"

    },
    {
    imageSrc: "../../../assets/sobrecarga.jpg",
        thumbnailSrc: "../../../assets/sobrecarga.jpg",
        alt: "Imagen 3",
        title: "Imagen 3"
    },
    {
      imageSrc: "../../../assets/intensidad.jpg",
          thumbnailSrc: "../../../assets/intensidad.jpg",
          alt: "Imagen 4",
          title: "Imagen 4"
      },
      {
        imageSrc: "../../../assets/volumen.jpg",
            thumbnailSrc: "../../../assets/volumen.jpg",
            alt: "Imagen 5",
            title: "Imagen 5"
        },
  ]
}
