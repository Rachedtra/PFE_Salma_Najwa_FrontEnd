import { PipeTransform, Pipe } from '@angular/core';
import { Microservice } from '../shared/microservice.model';
@Pipe({
    name: 'searchMicro',
    pure: false
  })
export class MsFilterPipe implements PipeTransform{
    private counter = 0;
    transform(microservices: Microservice[], label: string):Microservice[] {
        this.counter++;
        if (!microservices || !label) {
            return microservices;
        }

        return microservices.filter(microservice =>
            microservice.label.toLowerCase().indexOf(label.toLowerCase()) !== -1);
            
    }
    }
