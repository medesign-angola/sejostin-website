import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  // title = 'sejostin-website';
  @ViewChild('banner') banner!: ElementRef
  @ViewChild('about') about!: ElementRef
  @ViewChild('services') services!: ElementRef
  @ViewChild('message') message!: ElementRef

  currentSection: Number = 0;

  public bannerOffset: any = null;
  public aboutOffset: any = null;
  public servicesOffset: any = null;
  public messageOffset: any = null;

  ngOnInit(): void{
    // this.checkOffsetTop();
  }

  ngAfterViewInit(): void {
    
    this.bannerOffset = this.banner.nativeElement.offsetTop;
    this.aboutOffset = this.about.nativeElement.offsetTop;
    this.servicesOffset = this.services.nativeElement.offsetTop;
    this.messageOffset = this.message.nativeElement.offsetTop;

  }

  @HostListener('window.scroll', ['$event'])

  checkOffsetTop(){
    
    // console.log(window.pageYOffset);

    if(window.pageYOffset >= this.bannerOffset && window.pageYOffset < this.aboutOffset){
      this.currentSection = 1;
    }else if(window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset){
      this.currentSection = 2;
    }else if(window.pageYOffset >= this.servicesOffset && window.pageYOffset < this.messageOffset){
      this.currentSection = 3;
    }else if(window.pageYOffset >= this.messageOffset){
      this.currentSection = 4;
    }else{
      this.currentSection = 0;
    }

  }

  scrollTo(element: HTMLElement){
    element.scrollIntoView();
    this.checkOffsetTop();
  }


}
