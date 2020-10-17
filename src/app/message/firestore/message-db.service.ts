import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../model/message-class';

@Injectable({
  providedIn: 'root'
})
export class MessageDbService {

  constructor(private firestore: AngularFirestore) { }

  getMessages(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('messages').snapshotChanges();
  }

  createMessage(message: Message): Promise<DocumentReference> {
    delete message.id;
    return this.firestore.collection('messages').add({...message});
  }

  deleteMessage(messageId: string): Promise<void> {
    return this.firestore.collection('messages').doc(messageId).delete();
  }
}
