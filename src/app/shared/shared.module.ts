import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
