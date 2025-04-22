import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UgOPHeaderComponent } from "./ugreusecomponents/ug-opheader/ug-opheader.component";
import { UgopfooterComponent } from './ugreusecomponents/ugopfooter/ugopfooter.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UgOPHeaderComponent,UgopfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ugonlineportal';
}
