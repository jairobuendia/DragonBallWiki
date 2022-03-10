import { Injectable } from '@angular/core';
import {
  collection, collectionData, Firestore, addDoc, deleteDoc, doc, setDoc, docData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private firestore: Firestore) { }

  async addCharacter(character: Character) {
    try {
      const docRef = await addDoc(collection(this.firestore, "characters"), character);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  getCharacters(): Observable<Character[]> {
    return collectionData(collection(this.firestore, 'characters'), { idField: 'id' }) as Observable<Character[]>;
  }

  async deleteCharacter(id: string) {
    await deleteDoc(doc(this.firestore, `characters/${id}`));
  }

  async updateCharacter(character: Character) {
    await setDoc(doc(this.firestore, `characters/${character.id}`), character);
  }

  getCharacter(id: string): Observable<Character> {
    return docData(doc(this.firestore, `characters/${id}`), { idField: 'id' }) as Observable<Character>;
  }
}
