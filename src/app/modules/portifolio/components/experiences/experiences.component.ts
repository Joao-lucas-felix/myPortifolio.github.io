import { Component, signal } from '@angular/core';
import IExperiences from '../../interfaces/IExeperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public myExperiences = signal<IExperiences[]> 
  ([
    {
      sumary: {
        strong: "Ceritificação na construção de API's Restfull", 
        text: "Junho - 2024"
      }, 
      text: "<p>Cruso Para o desenvolvimento e testes de API's no padrão restfull usando Java 21 e Spring Boot 3, junto com o Spring security para autenticação. Além de dockerização das apis e implatanção basica na AWS.</p>",
      link: {
        src:"./assets/pdf/CeritificadoAPIREST.pdf",
        text: "Clique aqui para ver o Certificado" 
       }
    }, 
  ])

}
