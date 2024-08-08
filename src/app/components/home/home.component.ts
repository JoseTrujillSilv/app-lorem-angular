import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  result:string = '';



  
  get_datos(){
    return this.datosService.get_lorem();
  }

  constructor(private datosService:DatosService) { }


}
