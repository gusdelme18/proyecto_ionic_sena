import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortText'
})

export class ShortText implements PipeTransform {
    transform(value: any, args: any[]): any {
        if (value) {
            return value.slice(0, args[0]) + '...';
        }
    }
}