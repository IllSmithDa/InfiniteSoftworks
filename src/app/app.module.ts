import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// good for adding routes to app
import { RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WebToLeadComponent } from './web-to-lead/web-to-lead.component';
import { WebToCaseComponent } from './web-to-case/web-to-case.component';
import { FormResultComponent } from './form-result/form-result.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'webToLead', component: WebToLeadComponent},
  {path: 'webToCase', component: WebToCaseComponent},
  {path: 'formResult', component: FormResultComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    WebToLeadComponent,
    WebToCaseComponent,
    FormResultComponent
  ],
  imports: [
    BrowserModule,
        // apply routes here
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
