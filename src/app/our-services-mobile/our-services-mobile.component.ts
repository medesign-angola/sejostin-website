import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../shared/service/our-services.service';

@Component({
  selector: 'app-our-services-mobile',
  templateUrl: './our-services-mobile.component.html',
  styleUrls: ['./our-services-mobile.component.css']
})
export class OurServicesMobileComponent implements OnInit {

  mainTitle: string = '';
  contentParagraph: string = '';
  servicesObject: any = {};

  constructor(private ourServices: OurServicesService) {
    this.mainTitle = this.ourServices.mainTitle;
    this.contentParagraph = this.ourServices.contentParagraph;
    this.servicesObject = this.ourServices.servicesObject;
  }

  ngOnInit(): void {
  }

}
