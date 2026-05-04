import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passValidators = (control:AbstractControl):ValidationErrors | null=>{

    let pass=control.value;
    if(pass==null || pass.length==0){
      return null;
    }
    const minlength=pass.length>5;
    const hasCapital= /[A-Z]/.test(pass);
    const haslower= /[a-z]/.test(pass);
    const hasnumeric= /[0-9]/.test(pass);
    const hasSpecialChar= /[!@#$%&*?]/.test(pass);
    if(minlength && hasCapital && haslower && hasnumeric && hasSpecialChar){
      return null;
    }else{
      return {passError:true}
    }

  }