import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BioComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'shakeel-bio';
}
