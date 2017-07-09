import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
import { BabyPipe } from '../baby.pipe';

@Component({
  selector: 'animal-list',
  template: `
  <h4>Get Me</h4>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="babyAnimals">Baby Animals</option>
    <option value="adultAnimals">Adult Animals</option>
  </select>
  <ul id="animal-cards">
    <div class="animal-card" *ngFor="let currentAnimal of childAnimalList | baby:filterByAge">
      <ul>
        <img id="card-image" src="{{currentAnimal.picture}}">
        <li id="name">{{currentAnimal.name}}</li>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Age: {{currentAnimal.age}} years old</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <button id="edit-button" (click)="editButtonClicked(currentAnimal)">Edit Details</button>
      </ul>
    </div>
  </ul>
  `
})
export class AnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
