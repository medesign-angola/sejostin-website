import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerContentService {

  constructor() { }

  getBannerTitle(){
    return "A plantar soluções para colher desenvolvimento";
  }

  getBannerSubtitle(){
    return "Distribuição de bens de consumo";
  }

  getBannerContent(){
    return "Somos uma empresa vocacionada ao Comércio e Prestação de Serviços com foco em Agronegócio.";
  }

}