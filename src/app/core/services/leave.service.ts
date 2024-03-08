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

import { Leave, LeaveForm } from '../interface/Leave';

const PATH = 'leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  getLeaves() {
    return collectionData(this._collection, { idField: 'id' }) as Observable<
      Leave[]
    >;
  }

  async getLeave(id: string) {
    try {
      const snapshot = await getDoc(this.document(id));
      return snapshot.data() as Leave;
    } catch (error) {
      //catch error
      return undefined;
    }
  }

  async searchLeaveByQuery(name: string) {
    const q = query(
      this._collection,
      where('fullName', '>=', name),
      where('fullName', '<=', name + '\uf8ff'),
    );
    const querySnapshot = await getDocs(q);
    let Leaves: Leave[] = [];
    querySnapshot.forEach((doc) => {
      Leaves = [...Leaves, { id: doc.id, ...doc.data() } as Leave];
    });
    return Leaves;
  }

  createLeave(Leave: LeaveForm) {
    return addDoc(this._collection, Leave);
  }

  updateLeave(id: string, Leave: LeaveForm) {
    return updateDoc(this.document(id), { ...Leave });
  }

  deleteLeave(id: string) {
    return deleteDoc(this.document(id));
  }

  private document(id: string) {
    return doc(this._firestore, `${PATH}/${id}`);
  }
}
