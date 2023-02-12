import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  createForm!: FormGroup;
  submitted = false;
  @Output() userForm = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000000000),
          Validators.max(9999999999999999),
        ],
      ],
    });
  }
  onSubmit() {
    this.userForm.emit(this.createForm.value);
  }
  get fullName() {
    return this.createForm.get('fullName');
  }
  get address() {
    return this.createForm.get('address');
  }
  get cardNumber() {
    return this.createForm.get('cardNumber');
  }
}
