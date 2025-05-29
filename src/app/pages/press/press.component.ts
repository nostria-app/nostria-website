import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss'
})
export class PressComponent {

}
