import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NKDatetime} from './ng5-datetime';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [NKDatetime],
    declarations: [NKDatetime]
})
export class NKDatetimeModule { }
