import { Injectable } from '@angular/core';
import { Message } from '../model/message-class';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = [
    new Message(null, 0, 'John', 'Snow', '6138551887','jsnow@uottawa.ca','I want to buy a new car')
  ];

  private id = 1;

  constructor() { }

  public getId(): number {
    return this.id;
  }

  public getAllMessages(): Message[] {
    return this.messages;
  }

  public addMessage(msg: Message): void {
    this.messages.push(msg);
    this.id++;
  }
}
