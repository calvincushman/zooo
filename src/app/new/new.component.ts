import { Component, Output, EventEmitter} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <div id="new-animal">
  <h1>New Animal</h1>
    <li>
      <label>Enter Picture URL:</label>
      <input #newPicture>
    </li>
    <br>
    <li>
      <label>Enter Name:</label>
      <input #newName>
    </li>
    <br>
    <li>
      <label>Enter Species</label>
      <input #newSpecies>
    </li>
    <br>
    <li>
      <label>Enter Sex</label>
      <input #newSex>
    </li>
    <br>
    <li>
      <label>Enter Age</label>
      <input #newAge>
    </li>
    <br>
    <li>
      <label>Enter Location</label>
      <input #newLocation>
    </li>
    <br>
    <li>
      <label>Enter Diet</label>
      <input #newDiet>
    </li>
    <br>
    <li>
      <button id="addButton" (click)="submitForm(newPicture.value, newName.value, newSpecies.value, newSex.value, newAge.value, newLocation.value, newDiet.value); newPicture.value=''; newName.value=''; newSpecies.value=''; newSex.value=''; newAge.value=''; newLocation.value=''; newDiet.value='';">Add Animal</button>
    </li>
  </div>
  `
})
export class NewComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(picture: string, name: string, species: string, sex: string, age: number, location: string, diet: string) {
    var newAnimalToAdd: Animal = new Animal(picture, name, species, sex, age, location, diet);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
