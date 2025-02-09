import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-manually-toggle',
  templateUrl: './manually-toggle.component.html',
  styles: `
    .mat-mdc-form-field {
      margin-right: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ManuallyToggleComponent {}
