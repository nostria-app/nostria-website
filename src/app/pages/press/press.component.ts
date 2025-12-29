import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-press',
  imports: [RouterLink],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PressComponent {

}
