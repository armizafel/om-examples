import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { FakeService } from './fake.service';
import { PadreHijoState } from './padre-hijo.state';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  template: `
    <div [formGroup]="form">
      <label for="">nombre</label>
      <input type="text" class="form-control" formControlName="name">
      <label for="">apellido</label>
      <input type="text" class="form-control" formControlName="lastName">
      <div class="mt-3"></div>
      <p-button label="Guardar" icon="pi pi-check" [loading]="isLoading()" (click)="save()" [disabled]="isLoading()" />
    </div>
  `
})
export class HijoComponent {
  isLoading = signal(false)
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private _api: FakeService,
    private $state: PadreHijoState,
    public dialog: DynamicDialogRef
  ) { }

  async save() {
    try {
      this.isLoading.set(true)
      await this._api.createItem(this.form.getRawValue())
      alert('se creo correctamente')
      this.dialog.close()
      this.$state.getListElements()
    } catch (error) {
      console.error(error);
    }
    this.isLoading.set(false)
  }
}
