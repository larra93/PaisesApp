import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[]   = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Country[] = [];
  constructor( private paisService: PaisService) { }

  getClasesCSS( region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion( region: string ){

    if ( region === this.regionActiva ){ return; }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
    .subscribe ( paises => this.paises = paises);
    
  }

  
  ngOnInit(): void {
  }

}
