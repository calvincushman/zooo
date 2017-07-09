import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="top-banner">
      <h1 id="title">Brooklyn Zoo</h1>
    </div>
    <div class="top">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <hr>
    <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>

  </div>
  `
})
export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
  new Animal("http://uticazoo.org/wp-content/uploads/2015/01/DHZebra16x20-1024x824.jpg", "Tony", "Zebra", "male", 22, "Africa", "Tacos"),

  new Animal("https://detroitzoo.org/wp-content/uploads/2015/09/Camel.jpg", "Linda", "Golden Retreiver", "female", 7, "Tomorrowland", "Spaghetti"),

  new Animal ("https://detroitzoo.org/wp-content/uploads/2015/08/anteater.jpg", "Terence", "Anteater", "male", 2, "Cincinatti", "Ants, duh"),

  new Animal ("https://c532f75abb9c1c021b8c-e46e473f8aadb72cf2a8ea564b4e6a76.ssl.cf5.rackcdn.com/2016/08/31/3kg7hmrueq_Julie_Larsen_Maher_0619_Red_Panda_PPZ_09_06_12.jpg", "Janet", "Cat", "female", 16, "Seattle", "Pastries"),

  new Animal("https://littlerockzoo.com/assets/1673/chimpteeth_mikey.jpg", "Chester", "Chimpanzee", "male", 4, "Western Town", "smaller primates"),

  new Animal("http://media.npr.org/assets/img/2017/02/05/baby-fiona_wide-0495d60b84dcba6d79deffd4cb35a7eb3292b228-s900-c85.jpg", "Fiona", "Hippo", "female", 1, "swampsville U.S.A.", "Cotton Candy"),

  new Animal ("http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_parrot.jpg", "Harold", "pigeon", "female", 2, "Cincinatti", "Thai Food"),

  new Animal ("http://cdn.newsapi.com.au/image/v1/0831cbbc802450d7ca5d06be25bf8371", "Peter", "Wombat", "male", 4, "Beaverton or something?", "Puppy Chow")
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
