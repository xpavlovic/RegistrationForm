import { Component } from '@angular/core';
import { VaccineApplicant } from './vaccine-applicant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vaccines = ['BioNTech, Pfizer', 'Johnson & Johnson', 'Moderna', 'Sputnik V'];
  /*
  vaccineApplicantModel = new VaccineApplicant(
    'Janko',
    'Hrasko',
    '071143/5850',
    'jhrasko@gmail.com',
    0955608540,
    'b'
  );
  */
}
