import { Injectable, signal } from "@angular/core";
import { FakeService } from "./fake.service";

interface PadreHijoInitialState {
    isLoading: boolean
    lista?: any[]
}

@Injectable({
    providedIn: 'root'
})
export class PadreHijoState {
    state = signal<PadreHijoInitialState>({
        isLoading: false
    })

    constructor(private _api: FakeService) { }

    update(newState: Partial<PadreHijoInitialState>) {
        this.state.update(state => ({ ...state, ...newState }))
    }

    async getListElements() {
        this.update({ isLoading: true })
        const result = await this._api.getList()
        this.update({ isLoading: false, lista: result })
    }
}