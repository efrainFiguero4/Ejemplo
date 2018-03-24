import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/components/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './inicio/buy/buy.component';
import { DashboardComponent } from './inicio/dashboard/dashboard.component';
import { SettingComponent } from './inicio/setting/setting.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'inicio', component: InicioComponent,
		children: [
			{ path: '', redirectTo: 'buy', pathMatch: 'full' },
			{ path: 'buy', component: BuyComponent },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'setting', component: SettingComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule { }
