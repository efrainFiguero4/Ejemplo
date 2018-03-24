
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class MensajeService {

    constructor() {
    }

    public item = new Subject<Mensaje>();
    items = this.item.asObservable();

    enviarAlerta(mensaje: Mensaje) {
        this.item.next(mensaje);
    };

    getMessages(): Observable<Mensaje> {
        return this.items;
    }
}

export interface Mensaje {
    mensaje?: string;
    tipo?: number;
}