import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepagelayoutComponent } from './ugreusecomponents/homepagelayout/homepagelayout.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomepagelayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ugonlineportal';
}
