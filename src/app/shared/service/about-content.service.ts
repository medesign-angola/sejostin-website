import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutContentService {

  mainTitle: string = "Refletimos a visão dos fundadores de que devemos lutar bravamente pelo que desejamos.";
  subTitle: string = "Prestação de Serviços, com foco em Agronegócio.";

  firstParagraph: string = "Somos uma empresa vocacionada ao Comercio e Prestação de Serviços, com foco em Agronegócio e pretendemos ser reconhecidos pela solidez e competência, tanto no mercado nacional e internacional, bem como por todos os nossos clientes, colaboradores e parceiros.";

  secondParagraph: string = "Somos uma empresa vocacionada ao Comercio e Prestação de Serviços, com foco em Agronegócio e pretendemos ser reconhecidos pela solidez e competência, tanto no mercado nacional e internacional, bem como por todos os nossos clientes, colaboradores e parceiros .";

  mission: string = "Contribuir para um país mais forte por meio da transformação do conhecimento em Riqueza para as pessoas.";

  vision: string = "Ser a maior e melhor empresa no ramo do agronegócio, oferecendo aos seus clientes e parceiros uma relação duradoura, com foco no crescimento, rentabilidade e responsabilidade socioambiental.";

  values: string = "Inovação, Liderança, Responsabilidade, Integridade, Paixão, Colaboração, Diversidade, Qualidade.";

  constructor() { }

  
}
