import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { BibliotecaComponent } from './screens/biblioteca/biblioteca.component';
import { authGuard, authGuard2 } from './guard/auth.guard';
import { AgregarComponent } from './screens/agregar/agregar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './screens/error/error.component';
import { InicioComponent } from './screens/inicio/inicio.component';

export const routes: Routes = [
  { path: 'catalogo', component: BibliotecaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'new', component: AgregarComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent}
];
