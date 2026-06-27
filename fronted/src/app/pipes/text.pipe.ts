import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true
})
export class ShortPipe implements PipeTransform {

  transform(text: string, maxLength: number = 20): string {

    if (!text) {
      return '';
    }

    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength) + '...';
  }

}