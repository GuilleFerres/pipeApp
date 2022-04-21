import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string[] = ['Susana', 'Guille'];
  genero: string[] = ['femenino', 'masculino'];

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

   //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '1' : ' tenemos un cliente esperando',
    '2' : 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(cliente: number){
    if(this.genero[cliente] === 'femenino'){
      this.nombre[cliente] = 'Rodrigo';
      this.genero[cliente] = 'masculino';
    }else{
      this.nombre[cliente] = 'Olivia';
      this.genero[cliente] = 'femenino';
    }
    

    
  }
  borrarCliente(){
    this.clientes.pop();
  }

}
