import {Component, OnInit} from '@angular/core';
import {AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  binding: string = 'default';
  genders: Array<string> = ['Male', 'Female']
  signupForm: FormGroup;
  forbiddenNamesList: Array<string> = ['Mo', 'Re']

  constructor() {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        first_name: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        last_name: new FormControl(null, [Validators.required], this.forbiddenLastNames as AsyncValidatorFn),
      }),
      gender: new FormControl('Male', [Validators.required]),
      hobbies: new FormArray([])
    })
    this.signupForm.valueChanges.subscribe((value => {
      console.log(value)
    }))
    this.signupForm.statusChanges.subscribe((status => {
      console.log(status)
    }))
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onSubmit() {
    console.log(this.signupForm.get('first_name'))
    console.log(this.signupForm)
  }

  forbiddenNames(control: FormControl): { [p: string]: boolean } | null {
    if (this.forbiddenNamesList.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  fill() {
    this.signupForm.setValue({
      userData: {
        first_name: 'Ebrahim', last_name: 'Ahmed'
      }, gender: 'Male',
      hobbies: []
    })
  }

  patch() {
    this.signupForm.patchValue({
      userData: {
        last_name: 'Soliman'
      }
    })
  }

  reset() {
    this.signupForm.reset()
  }

  forbiddenLastNames(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '') {
          resolve(null)
        } else if (control.value === 'SSS') {
          resolve({'lastNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    });
  }
}
