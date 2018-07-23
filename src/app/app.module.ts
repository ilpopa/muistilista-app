import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MuistilistaComponent } from './muistilista/muistilista.component';
import { MuistilistaService } from './muistilista/muistilista.service';

@NgModule({
  declarations: [
    AppComponent,
    MuistilistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MuistilistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
