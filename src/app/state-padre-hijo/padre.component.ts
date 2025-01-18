
import { Component } from '@angular/core';
import { HijoComponent } from './hijo.component';
import { DialogService } from 'primeng/dynamicdialog';
import { PadreHijoState } from './padre-hijo.state';
import { JsonPipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [JsonPipe, ButtonModule],
  providers: [DialogService],
  template: `
  <div class="container">
    @if ($state.state().isLoading) {
      <h1>Cargando!!!!</h1>
    }
    @else {
      <button class="btn btn-success" (click)='openForm()'>Agregar</button>
      <div class="mt-3"></div> 
      @for(item of $state.state().lista; track $index){
        <div>
          <strong class="me-2">{{item.name}}</strong>
          <small>{{item.lastName}}</small>
        </div>
      }
      <!-- {{ $state.state().lista | json }} -->
    }
  </div>
  `
})
export class PadreComponent {

  constructor(
    private _dialog: DialogService,
    public $state: PadreHijoState
  ) { }

  ngOnInit() {
    this.$state.getListElements()
  }

  openForm() {
    this._dialog.open(HijoComponent, {

    })
  }
}
