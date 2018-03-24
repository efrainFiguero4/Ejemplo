import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { menus } from './sidebar';
@Component({
	moduleId: module.id,
	selector: 'sidebar-app',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
	title = 'sidebar';

	constructor(private router: Router) {

	}
	get menu() {
		return menus;
	}
}
