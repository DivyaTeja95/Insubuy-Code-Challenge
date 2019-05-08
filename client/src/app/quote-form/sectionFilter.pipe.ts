import {Pipe, PipeTransform} from '@angular/core'
import {
    ResultModel
}
from './quote-form.component'
@Pipe({
    name:'sectionFilter'
})
export class SectionFilterPipe implements PipeTransform{

    transform(result:ResultModel[],sectionFilter:string){
        if(sectionFilter == "" || sectionFilter ==null )
            return result;
        return result.filter(q=>q.section.toLowerCase().includes(sectionFilter.toLowerCase()));
    }
}