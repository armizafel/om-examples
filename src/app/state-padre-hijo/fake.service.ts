import { Injectable } from "@angular/core";


const FAKE_DATA = [
    { name: 'David', lastName: 'Perez' },
    { name: 'Ester', lastName: 'Lopez' },
    { name: 'Juan', lastName: 'Garcia' },
]

@Injectable({ providedIn: 'root' })
export class FakeService {
    getList(): Promise<any> {
        // aqui tiene que ir al backend a trar el listado
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(FAKE_DATA);
            }, 1000);
        })
        
    }
    createItem(item: any): Promise<any> {
        // aqui deberia ir al backend a guardar la informacion
        return new Promise((resolve) => {
            setTimeout(() => {
                FAKE_DATA.push(item);
                resolve(null);
            }, 1000);
        })
    }

}