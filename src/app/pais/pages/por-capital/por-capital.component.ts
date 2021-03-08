import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',

})
export class PorCapitalComponent  {

  termino: string = ''; 
  hayError: boolean = false;
  paises : Country[] = [];
  
  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
     this.paisService.buscarCapital( this.termino )
    .subscribe( resp =>{
      console.log(resp);
      this.paises = resp;
      
    }, (err) =>{
      this.hayError = true;
      console.log('error')
      this.paises = [];
    });
  }

 

}
