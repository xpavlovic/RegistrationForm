import { Component } from '@angular/core';
import { VaccineApplicant } from './vaccine-applicant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vaccines = ['BioNTech, Pfizer', 'Johnson & Johnson', 'Moderna', 'Sputnik V'];
  //show form if user
  showForm: boolean = true;
  displayData: boolean = false;

  vaccineApplicant = new VaccineApplicant('', '', '', '', '', '');

  //TODO
  //add validation functions for email format and telephone number

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (
      form.value.name !== '' &&
      form.value.surname !== '' &&
      form.value.idNumber !== '' &&
      form.value.email !== '' &&
      form.value.phoneNumber !== ''
    ) {
      this.showForm = !this.showForm;
      this.displayData = !this.displayData;
      this.vaccineApplicant.name = form.value.name;
      this.vaccineApplicant.surname = form.value.surname;
      this.vaccineApplicant.idNumber = form.value.idNumber;
      this.vaccineApplicant.email = form.value.email;
      this.vaccineApplicant.phoneNumber = form.value.phoneNumber;
      this.vaccineApplicant.vaccine = form.value.vaccine;
    } else {
      alert('Nevyplnili ste povinne položky');
    }
  }
}
