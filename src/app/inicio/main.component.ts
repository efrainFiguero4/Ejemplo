import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'main-app',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent {

	constructor(private router: Router) {	}
	
	dragSidebar() {
		$(".box-sidebar").toggleClass("Drag");
		$(".box-main").toggleClass("Drag");
	}

	closeInfoShow() {
		$(".box-info_contendor").removeClass("box-info_contendorShow");
		$(".box-detalles").removeClass("paddingRigth");
	}

}





