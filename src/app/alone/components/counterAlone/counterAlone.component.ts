import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  // imports: [CommonModule,],
  templateUrl: './counterAlone.component.html',
  styleUrl: './counterAlone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterAloneComponent { 
  @Input()
  public counter:number = 10;
}
