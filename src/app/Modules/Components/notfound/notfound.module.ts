import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotfoundComponent} from "./notfound.component";
import {NotfoundRoutingModule} from "./notfound-routing.module";


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ],
  exports: [
    NotfoundComponent
  ]
})
export class NotfoundModule { }
