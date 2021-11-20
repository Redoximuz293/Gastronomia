import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
    ],
    imports: [
      AccordionModule,
      BrowserAnimationsModule,
      CardModule,
      MenubarModule,
      InputTextModule,
      ButtonModule
    ],
  })
  export class PrimeModule { }