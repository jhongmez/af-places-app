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
	public imageSrc!: string;
	public imageSelected!: string;

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

	showPreview(event: any) {
		if(event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (e: any) => this.imageSrc = e.target.result;
			reader.readAsDataURL(event.target.files[0]);
			this.imageSelected = event.target.files[0];
		}
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
