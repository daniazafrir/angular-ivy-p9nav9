import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators   } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  userForm: any;

  constructor(private formBuilder: FormBuilder) {

    
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }

  saveUser() {
    
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }

  get name() { return this.userForm.get('name'); }

get email() { return this.userForm.get('email'); }
get phone() { return this.userForm.get('phone'); }


}
