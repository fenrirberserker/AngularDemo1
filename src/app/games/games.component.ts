import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() addFavoriteEvent = new EventEmitter<string>();

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

  fav(gameName:string){
    // alert(`A ${this.username} le gusta ${gameName}`);
    this.addFavoriteEvent.emit(gameName);
  }

}
