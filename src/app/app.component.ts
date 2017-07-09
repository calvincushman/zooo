import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="top-banner">
      <h1>World of Animals</h1>
    </div>
    <div class="top">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>

  </div>
  `
})
export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
  new Animal("http://uticazoo.org/wp-content/uploads/2015/01/DHZebra16x20-1024x824.jpg", "Tony", "Zebra", "male", 22, "Africa", "tacos"),

  new Animal("https://detroitzoo.org/wp-content/uploads/2015/09/Camel.jpg", "Linda", "Golden Retreiver", "female", 7, "Tomorrowland", "spaghetti"),

  new Animal ("https://detroitzoo.org/wp-content/uploads/2015/08/anteater.jpg", "Terence", "Anteater", "male", 2, "Cincinatti", "Thai Food"),

  new Animal ("https://c532f75abb9c1c021b8c-e46e473f8aadb72cf2a8ea564b4e6a76.ssl.cf5.rackcdn.com/2016/08/31/3kg7hmrueq_Julie_Larsen_Maher_0619_Red_Panda_PPZ_09_06_12.jpg", "Janet", "Cat", "female", 16, "Seattle", "Pastries"),
  new Animal("http://uticazoo.org/wp-content/uploads/2015/01/DHZebra16x20-1024x824.jpg", "Bill", "Zebra", "male", 6, "Africa", "tacos"),

  new Animal("http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg", "Linda", "dog", "female", 7, "tomorrowland", "spaghetti"),

  new Animal ("https://detroitzoo.org/wp-content/uploads/2015/08/anteater.jpg", "Terence", "pigeon", "female", 2, "Cincinatti", "Thai Food"),

  new Animal ("http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg", "Barbara", "aligator", "male", 1, "Seattle", "Pastries")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
