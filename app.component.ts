import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeRegistrationComponent } from "./employee-registration/employee-registration.component";

@Component({
  selector: 'app-root',
  imports: [ EmployeeRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validationCheck';
}
