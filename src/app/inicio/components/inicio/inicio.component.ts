import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'inicio-app',
	templateUrl: './inicio.component.html',
	//styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
	title = 'inicio';
}
