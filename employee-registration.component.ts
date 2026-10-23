import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchvalidator } from '../validators/password_match';

@Component({
  selector: 'app-employee-registration',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {
  employeeForm=new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern(`^[0-9]{11}$`)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword: new FormControl('',[Validators.required]),
    department: new FormControl('',[Validators.required]),
    skills: new FormArray([new FormControl('',[Validators.required])]),
    terms: new FormControl(false,Validators.required)
  },
  {validators:passwordMatchvalidator}
);

get skills(){
  return this.employeeForm.get('skills') as FormArray;
}
addskills(){
  this.skills.push(
    new FormControl('',Validators.required)
  );
}
removeSkill(index:number){
  this.skills.removeAt(index);
}
onSubmit() {
  if (this.employeeForm.valid) {
    console.log(this.employeeForm.value);
    alert('Registration Successful');
  } else {
    this.employeeForm.markAllAsTouched();
  }
}
}
