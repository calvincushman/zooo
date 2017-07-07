import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
