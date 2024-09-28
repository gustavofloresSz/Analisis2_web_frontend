import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CrearProductoComponent {
  constructor(private productoService:UserService){}
  producto = {
    nombre: '',
    precio: null,
    stock: null
  };

  onSubmit() {
    this.productoService.add_productos(this.producto).subscribe(() => {
      this.producto = {
        nombre: '',
        precio: null,
        stock: null
      };
    })
  }
}
