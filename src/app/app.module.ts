import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';

import { InstrumentsService } from './instruments.service';

const appRoutes: Routes = [
  {
    path: '',
    component: GridComponent,
    data: { title: 'Main page' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    BrowserModule
  ],
  providers: [
    InstrumentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
