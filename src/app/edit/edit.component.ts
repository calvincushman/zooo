import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h2>{{childSelectedAnimal.name}}</h2>
      <h3>Edit Animal</h3>
      <li>
        <label>Enter Name</label>
        <input [(ngModel)]="childSelectedAnimal.name">
      </li>
      <li>
        <label>Enter Species</label>
        <input [(ngModel)]="childSelectedAnimal.species">
      </li>
      <li>
        <label>Enter sex</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
      </li>
      <li>
        <label>Enter age</label>
        <input [(ngModel)]="childSelectedAnimal.age">
      </li>
      <li>
        <label>Enter Location</label>
        <input [(ngModel)]="childSelectedAnimal.location">
      </li>
      <li>
        <label>Enter Diet</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
      </li>
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
