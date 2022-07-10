import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-mobile',
  templateUrl: './about-mobile.component.html',
  styleUrls: ['./about-mobile.component.css']
})
export class AboutMobileComponent implements OnInit, AfterViewInit {

  @ViewChild('scroller') scroller!: ElementRef
  @ViewChild('mission') mission!: ElementRef
  @ViewChild('vision') vision!: ElementRef
  @ViewChild('values') values!: ElementRef

  isMissionActive: boolean = true;
  isVisionActive: boolean = false;
  isValuesActive: boolean = false;

  public missionOffset: number = 26 - 28;
  public visionOffset: number = 401 - 28;
  public valuesOffset: number = 775 - 40;
  
  // public missionOffset: number = this.mission.nativeElement.offsetLeft;
  // public visionOffset: number = this.vision.nativeElement.offsetLeft;
  // public valuesOffset: number = this.values.nativeElement.offsetLeft;

  missionButton: string = '&#9679;';
  visionButton: string = '&#9679;';
  valuesButton: string = '&#9679;';


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  @HostListener('touchmove', ['$event']) checkTouchMoveLeft(){
    
    // console.log(this.scroller.nativeElement.scrollLeft);

    
    let scroller = this.scroller.nativeElement.scrollLeft;

    if(scroller >= this.missionOffset && scroller < this.visionOffset){
      this.isMissionActive = true;
      this.isVisionActive = false;
      this.isValuesActive = false;

    }else if(scroller >= this.visionOffset && scroller < this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = true;
      this.isValuesActive = false;


    }else if(scroller >= this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = false;
      this.isValuesActive = true;

    }

  }

  @HostListener('wheel', ['$event']) checkOffsetLeft(){
    
    // console.log(this.scroller.nativeElement.scrollLeft);

    
    let scroller = this.scroller.nativeElement.scrollLeft;

    if(scroller >= this.missionOffset && scroller < this.visionOffset){
      this.isMissionActive = true;
      this.isVisionActive = false;
      this.isValuesActive = false;

    }else if(scroller >= this.visionOffset && scroller < this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = true;
      this.isValuesActive = false;


    }else if(scroller >= this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = false;
      this.isValuesActive = true;

    }

  }

  scrollTo(element: HTMLElement){
    this.scroller.nativeElement.scrollTo(element.offsetLeft - 26, 0);

    // this.scroller.nativeElement.scrollIntoView({ behavior: 'smooth' })

    this.checkOffsetLeft();
  }


}
