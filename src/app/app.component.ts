import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>World of Animals</h1>
    <ul>
      <li *ngFor="let currentAnimal of animals">
        <ul>
          <img src="{{currentAnimal.picture}}">
          <li>{{currentAnimal.name}}</li>
          <li>{{currentAnimal.species}}</li>
          <li>{{currentAnimal.sex}}</li>
          <li>{{currentAnimal.age}}</li>
          <li>{{currentAnimal.location}}</li>
          <li>{{currentAnimal.diet}}</li>
        </ul>
        <button (click)="editAnimal(currentAnimal)">Edit Details</button>
      </li>
    </ul>
    <hr>
    <div *ngIf="selectedAnimal">
      <h3>Edit Animal</h3>
      <label>Enter Name</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Enter Species</label>
      <input [(ngModel)]="selectedAnimal.species">
      <label>Enter sex</label>
      <input [(ngModel)]="selectedAnimal.sex">
      <label>Enter age</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Enter Location</label>
      <input [(ngModel)]="selectedAnimal.location">
      <label>Enter Diet</label>
      <input [(ngModel)]="selectedAnimal.diet">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})
export class AppComponent {
  animals: Animal[] = [
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
}


export class Animal {
  constructor(public picture: string, public name: string, public species: string, public sex: string, public age: number, public location: string, public diet: string) { }
}
