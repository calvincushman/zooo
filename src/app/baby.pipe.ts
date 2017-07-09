import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "baby",
  pure: true
})

export class BabyPipe implements PipeTransform {
  transform(input: Animal[], desiredAgeGroup) {
    var output: Animal[]=[];
    if(desiredAgeGroup === "babyAnimals") {
    for (var i=0; i < input.length; i++) {
      if (input[i].age <= 5) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredAgeGroup === "adultAnimals") {
    for (var i=0; i < input.length; i++) {
      if (input[i].age >= 6) {
        output.push(input[i]);
      }
    }
    return output
  } else{
    return input;
  }
}
}
