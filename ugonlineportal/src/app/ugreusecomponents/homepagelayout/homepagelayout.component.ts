import { Component } from '@angular/core';
import { UgOPHeaderComponent } from '../ug-opheader/ug-opheader.component';
import { UgopfooterComponent } from '../ugopfooter/ugopfooter.component';
import { UghomenavComponent } from '../ughomenav/ughomenav.component';
@Component({
  selector: 'app-homepagelayout',
  imports: [UgOPHeaderComponent,UgopfooterComponent,UghomenavComponent],
  templateUrl: './homepagelayout.component.html',
  styleUrl: './homepagelayout.component.css'
})
export class HomepagelayoutComponent {

}
