import { Routes } from '@angular/router';
import { PrimeNgInputNumberComponent } from './components/prime-ng-input-number.component';
import { GeneralDataComponent } from './components/test.component';
import { PadreComponent } from './state-padre-hijo/padre.component';
import { AppComponent } from './app.component';
import { SelectorRoutesComponent } from './components/selector-routes.component';

export const routes: Routes = [
    
    {
        path: '',
        component: SelectorRoutesComponent
    },
    {
        path: 'test',
        // component: PrimeNgInputNumberComponent
        component: GeneralDataComponent
    },
    {
        path: 'state-padre-hijo',
        // component: PrimeNgInputNumberComponent
        component: PadreComponent
    }
];
