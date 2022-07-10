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
  secondBlockButton: string = '&#9679;';

  constructor() {
    this.firstBlock;
    this.secondBlock;
  }

  makeSecondBlockFirst(){
    if(this.firstBlock){
      this.firstBlock = !this.firstBlock;
      this.secondBlock = !this.secondBlock;

    }else{

    }
  }

  makeFirstBlockFirst(){

    if(this.secondBlock){
      this.firstBlock = !this.firstBlock;
      this.secondBlock = !this.secondBlock;


    }else{
      
    }

  }

  next(){}
  prev(){}

  ngOnInit(): void {
    
  }

}
