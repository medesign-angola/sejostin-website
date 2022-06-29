import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  firstBlock: boolean = true;
  secondBlock: boolean = false;

  firstBlockButton: string = '&#9679;';
  secondBlockButton: string = '&#9675;';

  constructor() {
    this.firstBlock;
    this.secondBlock;
  }

  makeSecondBlockFirst(){
    if(this.firstBlock){
      this.firstBlock = !this.firstBlock;
      this.secondBlock = !this.secondBlock;

      this.firstBlockButton = '&#9675;';
      this.secondBlockButton = '&#9679;';

    }else{

    }
  }

  makeFirstBlockFirst(){

    if(this.secondBlock){
      this.firstBlock = !this.firstBlock;
      this.secondBlock = !this.secondBlock;

      this.firstBlockButton = '&#9679;';
      this.secondBlockButton = '&#9675;';

    }else{
      
    }

  }

  ngOnInit(): void {
    
  }

}
