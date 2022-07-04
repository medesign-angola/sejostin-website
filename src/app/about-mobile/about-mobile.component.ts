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

  public missionOffset: number = 11;
  public visionOffset: number = 305;
  public valuesOffset: number = 653;
  
  // public missionOffset: number = this.mission.nativeElement.offsetLeft;
  // public visionOffset: number = this.vision.nativeElement.offsetLeft;
  // public valuesOffset: number = this.values.nativeElement.offsetLeft;

  missionButton: string = '&#9679;';
  visionButton: string = '&#9675;';
  valuesButton: string = '&#9675;';


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  @HostListener('mousewheel', ['$event'])
  
  checkOffsetLeft(){
    
    // console.log(this.scroller.nativeElement.scrollLeft);

    
    let scroller = this.scroller.nativeElement.scrollLeft;

    if(scroller >= this.missionOffset && scroller < this.visionOffset){
      this.isMissionActive = true;
      this.isVisionActive = false;
      this.isValuesActive = false;

      this.missionButton = '&#9679;';
      this.visionButton = '&#9675';
      this.valuesButton = '&#9675;';

    }else if(scroller >= this.visionOffset && scroller < this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = true;
      this.isValuesActive = false;
      
      this.missionButton = '&#9675;';
      this.visionButton = '&#9679';
      this.valuesButton = '&#9675;';

    }else if(scroller >= this.valuesOffset){
      this.isMissionActive = false;
      this.isVisionActive = false;
      this.isValuesActive = true;

      
      this.missionButton = '&#9675;';
      this.visionButton = '&#9675';
      this.valuesButton = '&#9679;';

    }

  }

  scrollTo(element: HTMLElement){
    this.scroller.nativeElement.scrollTo(element.offsetLeft + 2, 0, { behavior: 'smooth' });

    // this.scroller.nativeElement.scrollIntoView({ behavior: 'smooth' })

    this.checkOffsetLeft();
  }


}
