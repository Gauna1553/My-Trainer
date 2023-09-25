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

        imageSrc: "../../../assets/autito1.jpg",
        thumbnailSrc: "../../../assets/autito1.jpg",
        alt: "Description for Image 1",
        title: "Title 1"
    },
    {
      imageSrc: "../../../assets/hondaek9.jpg",
        thumbnailSrc: "../../../assets/hondaek9.jpg",
        alt: "Description for Image 1",
        title: "Title 1"

    },
    {
    imageSrc: "../../../assets/audiquattro.jpg",
        thumbnailSrc: "../../../assets/audiquattro.jpg",
        alt: "Description for Image 1",
        title: "Title 1"
    },
    {
      imageSrc: "../../../assets/mustf.webp",
          thumbnailSrc: "../../../assets/mustf.webp",
          alt: "Description for Image 1",
          title: "Title 1"
      },
      {
        imageSrc: "../../../assets/ddsrt.jpg",
            thumbnailSrc: "../../../assets/ddsrt.jpg",
            alt: "Description for Image 1",
            title: "Title 1"
        },
  ]
}
