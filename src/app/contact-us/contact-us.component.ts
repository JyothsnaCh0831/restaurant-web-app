import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  ratings: string[] = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];
  contactUsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      overallRating: ['', Validators.required],
      review: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.contactUsForm.valid) {
      // Submit your form data here
      console.log(this.contactUsForm.value);
    } else {
      // Handle form validation errors
      console.log("Form is invalid");
    }
  }
}
