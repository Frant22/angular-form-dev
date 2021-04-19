import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})

export class CandidateFormComponent implements OnInit {
  technologies: any = {
    Angular: ['1.1.1', '1.2.1', '1.3.3'],
    React: ['2.1.2', '3.2.4', '4.3.1'],
    Vue: ['3.3.1', '5.2.1', '5.1.3']
  };

  constructor(private httpClient: HttpClient){}

  emails: Array<string> = [];
  HttpClient: string | undefined;

  ngOnInit(){
    this.httpClient.get('assets/email.json').subscribe((email: any) =>{
      this.emails = email;
    })
  }

  candidateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    jsTechnology: new FormControl('', Validators.required),
    technologyVersion: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required, [this.emailAsyncValidator.bind(this)]),
    hobby: new FormGroup({
      name: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required)
    })
  });

  selectedFramework: string | undefined;

  onSubmit(): void {
    this.hasSubmitted = true;
    console.log(this.candidateForm.value);
    }

  onFrameworkChange(event: any): void {
    this.selectedFramework = event.target.value;
  }

  checkIfEmailExist(email: string): Observable<boolean> {
    return of(this.emails.includes(email)).pipe(delay(2000));
  }

  emailAsyncValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return this.checkIfEmailExist(control.value).pipe(
        map(res => {
          return res ? { emailExists: true } : null;
        })
      );
    }


  get firstName(): any {
    return this.candidateForm.controls.firstName;
  }

  get lastName(): any {
    return this.candidateForm.controls.lastName;
  }

  get dateOfBirth(): any {
    return this.candidateForm.controls.dateOfBirth;
  }

  get jsTechnology(): any {
    return this.candidateForm.controls.jsTechnology;
  }

  get technologyVersion(): any {
    return this.candidateForm.controls.technologyVersion;
  }

  get email(): any {
    return this.candidateForm.controls.email;
  }

  get name(): any {
    return this.candidateForm.get('hobby.name');
  }

  get duration(): any {
    return this.candidateForm.get('hobby.duration');
  }

  hasSubmitted = false;
}

