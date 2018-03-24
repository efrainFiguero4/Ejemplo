import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './inicio/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './inicio/detalle/detalle.component';
import { DetalleService } from './inicio/detalle/detalle.service';
import { UsuarioService } from './inicio/usuario/usuario.service';

@NgModule({
	declarations: [
		AppComponent, UsuarioComponent, DetalleComponent
	],
	imports: [
		BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
		AppRoutingModule, BrowserAnimationsModule
	],
	providers: [DetalleService, UsuarioService],
	bootstrap: [AppComponent]
})

export class AppModule { }
