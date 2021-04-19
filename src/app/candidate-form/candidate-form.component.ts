import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})

export class CandidateFormComponent {

  technologies: any = {
    Angular: ['1.1.1', '1.2.1', '1.3.3'],
    React: ['2.1.2', '3.2.4', '4.3.1'],
    Vue: ['3.3.1', '5.2.1', '5.1.3']
  }

  hasSubmitted = false;
  isSelected = true;

  selectedFramework!: string;
  

  candidateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(),
    dateOfBirth: new FormControl('', Validators.required),
    jsTechnology: new FormControl('', Validators.required),
    technologyVersion: new FormControl(),
    email: new FormControl(),
    nameOfHobby: new FormControl(),
    hobbyExpirience: new FormControl()
  });

  onSubmit(){
    this.hasSubmitted = true;
    console.log(this.candidateForm.value);
  }

  onFrameworkChange(event: any) {
    this.selectedFramework = event.target.value;
  }

  get _firstName() {
    return this.candidateForm.get('firstName');
  }

  get _lastName() {
    return this.candidateForm.get('lastName');
  }

  get _dateOfBirth() {
    return this.candidateForm.get('dateOfBirth');
  }

  get _jsTechnology() {
    return this.candidateForm.get('jsTechnology');
  }

  get _technologyVersion() {
    return this.candidateForm.get('technologyVersion');
  }
}


