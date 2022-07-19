import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AppRoutingModule } from './app-routing.module';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { BannerMobileComponent } from './banner-mobile/banner-mobile.component';
import { AboutMobileComponent } from './about-mobile/about-mobile.component';
import { OurServicesMobileComponent } from './our-services-mobile/our-services-mobile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerSectionComponent,
    SecondSectionComponent,
    AboutUsComponent,
    OurServicesComponent,
    CeoMessageComponent,
    BannerMobileComponent,
    AboutMobileComponent,
    OurServicesMobileComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
