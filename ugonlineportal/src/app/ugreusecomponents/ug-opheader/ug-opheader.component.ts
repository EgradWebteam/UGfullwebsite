import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // import RouterModule

@Component({
  selector: 'app-ug-opheader',
  standalone: true,
  templateUrl: './ug-opheader.component.html',
  styleUrls: ['./ug-opheader.component.css'],
  imports: [RouterModule] // ✅ add RouterModule here
})
export class UgOPHeaderComponent {}
