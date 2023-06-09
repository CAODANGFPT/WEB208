import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss'],
})
export class SigupComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  formSignup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { Validators: this.checkPassword }
  );

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }

  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.authService.signup(this.formSignup.value).subscribe((data) => {
        alert('Đăng Ký Thành Công !');
      });
      console.log(1);
      
    }

    
  }
}
