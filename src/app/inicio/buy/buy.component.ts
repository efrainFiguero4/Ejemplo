import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../components/mensaje/mensaje.service';
import { BuyService } from './buy.service';

declare var $: any;

@Component({
	selector: 'app-buy',
	templateUrl: './buy.component.html',
	styleUrls: ['./buy.component.css'],
	providers: [BuyService]
})

export class BuyComponent implements OnInit {

	constructor(private _buy: BuyService, private _sms: MensajeService) { }

	ngOnInit() { }

	changeZoom(value: number) {
		console.log(value)
	}

}
