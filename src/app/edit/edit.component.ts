import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div id="edit-form" *ngIf="childSelectedAnimal">
      <h1>{{childSelectedAnimal.name}}</h1>
      <h3>Edit Animal</h3>
      <br>
      <li>
        <label>Enter Name</label>
        <input [(ngModel)]="childSelectedAnimal.name">
      </li>
      <br>
      <li>
        <label>Enter Species</label>
        <input [(ngModel)]="childSelectedAnimal.species">
      </li>
      <br>
      <li>
        <label>Enter sex</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
      </li>
      <br>
      <li>
        <label>Enter age</label>
        <input [(ngModel)]="childSelectedAnimal.age">
      </li>
      <br>
      <li>
        <label>Enter Location</label>
        <input [(ngModel)]="childSelectedAnimal.location">
      </li>
      <br>
      <li>
        <label>Enter Diet</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
      </li>
      <br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})
export class EditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
