import { Component, OnInit } from '@angular/core';
import { login } from './login';
declare var $: any;

@Component({
	selector: 'login-app',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	constructor() { }

	error_mensaje: string = "";
	loading: boolean = false;
	user: any;

	ngOnInit() {
		this.user = {};
		this.loading = false;
	}

	ngAfterViewInit() {
		function test() {
			$('head').append('<style type="text/css">body{overflow:hidden !important}</style>');
		}
		test()
	}

	userLogin(value: any) {

	}

	get login() {
		return login;
	}

}
