import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messageForm = this.builder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['',[Validators.pattern('[1-9]{1}\\d{2}[1-9]{1}\\d{6}')]],
    email: ['',[Validators.email]],
    message: ['',[Validators.required]]
  });

  get firstName(): AbstractControl {return this.messageForm.get('firstName')}
  get lastName(): AbstractControl {return this.messageForm.get('lastName')}
  get message(): AbstractControl {return this.messageForm.get('message')}
  get phoneNumber(): AbstractControl {return this.messageForm.get('phoneNumber')}
  get email(): AbstractControl {return this.messageForm.get('email')}
  
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
