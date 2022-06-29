import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AppRoutingModule } from './app-routing.module';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSectionComponent,
    SecondSectionComponent,
    AboutUsComponent,
    OurServicesComponent,
    CeoMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
