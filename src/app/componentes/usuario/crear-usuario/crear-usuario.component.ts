import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CrearUsuarioComponent {
  constructor(private usuarioService:UserService){}
  usuario = {
    codigo: '',
    nombre: '',
    apellido: '',
    edad: null
  };

  onSubmit() {
    this.usuarioService.add_usuarios(this.usuario).subscribe(() => {
      this.usuario = {
        codigo: '',
        nombre: '',
        apellido: '',
        edad: null
      };
    })
  }
}
