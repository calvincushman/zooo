import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h2>{{childSelectedAnimal.name}}</h2>
      <h3>Edit Animal</h3>
      <label>Enter Name</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Species</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Enter sex</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <label>Enter age</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Enter Location</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <label>Enter Diet</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
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
