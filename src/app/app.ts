import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared-module';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('semana3-angular');
}
