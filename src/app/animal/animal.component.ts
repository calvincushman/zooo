import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="babyAnimals">Baby Animals</option>
    <option value="adultAnimals">Adult Animals</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | baby">
      <ul>
        <img src="{{currentAnimal.picture}}">
        <li>{{currentAnimal.name}}</li>
        <li>{{currentAnimal.species}}</li>
        <li>{{currentAnimal.sex}}</li>
        <li>{{currentAnimal.age}}</li>
        <li>{{currentAnimal.location}}</li>
        <li>{{currentAnimal.diet}}</li>
      </ul>
      <button (click)="editButtonClicked(currentAnimal)">Edit Details</button>
    </li>
  </ul>
  `
})
export class AnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "babyAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
