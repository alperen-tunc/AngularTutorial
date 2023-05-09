import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteComponent } from "../website/website.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const meineRouten: Routes = [
  {path: 'website', component: WebsiteComponent}
]

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(meineRouten),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeinModule { }
