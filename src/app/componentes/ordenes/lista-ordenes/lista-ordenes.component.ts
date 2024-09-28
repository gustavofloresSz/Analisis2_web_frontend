import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-lista-ordenes',
  standalone: true,
  imports: [],
  templateUrl: './lista-ordenes.component.html',
  styleUrl: './lista-ordenes.component.css'
})
export class ListaOrdenesComponent implements OnInit {
  data:any= [];

  //impora el servicio del archivo servise.js
  constructor(private ordenesService:UserService){}
  ngOnInit(): void {
    this.ordenesService.get_ordenes().subscribe(ordenes => {
      this.data = ordenes
      console.log(ordenes)
    })
  }
}
