import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counterAlone/counterAlone.component';
import { SideMenuComponent } from '../../side-menu/side-menu.component';

@Component({
  standalone: true,
  imports:[CommonModule,CounterAloneComponent,SideMenuComponent],
  templateUrl:'./alonePage.component.html' ,
  styleUrl: './alonePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent { 
  
}
