import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-covid-test',
  templateUrl: './covid-test.component.html',
  styleUrls: ['./covid-test.component.css'],
})
export class CovidTestComponent {
  //name = new FormControl('');

  tests = ['PCR', 'Ag'];

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    idNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{6}[/]*[0-9]{4}$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+][421]*[-s./0-9 ]{12}$'),
    ]),
    test: new FormControl(''),
  });

  public getErrorMessage = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  };

  onSubmit() {
    console.log(this.myForm.value);
  }
}
