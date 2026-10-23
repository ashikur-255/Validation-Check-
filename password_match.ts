import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchvalidator(control:AbstractControl):ValidationErrors | null{
    const password=control.get('password')?.value;
    const confirmPassword=control.get('confirmPassword')?.value;
    if(password!==confirmPassword){
        return {passwordMatchvalidator:true}
    }
    return null;
}