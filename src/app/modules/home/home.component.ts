import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responsiveOptions: any[] | undefined;
  
  images = [
    {

        imageSrc: "../../../assets/messi.jpeg",
        thumbnailSrc: "../../../assets/messi.jpeg",
        alt: "Imagen 1",
        title: "MEssi"
    },
    {
      imageSrc: "../../../assets/sulek.jpg",
        thumbnailSrc: "../../../assets/sulek.jpg",
        alt: "Imagen 2",
        title: "Sam Sulek"

    },
    {
    imageSrc: "../../../assets/diego2.jpg",
        thumbnailSrc: "../../../assets/diego2.jpg",
        alt: "Imagen 3",
        title: "Imagen 3"
    },
    {
      imageSrc: "../../../assets/maradona.jpg",
          thumbnailSrc: "../../../assets/maradona.jpg",
          alt: "Imagen 4",
          title: "Imagen 4"
      },
      {
        imageSrc: "../../../assets/momingo.jpg",
            thumbnailSrc: "../../../assets/momingo.jpg",
            alt: "Imagen 5",
            title: "Imagen 5"
        },
  ]
}
