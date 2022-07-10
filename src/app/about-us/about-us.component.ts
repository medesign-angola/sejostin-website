import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './about-us.component.resp.css']
})
export class AboutUsComponent implements OnInit {

  vision: boolean = true;
  values: boolean = false;

  visionButton: string = '&#9679;';
  valuesButton: string = '&#9679;';

  constructor() {
    this.vision;
    this.values;
  }

  makeValueFirst(){
    if(this.vision){
      this.vision = !this.vision;
      this.values = !this.values;

      // Depois de 10 segundos, vai voltar na visão

      let timeOut = setTimeout(() => {

        this.makeVisionFirst();

        clearTimeout(timeOut);

      }, 10000);

    }else{

    }
  }

  makeVisionFirst(){

    if(this.values){
      this.vision = !this.vision;
      this.values = !this.values;

    }else{
      
    }

  }

  ngOnInit(): void {
  }

}
