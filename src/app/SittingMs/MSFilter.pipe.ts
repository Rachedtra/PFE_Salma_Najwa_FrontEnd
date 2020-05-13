import { PipeTransform, Pipe } from '@angular/core';
import { Microservice } from '../shared/microservice.model';
@Pipe({
    name: 'MSFilter'
})
export class MsFilterPipe implements PipeTransform{
    transform(microservices: Microservice[], searchTerm: string):Microservice[] {
        if (!microservices || !searchTerm) {
            return microservices;
        }

        return microservices.filter(microservice =>
            microservice.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    }
