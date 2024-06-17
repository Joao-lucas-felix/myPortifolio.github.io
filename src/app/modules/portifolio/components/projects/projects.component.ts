import { Component, inject, input, signal } from '@angular/core';

//interface
import IProjects from '../../interfaces/IProjects.interface';

//Dialog
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
//Enum
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  private dialog = inject(MatDialog)

  public myProjects = signal<IProjects[]>([])

  /**
   * openDialog
   *data: IProjects   
  */
  public openDialog(data: IProjects) {
    

    this.dialog.open(DialogProjectsComponent,
      {  data: data,  panelClass:EDialogPainelClass.PROJECTS });
  }
}
