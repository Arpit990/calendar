import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Contact, ContactForm } from '../interfaces/Contact';

const PATH = 'leaves';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);

  // get data from collection
  getCollectionDoc(collectionName: string) {
    return collectionData(collection(this._firestore, collectionName), { idField: 'id' }); //as Observable<Contact[]>;
  }

  async getContact(id: string) {
    try {
      const snapshot = await getDoc(this.document(id));
      return snapshot.data() as Contact;
    } catch (error) {
      //catch error
      return undefined;
    }
  }

  async searchByQuery(name: string) {
    const q = query(this._collection, where('Document ID', '==', '4E9gczvob9R4cu2YYEe2KEprMVk2'));
    const querySnapshot = await getDocs(q);
    let contacts: Contact[] = [];
    querySnapshot.forEach((doc) => {
      contacts = [...contacts, { id: doc.id, ...doc.data() } as Contact];
    });
    return contacts;
  }

  createContact(contact: ContactForm) {
    return addDoc(this._collection, contact);
  }

  updateContact(id: string, contact: ContactForm) {
    return updateDoc(this.document(id), { ...contact });
  }

  deleteContact(id: string) {
    return deleteDoc(this.document(id));
  }

  private document(id: string) {
    return doc(this._firestore, `${PATH}/${id}`);
  }
}
