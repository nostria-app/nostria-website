import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nostria-2-release',
  imports: [RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nostria-2-release.component.html',
  styleUrl: './nostria-2-release.component.scss'
})
export class Nostria2ReleaseComponent {
}
