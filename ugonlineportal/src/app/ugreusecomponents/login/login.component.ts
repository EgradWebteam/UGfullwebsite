import { Component } from '@angular/core';
import { UgOPHeaderComponent } from '../ug-opheader/ug-opheader.component';
import { UgopfooterComponent } from '../ugopfooter/ugopfooter.component';
@Component({
  selector: 'app-login',
  imports: [UgOPHeaderComponent,UgopfooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
