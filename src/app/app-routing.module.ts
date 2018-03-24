import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './inicio/usuario/usuario.component';
import { DetalleComponent } from './inicio/detalle/detalle.component';

const routes: Routes = [
	{ path: '', redirectTo: 'usuario', pathMatch: 'full' },
	{
		path: 'usuario', component: UsuarioComponent,
		children: [
			{ path: 'detalle/:id', component: DetalleComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule { }
