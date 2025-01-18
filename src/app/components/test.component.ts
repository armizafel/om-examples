import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
 
@Component({
  selector: 'app-general-data',
  standalone: true,
  imports: [InputNumberModule, FormsModule, ReactiveFormsModule ,JsonPipe],
  template: `
  <div [formGroup]="form">
      <p-inputNumber 
      inputId="integeronly"
      formControlName="oficialName"
       /> 

       <div formGroupName="amountOrigin">
          <p-inputNumber 
          inputId="integeronly"
          formControlName="operatingExpenses"
          />
       </div>
  </div>
  <pre>{{  form.value | json }}</pre>`,
})
export class GeneralDataComponent {
 
  textDescription: string = '';
  textGeneralObjective: string = '';
  textSpecificObjective: string = '';
  // textDescription: string = '';    
  // textDescription: string = '';
  constructor(private fb: FormBuilder,) {
 
  }
 
  tooltipInfo: { [key: string]: string } = {
    name: `El nombre oficial será según lo establecido en el fundamento legal correspondiente.`,
    namecitizen:
      'Nombre corto como es identificado o nombre común, es decir, como comúnmente es identificado por los ciudadanos.',
    description:
      'Es fundamental ofrecer una descripción completa y clara, detallando su naturaleza (permiso, licencia, etc.), las situaciones en las que se requiere y su propósito, para garantizar que el ciudadano lo comprenda sin dificultad.',
    benefit:
      'Aprovechamiento de cumplimiento que obtiene el solicitante del servicio.',
    decisive:
      'Documento que el ciudadano obtendrá.',
    momentOfApply:
      'Especificar si la presentación o solicitud de este, se realiza en un período específico del año, es decir, del 01 de enero al 31 de marzo, de manera Permanente, u otro período designado.',
    tagsNames:
      'Términos coloquiales o comunmente utilizados por los ciudadanos, o palabras para búsqueda e identificación del trámite, servicio o programa social.',
    publicServerNumber:
      'Cantidad de personal que participa directamente en la resolución. Esto no involucra a todos los servidores públicos del área.',
    annualFrequency:
      'Informar el número total de resoluciones emitidas el ejercicio fiscal inmediato anterior.',
    publicServerResponsible:
      'Indicar los datos de la persona responsable de la resolución es importante, ya que nos ayuda a cerciorarnos de que la información es fidedigna y se encuentra vigente.',
    municipalities: 'Especificar si solo se otorga en ciertos municipios',
  };
 
  form: FormGroup = this.fb.group({
    oficialName: [1, [Validators.required]],
    // citizenName: ['', [Validators.required]],
    // description: ['', [Validators.required]],
    // socialRight: ['', [Validators.required]],
    // generalObjective: ['', [Validators.required]],
    // specificObjective: ['', [Validators.required]],
    // coordination: ['', [Validators.required]],
    amountOrigin: this.fb.group({
      operatingExpenses: ['', Validators.required],
    //   socialProgram: ['', Validators.required],
    //   total: ['', Validators.required],
    //   budgetOrigin: ['', Validators.required],
    }),
    // notes: ['', [Validators.required]],
    // programInformation: this.fb.group({
    //   budgetProgram: ['', Validators.required],
    //   activity: ['', Validators.required],
    //   funcionalArea: ['', Validators.required],
    // }),
    // planAlignment: this.fb.group({
    //   workAxis: ['', Validators.required],
    //   strategicObjectives: ['', Validators.required],
    //   strategies: ['',  Validators.required],
    //   actionLines: ['', Validators.required],
    // }),
    // alignedProgram: [null, [Validators.required]],
    // agendaAligment: this.fb.group({
    //   objectives: ['', Validators.required],
    //   goals: ['', Validators.required],
    // }),
    // tagsNames: ['', [Validators.required]],
  });
 
  getTextDescription(event: any) {
    this.form.controls['description'].setValue(event);
  }
  getTextGeneralObjective(event: any) {
    this.form.controls['generalObjective'].setValue(event);
  }
 get asd() {
  return this.form.get('amountOrigin') as FormGroup
 }
 get asd2() {
  return this.form.get('amountOrigin')?.get('operatingExpenses')as FormControl
 }
}