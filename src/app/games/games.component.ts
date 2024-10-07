import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';

  games = [
    {
      id: 1,
      name: 'WoW'
    },
    {
      id: 2,
      name: 'Uncharted'
    },
    {
      id: 3,
      name:'AOM'
    }
  ]

}
