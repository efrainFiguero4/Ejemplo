import { MensajeService } from './mensaje.service';
import { MensajeComponent } from './mensaje.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MensajeComponent
    ],
    exports: [MensajeComponent],
    providers: [MensajeService]
})
export class MensajeModule { }