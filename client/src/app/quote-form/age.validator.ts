import { Directive } from '@angular/core';
import {  
    AbstractControl,
    NG_VALIDATORS,    
    Validator,  
    ValidationErrors,
    ValidatorFn,
    FormControl
   } from '@angular/forms'; 


// validation function
function validateAgeFactory() : ValidatorFn {
    return (c: AbstractControl) => {
      let isValid = c.value >= 1 && c.value <=100;
      
      if(isValid) {
        return null;
      } else {
        return {
          agevalidator: {
            valid: false
          }
        };
      }
  
    }
  }

@Directive({  
    selector: '[agevalidator][ngModel]',  
    providers: [  
     {  
      provide: NG_VALIDATORS,  
      useExisting: AgeValidator,  
      multi: true  
     }  
    ]  
})
  
export class AgeValidator implements Validator {
    validator:ValidatorFn;

    constructor() {
        this.validator = validateAgeFactory();
    }
    validate(c: FormControl) {  
        return this.validator(c);
    }
}