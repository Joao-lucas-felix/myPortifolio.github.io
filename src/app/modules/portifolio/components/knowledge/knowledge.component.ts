import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interfaces/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public knowledgeIcons = signal <Iknowledge[]>
  ([
    {
      src: "./assets/icons/knowledge/angular.svg",
      alt:  "Icon angular"
    },
    {
      src: "./assets/icons/knowledge/css3.svg",
      alt:  "Icon css3"
    },    
    {
      src: "./assets/icons/knowledge/html5.svg",
      alt:  "Icon html5"
    },
    {
      src: "./assets/icons/knowledge/java.svg",
      alt:  "Icon java"
    },
    {
      src: "./assets/icons/knowledge/javascript.svg",
      alt:  "Icon javascript"
    },
    {
      src: "./assets/icons/knowledge/sass.svg",
      alt:  "Icon sass"
    },
  
  ])

}
