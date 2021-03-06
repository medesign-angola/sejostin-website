import { Component, OnInit} from '@angular/core';
import { AboutContentService } from '../shared/service/about-content.service';

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

  mainTitle: string = '';
  subTitle: string = '';
  firstParagraph: string = '';
  secondParagraph: string = '';
  missionContent: string = '';
  visionContent: string = '';
  valuesContent: string = '';


  constructor(private aboutContentService: AboutContentService) {
    this.vision;
    this.values;

    this.mainTitle = this.aboutContentService.mainTitle;
    this.subTitle = this.aboutContentService.subTitle;
    this.firstParagraph = this.aboutContentService.firstParagraph;
    this.secondParagraph = this.aboutContentService.secondParagraph;
    this.missionContent = this.aboutContentService.mission;
    this.visionContent = this.aboutContentService.vision;
    this.valuesContent = this.aboutContentService.values;

  }

  makeValueFirst(){
    if(this.vision){
      this.vision = !this.vision;
      this.values = !this.values;

      // Depois de 10 segundos, vai voltar na visão

      let timeOut = setTimeout(() => {

        this.makeVisionFirst();

        clearTimeout(timeOut);

      }, 5000);

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

  setIntervalForSliding(){
    let intervalForSliding = setInterval(() => {

      // this.makeValueFirst
      this.vision = !this.vision;
      this.values = !this.values;

    }, 5000);
  }

  ngOnInit(): void {
    this.setIntervalForSliding();
  }

}
