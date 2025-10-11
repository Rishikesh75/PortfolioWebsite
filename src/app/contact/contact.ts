import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialIcon } from '../Component/social-icon/social-icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SocialIcon],
  templateUrl: './contact.html',
  styleUrl: '../../styles/pages/_contact.less'
})
export class Contact {
  // Form data
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Form state
  isSubmitting = false;
  submitted = false;
  showSuccess = false;

  // Contact information
  contactInfo = {
    phone: '+91 8919987405',
    email: 'kotlarishikesh27@gmail.com',
    address: 'Hyderabad, Telangana, India',
    availability: 'Available for freelance work'
  };

  // Social media links
  socialLinks: Array<{type: 'github' | 'linkedin' | 'kaggle' | 'leetcode', url: string, label: string}> = [
    { type: 'github' as const, url: 'https://github.com/your-username', label: 'GitHub' },
    { type: 'linkedin' as const, url: 'https://linkedin.com/in/your-username', label: 'LinkedIn' },
    { type: 'kaggle' as const, url: 'https://kaggle.com/your-username', label: 'Kaggle' },
    { type: 'leetcode' as const, url: 'https://leetcode.com/your-username', label: 'LeetCode' }
  ];

  // Form validation
  validateForm(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  // Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Handle form submission
  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitted = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;
      
      // Reset form after success
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }, 2000);
  }

  // Reset form
  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
    this.showSuccess = false;
  }

  // Get form field error
  getFieldError(field: string): string {
    if (!this.submitted) return '';
    
    switch (field) {
      case 'name':
        return !this.contactForm.name.trim() ? 'Name is required' : '';
      case 'email':
        if (!this.contactForm.email.trim()) return 'Email is required';
        return !this.isValidEmail(this.contactForm.email) ? 'Please enter a valid email' : '';
      case 'subject':
        return !this.contactForm.subject.trim() ? 'Subject is required' : '';
      case 'message':
        return !this.contactForm.message.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  }

  // Check if field has error
  hasFieldError(field: string): boolean {
    return !!this.getFieldError(field);
  }
}
