import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rmUnderscore'
})
export class RmUnderscorePipe implements PipeTransform {

    transform(value: string, ...extraChars: string[]): string {
        let result = value;
        extraChars.forEach((c) => {
            result = result.replaceAll(c, ' ');
        })
        return result.replaceAll('_', ' ');
    }

}
