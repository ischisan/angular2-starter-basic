import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutUserComponent} from './about-user.component';
import { UserService} from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section.component';

@NgModule({
	imports: [
		CommonModule,
		aboutRouting
	],
	declarations: [
		AboutComponent,
		AboutUserComponent,
		AboutSectionComponent
	],
	providers: [
		UserService
	]
})
export class AboutModule {}

