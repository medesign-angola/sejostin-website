import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  mainTitle: string = 'Estamos na 4ª revolução industrial, uma nova era de disrupção Científica e tecnológica.';
  contentParagraph: string = 'Distribuição de bens de consumo , transporte de mercadorias, estudo de viabilidade no ramo de agronegócio, formação em agronegócio e indústria e seguro agrícolas.';

  servicesObject: any = [
    {
      'name': 'Agricultura',
      'image_path': 'assets/our-services/image1.jpg'
    },
    {
      'name': 'Exportação de Café',
      'image_path': 'assets/our-services/image2.jpg'
    },
    {
      'name': 'Pesca',
      'image_path': 'assets/our-services/image3.jpg'
    },
    {
      'name': 'Pecuária',
      'image_path': 'assets/our-services/image6.jpg'
    },
    {
      'name': 'Imóveis',
      'image_path': 'assets/our-services/image5.jpg'
    }
  ];

  constructor() { }

}
