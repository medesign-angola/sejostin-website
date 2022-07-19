import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.resp.css']
})
export class AppComponent implements AfterViewInit{
  // title = 'sejostin-website';
  @ViewChild('banner') banner!: ElementRef
  @ViewChild('about') about!: ElementRef
  @ViewChild('services') services!: ElementRef
  @ViewChild('message') message!: ElementRef
  @ViewChild('contact') contact!: ElementRef

  currentSection: Number = 1;

  public bannerOffset: number = 0;
  public aboutOffset: number = 965;
  public servicesOffset: number = 1516;
  public messageOffset: number = 2034;
  public contactOffset: number = 2778;


  // Menu

  isMenuOpen: boolean = false;

  ngAfterViewInit(): void {

    // this.bannerOffset = this.banner.nativeElement.offsetTop - 90;
    // this.aboutOffset = this.about.nativeElement.offsetTop - 90;
    // this.servicesOffset = this.services.nativeElement.offsetTop - 90;
    // this.messageOffset = this.message.nativeElement.offsetTop - 90;

    
    this.bannerOffset = this.bannerOffset - 90;
    this.aboutOffset = this.aboutOffset - 90;
    this.servicesOffset = this.servicesOffset - 90;
    this.messageOffset = this.messageOffset - 90;
    this.contactOffset = this.contactOffset - 90;

  }

  @HostListener('window:scroll', ['$event'])

  checkOffsetTop(){
    
    // console.log(window.pageYOffset);

    // console.log(this.messageOffset);

    // console.log(this.currentSection);

    if(window.pageYOffset >= 0 && window.pageYOffset < this.aboutOffset){
      this.currentSection = 1;
    }else if(window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset){
      this.currentSection = 2;
    }else if(window.pageYOffset >= this.servicesOffset && window.pageYOffset < this.messageOffset){
      this.currentSection = 3;
    }else if(window.pageYOffset >= this.messageOffset && window.pageYOffset < this.contactOffset){
      this.currentSection = 4;
    }else if(window.pageYOffset >= this.contactOffset){
      this.currentSection = 5;
    }else{
      this.currentSection = 1;
    }

  }

  scrollTo(element: HTMLElement){
    // element.scrollIntoView();
    scrollTo(0, element.offsetTop - 90)
    this.isMenuOpen = false;
    // console.log(element.offsetTop);
  }

  changeStatus(){
    this.isMenuOpen = !this.isMenuOpen;
  }


}
