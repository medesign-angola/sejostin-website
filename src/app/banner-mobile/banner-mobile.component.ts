import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

}
