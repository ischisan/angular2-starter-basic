import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';




const appRoutes = [
	{ path: '', component: HomeComponent },
	{
		path: 'about',
		loadChildren: 'app/about/about.module#AboutModule'
	},
	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: NotFoundComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);