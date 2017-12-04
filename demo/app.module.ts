import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppComponent }   from './app.component';
import {NKDatetimeModule} from '../src/ng5-datetime/ng5-datetime.module';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, FormsModule, NKDatetimeModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}