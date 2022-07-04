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
  valuesButton: string = '&#9675;';

  constructor() {
    this.vision;
    this.values;
  }

  makeValueFirst(){
    if(this.vision){
      this.vision = !this.vision;
      this.values = !this.values;

      this.visionButton = '&#9675;';
      this.valuesButton = '&#9679;';

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

      this.visionButton = '&#9679;';
      this.valuesButton = '&#9675;';

    }else{
      
    }

  }

  ngOnInit(): void {
  }

}
