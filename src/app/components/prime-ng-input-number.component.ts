import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
    selector: 'app-prime-ng-input-number',
    standalone: true,
    imports: [InputNumberModule, FormsModule, ReactiveFormsModule, JsonPipe],
    template: `
    <div [formGroup]="form">
        <p-inputNumber 
        inputId="integeronly"
        formControlName="firstName"
         /> 

         <div formGroupName="address">
            <p-inputNumber 
            inputId="integeronly"
            formControlName="street"
            />
         </div>
    </div>
    <pre>{{  form.value | json}}</pre>
  `,
})
export class PrimeNgInputNumberComponent {
    value1 = 1
    // form = new FormGroup({
    //     firstName: new FormControl(1),
    //     lastName: new FormControl(''),
    //     address: new FormGroup({
    //         street: new FormControl(1),
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl(''),
    //     }),
    // });
    form = this.fb.group({
        firstName: 1,
        address: this.fb.group({
            street: 1,
        })
    })

    constructor(public fb: UntypedFormBuilder) { }


    ngOnInit(): void {
    }
}
