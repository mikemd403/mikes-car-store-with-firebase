import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message-class';
import { MessageService } from '../service/message-service.service';

@Component({
  selector: 'app-message-collection',
  templateUrl: './message-collection.component.html',
  styleUrls: ['./message-collection.component.css']
})
export class MessageCollectionComponent implements OnInit {
  messageCollection: Message[];
  constructor(private messageService: MessageService) {
    this.messageCollection = this.messageService.getAllMessages();  
  }

  ngOnInit(): void {
  }

}
