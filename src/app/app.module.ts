import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { BabyPipe } from './baby.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EditComponent,
    NewComponent,
    BabyPipe
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
