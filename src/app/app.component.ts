import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>World of Animals</h1>
    <ul>
      <li>{{firstAnimal.name}}</li>
    </ul>
  </div>
  `
})
export class AppComponent {

}
