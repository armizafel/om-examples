import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@Component({
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="container my-4">
        <button class="btn btn-primary" [routerLink]="['/state-padre-hijo']">padre-hijo state</button>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorRoutesComponent {
}
