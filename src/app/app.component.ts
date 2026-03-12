import { Component } from '@angular/core';
import { CharactersComponent } from './characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}