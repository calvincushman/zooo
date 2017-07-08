import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  template: `
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
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})
export class EditComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender
  }
  ngOnInit() {
  }

}
