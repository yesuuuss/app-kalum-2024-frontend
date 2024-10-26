import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from 'src/app/modules/usuario/components/form-login.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.css']
})
export class SidenavComponent {

  mobileQuery: MediaQueryList;

  menuNav = [
    {name:'Home', route: 'home', icon:'home'},
    {name:'Carreras', route: 'carreras', icon:'category'},
    {name:'Examenes', route: 'home', icon:'calendar_today'}
  ];

  constructor(media: MediaMatcher, public dialog: MatDialog, public authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); 
  }

  login(): void {
    this.dialog.open(FormLoginComponent, {width: '450px'});
  }

  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire({
      title: 'Logout', text: `${username}, has cerrado sesión con éxito`,
      icon: 'success'
    });
  }

}
