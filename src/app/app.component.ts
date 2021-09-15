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

  //show form for covid test if user clicks the button
  showButtonForCovidForm: boolean = true;
  showCovidTestForm: boolean = false;

  vaccineApplicant = new VaccineApplicant('', '', '', '', '', '');

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.showForm = !this.showForm;
    this.displayData = !this.displayData;
    this.vaccineApplicant.name = form.value.name;
    this.vaccineApplicant.surname = form.value.surname;
    this.vaccineApplicant.idNumber = form.value.idNumber;
    this.vaccineApplicant.email = form.value.email;
    this.vaccineApplicant.phoneNumber = form.value.phoneNumber;
    this.vaccineApplicant.vaccine = form.value.vaccine;
  }

  registerForCovidTest() {
    this.showCovidTestForm = !this.showCovidTestForm;
    this.showForm = !this.showForm;
    this.showButtonForCovidForm = !this.showButtonForCovidForm;
  }
}
