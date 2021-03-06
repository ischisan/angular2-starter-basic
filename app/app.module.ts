import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  	appRouting
  ],
  declarations: [ 
  	AppComponent , 
  	HomeComponent, 
  	ContactComponent, 
    NotFoundComponent,
 	],
  bootstrap: [ AppComponent ],
  providers: [
  ]
})
export class AppModule {}