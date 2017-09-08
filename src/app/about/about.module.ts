import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "app/about/about.component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports:[RouterModule.forChild(ROUTES)]
})
export class AboutModule { }
