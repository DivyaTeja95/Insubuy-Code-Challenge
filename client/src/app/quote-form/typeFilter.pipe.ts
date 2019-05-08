import {Pipe, PipeTransform} from '@angular/core'
import {
    ResultModel
}
from './quote-form.component'
@Pipe({
    name:'typeFilter'
})
export class TypeFilterPipe implements PipeTransform{

    transform(result:ResultModel[],typeFilter:string){
        if(typeFilter == "" || typeFilter ==null )
            return result;
        return result.filter(q=>q.type.toLowerCase().includes(typeFilter.toLowerCase()));
    }
}