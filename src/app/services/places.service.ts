import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection } from '@angular/fire/firestore';
import { Place } from '../interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  	constructor(
		private fireStore: Firestore
	) { }
	
	// * Agregar lugares
	addPlace(place: Place) {
		const placeRef = collection(this.fireStore, 'places');
		return addDoc(placeRef, place);
	}
}
