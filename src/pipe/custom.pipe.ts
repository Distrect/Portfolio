import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
  standalone: true,
})
export class LevelPipe implements PipeTransform {
  public transform(value: any): any {
    if (typeof value !== 'number') return value;

    if (value <= 25) return 'Beginner';
    else if (value <= 50) return 'Proficient';
    else if (value <= 75) return 'Advanced';
    else return 'Master';
  }
}
