import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
  standalone: true,
})
export class LevelPipe implements PipeTransform {
  public transform(value: any): any {
    if (typeof value !== 'number') return value;

    if (value <= 20) return 'Beginner';
    else if (value <= 40) return 'Intermediate';
    else if (value <= 60) return 'Proficient';
    else if (value <= 80) return 'Advanced';
    else return 'Master';
  }
}
