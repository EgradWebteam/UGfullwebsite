import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UgOPHeaderComponent } from "./ug-opheader/ug-opheader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UgOPHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ugonlineportal';
}
