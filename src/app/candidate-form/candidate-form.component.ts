import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent {

  technologies = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3']
  }

  submitted = false;
    
  candidateForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(),
    jsTechnology: new FormControl(),
    technologyVersion: new FormControl(),
    email: new FormControl(''),
    hobby: new FormGroup({
      nameOfHobby: new FormControl(),
      hobbyExpirience: new FormControl()
    })
  });

  onSubmit(){
    this.submitted = true;
    console.log(this.candidateForm.value);
  }
}




