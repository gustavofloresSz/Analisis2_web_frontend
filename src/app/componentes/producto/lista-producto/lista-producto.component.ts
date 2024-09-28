import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {
  data:producto[]= [];

  //impora el servicio del archivo servise.js
  constructor(private producoService:UserService){}
  ngOnInit(): void {
    this.producoService.get_productos().subscribe(producto => {
      this.data=producto
      console.log(producto)
    })
  }
}
