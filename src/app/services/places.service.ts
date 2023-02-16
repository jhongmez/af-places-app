import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
	
	// * Obtenemos los lugares que vamos almacenando
	getPlace(): Observable<Place[]> {
		const placeRef = collection(this.fireStore, 'places');
		return collectionData(placeRef, { idField: 'id'}) as Observable<Place[]>;
	}

	deletePlace(place: Place) {
		const placeDocRef = doc(this.fireStore, `places/${place.id}`);
		return deleteDoc(placeDocRef);
	}
}
