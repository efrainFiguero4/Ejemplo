import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

//import services
import { MensajeService, Mensaje } from './mensaje.service'


@Component({
    moduleId: module.id,
    selector: 'mensaje',
    template: `
    <div class="alerta-mensaje">
        <div (click)="removerMensaje(m)" class="alert" *ngFor="let m of alertas" [ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}">
            <div class="row">
                <div class="col-1">
                    <div class="center-center">
                        <i class="material-icons" aria-hidden="true" > {{m.tipo == 2 ? "error" : m.tipo == 2 ? "error_outline" :  m.tipo == 3 ? "warning" :m.tipo == 1 ? "done_all" : ""}}</i>
                    </div>
                </div>
                <div class="col-10">
                    {{m.mensaje}}
                </div>
                <i class=" material-icons fa fa-times-circle close fa-lg" aria-hidden="true" style="cursor:pointer"></i>
            </div>
        </div>
    </div>
    `
    , styles: [`
        .center-center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .alerta-mensaje {
                position: fixed;
                top: 40px;
                right: 10px;
                z-index: 1050;
                overflow: hidden;
                outline: 0;
                width: 20em;

            /* 
            opacity: 1.064;
            
            top: 100px;box-sizing: border-box;position: fixed;top: 40px;right: 20px;width: 20em; z-index:1000;*/
        }
    `]
})


export class MensajeComponent implements OnDestroy {
    subscription: Subscription;

    alertas = new Array<Mensaje>();

    constructor(private sms: MensajeService) {
        this.subscription = this.sms.getMessages().subscribe(messages => {
            if (messages) {
                this.alertas.push(messages);
                setTimeout(() => {
                    this.alertas.splice(this.alertas.indexOf(messages), 1);
                }, 3000)
            }
        });
    }

    removerMensaje(m: Mensaje) {
        this.alertas.splice(this.alertas.indexOf(m), 1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
