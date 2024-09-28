import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-ordenes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-ordenes.component.html',
  styleUrl: './crear-ordenes.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})

export class CrearOrdenesComponent {
  constructor(private ordenesService: UserService) {}

  clientes:any = [];
  productos:any= [];

  ordenes = {
    cantidad: null,
    fecha: null,
    id_cliente: null,
    id_producto: null
  };


  ngOnInit() {
    this.ordenesService.get_usuarios().subscribe((data: any) => {
      console.log(data)
      this.clientes = data;
    });

    this.ordenesService.get_productos().subscribe((data: any) => {
      this.productos = data;
    });
  }

  onSubmit() {
    this.ordenesService.add_ordenes(this.ordenes).subscribe(() => {
      this.ordenes = {
        cantidad: null,
        fecha: null,
        id_cliente: null,
        id_producto: null
      }
    });
  }
}
