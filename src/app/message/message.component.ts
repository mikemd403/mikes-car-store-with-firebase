import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MessageService } from './service/message-service.service';
import { Message } from './model/message-class';


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

  constructor(private builder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const message = new Message(
      this.messageService.getId(),
      this.messageForm.value.firstName,
      this.messageForm.value.lastName,
      this.messageForm.value.phoneNumber,
      this.messageForm.value.email,
      this.messageForm.value.message
    );
    this.messageService.addMessage(message);
    this.messageForm.reset();

  }

}
