import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BannerContentService } from '../shared/service/banner-content.service';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerSectionComponent implements OnInit {

  constructor(private contentService: BannerContentService){}

  title: string = this.contentService.getBannerTitle();
  subtitle: string = this.contentService.getBannerSubtitle();
  content: string = this.contentService.getBannerContent();

  numberOfImages: number = 5;
  imageObject: any = {};
  arrayOfImages: any[] = [];

  isExpanded: boolean = false;

  image1: string = `<img src="assets/banner-images/test/image1.jpg" alt="">`;
  image2: string = `<img src="assets/banner-images/test/image2.jpg" alt="">`;
  image3: string = `<img src="assets/banner-images/test/image3.jpg" alt="">`;
  image4: string = `<img src="assets/banner-images/test/image4.jpg" alt="">`;
  image5: string = `<img src="assets/banner-images/test/image5.jpg" alt="">`;
  
  isFirst: boolean = false;

  interval: any;

  getImageFirst(){
    return this.image1;
  }
  getImageSecond(){
    return this.image2;
  }
  getImageThird(){
    return this.image3;
  }
  getImageFourth(){
    return this.image4;
  }
  getImageFifth(){
    return this.image5;
  }

  ngOnInit(): void{

    for (let index = 1; index <= this.numberOfImages; index++) {
      let imageVal;
      let position;

      switch(index){
        case 1:
          imageVal = this.getImageFirst();
          position = index; 
          this.isFirst = true;
          break;
        case 2:
          imageVal = this.getImageSecond();
          position = index;
          this.isFirst = false;
          break;
        case 3:
          imageVal = this.getImageThird();
          position = index;
          this.isFirst = false;
          break;
        case 4:
          imageVal = this.getImageFourth();
          position = index;
          this.isFirst = false;
          break;
        case 5:
          imageVal = this.getImageFifth();
          position = index;
          this.isFirst = false;
          break;
        default:
          break;
      }

      this.imageObject = {
        image: imageVal,
        position: position,
        // isFirst: this.isFirst
      };
      this.arrayOfImages.push(this.imageObject);

      // this.arrayOfImages[0] = 

    }

    // console.log(this.arrayOfImages);


    if(this.numberOfImages > 1){
      // Espera 3.5 segundos antes do Slider comçar a rodar.
      let waitSecondsToStart = setTimeout(() => {

        // this.next();
        this.refreshSlide();

        clearTimeout(waitSecondsToStart);

      }, 7000);
    }

  }

  refreshSlide(){
    
    this.interval = setInterval(() => {

      // console.log(this.arrayOfImages);
      this.incrementImagePosition();

    }, 5000);
  }

  incrementImagePosition(){

    this.arrayOfImages.forEach((data) => {
    
      data.position ++;

      if(data.position === this.numberOfImages + 1){
        data.position = 1;
      }

    });

    this.arrayOfImages.sort((a, b) => {
      return a.position - b.position;
    });

  }

  decrementImagePosition(){

    this.arrayOfImages.forEach((data) => {
    
      data.position --;

      if(data.position === 0){
        data.position = this.numberOfImages;
      }

    });

    this.arrayOfImages.sort((a, b) => {
      return a.position - b.position;
    });

  }


  next(): void{

    this.incrementImagePosition();
    
    clearInterval(this.interval);

    this.refreshSlide();

    // let timeout = setTimeout(() => {
      
    //   this.refreshSlide();

    //   clearTimeout(timeout);
    // }, 2000)

  }

  prev(): void{
    this.decrementImagePosition();

    clearInterval(this.interval);

    this.refreshSlide();
  }

}
