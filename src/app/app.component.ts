import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>World of Animals</h1>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editTask($event)"></animal-list>

    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>

  </div>
  `
})
export class AppComponent {
  masterAnimalList: Animal[] = [
  new Animal("http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg", "tookie", "turtel", "male", 22, "nyc", "tacos"),

  new Animal("pp", "Tereasa", "dog", "female", 7, "tomorrowland", "spaghetti")
  ];

  selectedAnimal = null;

  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
