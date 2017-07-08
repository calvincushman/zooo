import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <h1>New Animal</h1>
  <div>
    <label>Enter Picture URL:</label>
    <input #newPicture>
    <label>Enter Name:</label>
    <input #newName>
    <label>Enter Species</label>
    <input #newSpecies>
    <label>Enter Sex</label>
    <input #newSex>
    <label>Enter Age</label>
    <input #newAge>
    <label>Enter Location</label>
    <input #newLocation>
    <label>Enter Diet</label>
    <input #newDiet>
    <button (click)="submitForm(newPicture.value, newName.value, newSpecies.value, newSex.value, newAge.value, newLocation.value, newDiet.value); newPicture.value='' newName.value='' newSpecies.value='' newSex.value='' newAge.value='' newLocation.value='' newDiet.value'';">Add Animal</button>
  </div>
  `
})
export class NewComponent implements OnInit {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(picture: string, name: string, species: string, sex: string, age: number, location: string, diet: string) {
    var newAnimalToAdd: Animal = new Animal(picture, name, species, sex, age, location, diet)
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  ngOnInit() {
  }

}
