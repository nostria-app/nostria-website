import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-hunt-launch',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-hunt-launch.component.html',
  styleUrl: './product-hunt-launch.component.scss'
})
export class ProductHuntLaunchComponent {
}