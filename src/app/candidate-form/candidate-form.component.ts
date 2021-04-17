import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent {

  technologies = {
    Angular: ['1.1.1', '1.2.1', '1.3.3'],
    React: ['2.1.2', '3.2.4', '4.3.1'],
    Vue: ['3.3.1', '5.2.1', '5.1.3']
  }

  hasSubmitted = false;

  selectedFramework!: string;
 
  candidateForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    jsTechnology: new FormControl(),
    technologyVersion: new FormControl(),
    email: new FormControl(),
    hobby: new FormGroup({
      nameOfHobby: new FormControl(),
      hobbyExpirience: new FormControl()
    })
  });

  onSubmit(){
    this.hasSubmitted = true;
    console.log(this.candidateForm.value);
  }

  onChange(framework: string) {
    this.selectedFramework = framework;
    console.log(this.selectedFramework);
  }
}




