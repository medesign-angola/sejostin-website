import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../shared/service/our-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  firstBlock: boolean = true;
  secondBlock: boolean = false;
  thirdBlock: boolean = false;

  firstBlockButton: string = '&#9679;';
  secondBlockButton: string = '&#9675;';
  thirdBlockButton: string = '&#9675;';

  
  mainTitle: string = '';
  contentParagraph: string = '';
  servicesObject: any = {};

  first_block_images: any = [];
  second_block_images: any = [];
  third_block_images: any = [];

  number_of_boxes: number = 0;

  constructor(private ourServices: OurServicesService) {
    this.firstBlock;
    this.secondBlock;

    this.mainTitle = this.ourServices.mainTitle;
    this.contentParagraph = this.ourServices.contentParagraph;
    this.servicesObject = this.ourServices.servicesObject;
  }

  makeSecondBlockFirst(){

      this.firstBlock = false;
      this.secondBlock = true;
      this.thirdBlock = false;

      this.firstBlockButton = '&#9675;';
      this.secondBlockButton = '&#9679;';
      this.thirdBlockButton = '&#9675;';

  }

  makeFirstBlockFirst(){

      this.firstBlock = true;
      this.secondBlock = false;
      this.thirdBlock = false;

      this.firstBlockButton = '&#9679;';
      this.secondBlockButton = '&#9675;';
      this.thirdBlockButton = '&#9675;';

  }

  makeThirdBlockFirst(){

      this.firstBlock = false;
      this.secondBlock = false;
      this.thirdBlock = true;

      this.firstBlockButton = '&#9675;';
      this.secondBlockButton = '&#9675;';
      this.thirdBlockButton = '&#9679;';

  }

  images_put(): void{

    this.first_block_images.push(this.ourServices.servicesObject[0]);
    this.first_block_images.push(this.ourServices.servicesObject[1]);

    
    this.second_block_images.push(this.ourServices.servicesObject[2]);
    this.second_block_images.push(this.ourServices.servicesObject[3]);

    
    this.third_block_images.push(this.ourServices.servicesObject[4]);

    // console.log(this.first_block_images);

  }

  // checkServices(){

  //   this.number_of_boxes = Math.floor((this.ourServices.servicesObject.length)/2);
  //   let rest = (this.ourServices.servicesObject.length%2)

    // console.log(this.number_of_boxes);
    // console.log(rest);

  //   this.number_of_boxes = this.number_of_boxes + rest;

    
  //   console.log(this.number_of_boxes);

  // }

  ngOnInit(): void {
    // this.checkServices();
    this.images_put();
  }

}
