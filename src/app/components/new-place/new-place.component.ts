import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';

@Component({
	selector: 'app-new-place',
	templateUrl: './new-place.component.html',
	styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {

	public formPlace!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private _placeSvc: PlacesService
	) {}
	
	// * Construccion del formulario
	builderForm() {
		this.formPlace = this.formBuilder.group({
			name: 			[null, [Validators.required]],
			latitude: 		[null, [Validators.required]],
			longitude: 		[null, [Validators.required]],
			description: 	[null, [Validators.required]],
			image: 			[null, [Validators.required]],
		})
	}

	ngOnInit(): void {
		this.builderForm();
	}
	
	// * Envío del formulario
	async sendFormPlace() {
		if(this.formPlace.invalid) {
			this.formPlace.markAllAsTouched();
		} else {
			console.log(this.formPlace.value);
			const response = await this._placeSvc.addPlace(this.formPlace.value);
			console.log(response);
		}
	}

}
