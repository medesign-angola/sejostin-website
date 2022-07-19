import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BannerContentService } from '../shared/service/banner-content.service';

@Component({
  selector: 'app-banner-mobile',
  templateUrl: './banner-mobile.component.html',
  styleUrls: ['./banner-mobile.component.css']
})
export class BannerMobileComponent implements OnInit {

  constructor(private contentService: BannerContentService){}

  title: string = this.contentService.getBannerTitle();
  subtitle: string = this.contentService.getBannerSubtitle();
  content: string = this.contentService.getBannerContent();

  // @Output() wasContactClicked: boolean = false;
  @Output() wasContactClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  mobileContactClicked(){

    this.wasContactClicked.emit(true);

    let timeOutToRestart = setTimeout(() => {
      this.wasContactClicked.emit(false);
    }, 2000);

  }

}
