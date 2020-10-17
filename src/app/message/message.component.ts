import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroupDirective, Validators} from '@angular/forms';
import { MessageService } from './service/message-service.service';
import { Message } from './model/message-class';
import { MessageDbService } from './firestore/message-db.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Output() fireSave: EventEmitter<Message> = new EventEmitter;
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

  constructor(private builder: FormBuilder, private messageService: MessageService,
            private store: MessageDbService) { }

  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective): void {
    const message = new Message(
      null,
      this.messageService.getId(),
      this.messageForm.value.firstName,
      this.messageForm.value.lastName,
      this.messageForm.value.phoneNumber,
      this.messageForm.value.email,
      this.messageForm.value.message
    );
    this.store.createMessage(message)
      .then(
        docRef => {
          message.id = docRef.id;
        }
      )
      .catch();
    this.fireSave.emit(message);
    this.messageService.addMessage(message);
    formDirective.resetForm();
    this.messageForm.reset();

  }

}
