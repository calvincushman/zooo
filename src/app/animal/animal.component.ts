import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
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
export class AnimalComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  ngOnInit() {
  }

}
