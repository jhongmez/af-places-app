import { OnInit, Component } from '@angular/core';
import { Place } from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places.service';

@Component({
	selector: 'app-list-place',
	templateUrl: './list-place.component.html',
	styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit {
	
	public places!: Place[];

	constructor(
		private _placeSvc: PlacesService
	) {}

	ngOnInit(): void {
		this.getPlaces();
	}

	getPlaces() {
		this._placeSvc.getPlace().subscribe(place => {
			this.places = place
		})
	}

	async onClickDelete(place: Place) {
		const response = await this._placeSvc.deletePlace(place);
		console.log(response);
	 }
}
