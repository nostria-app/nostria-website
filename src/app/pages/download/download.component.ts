import { ChangeDetectionStrategy, Component } from '@angular/core';
import { currentDesktopRelease, downloadPlatforms } from '../../shared/downloads/downloads.data';

@Component({
  selector: 'app-download',
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadComponent {
  readonly releaseVersion = currentDesktopRelease;
  readonly platforms = downloadPlatforms;
}