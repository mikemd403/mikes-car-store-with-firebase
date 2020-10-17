import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message-class';
import { MessageService } from '../service/message-service.service';
import { MessageDbService } from '../firestore/message-db.service';

@Component({
  selector: 'app-message-collection',
  templateUrl: './message-collection.component.html',
  styleUrls: ['./message-collection.component.css']
})
export class MessageCollectionComponent implements OnInit {
  messageCollection: Message[];
  constructor(private messageService: MessageService, private store: MessageDbService) {
    //this.messageCollection = this.messageService.getAllMessages();  
  }

  ngOnInit(): void {
    this.store.getMessages().subscribe(data=>{
      this.messageCollection = data.map(e=>{
        return {
          ...(e.payload.doc.data() as object)
        } as Message;
      })
    })
  }

}
