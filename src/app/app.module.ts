import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from './inicio/main.component';
import { SidebarComponent } from './inicio/components/sidebar/sidebar.component';
import { InicioComponent } from './inicio/components/inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MensajeModule } from './inicio/components/mensaje/mensaje.module';
import { MensajeService } from './inicio/components/mensaje/mensaje.service';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './inicio/buy/buy.component';
import { DashboardComponent } from './inicio/dashboard/dashboard.component';
import { SettingComponent } from './inicio/setting/setting.component';

@NgModule({
	declarations: [
		AppComponent, InicioComponent, LoginComponent, SidebarComponent, BuyComponent, DashboardComponent, SettingComponent, MainComponent
	],
	imports: [
		BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule,
		AppRoutingModule, BrowserAnimationsModule, MensajeModule
	],
	providers: [MensajeService],
	bootstrap: [AppComponent]
})

export class AppModule { }
