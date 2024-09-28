import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})

export class ListaUsuarioComponent implements OnInit {
  data:any= [];

  //impora el servicio del archivo servise.js
  constructor(private usuarioService:UserService){}
  ngOnInit(): void {
    this.usuarioService.get_usuarios().subscribe(usuarios => {
      this.data=usuarios
      console.log(usuarios)
    })
  }
}
