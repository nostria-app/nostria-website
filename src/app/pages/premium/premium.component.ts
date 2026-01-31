import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-premium',
  standalone: true,
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PremiumComponent {}
