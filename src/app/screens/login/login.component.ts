import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(AuthService);

  email: any;
  password: any;
  token: any;
  rol:any
  rol2:any
  rol3:any
  ruta = inject(Router)


  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      this.rol = p.role
      
      
      if (this.token != '') {
        localStorage.setItem("token", 'true')
      }
      if(this.rol !=''){
        localStorage.setItem("rol",'estudiante')
        window.location.href = 'inicio'
      }else if(this.rol !=''){
        localStorage.setItem("rol2",'profesor')
        window.location.href = 'inicio'
      }else if(this.rol !=''){
        localStorage.setItem("rol3",'admin')
        window.location.href = 'inicio'
      }

    }
  ) 
  }
}
