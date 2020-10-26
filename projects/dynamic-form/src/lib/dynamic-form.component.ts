import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ControlConfig } from './models/control.interface';

@Component({
  selector: 'app-dynamic-form, [app-dynamic-form]', // allows the component to be used also as a directive
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
  ],
})
export class DynamicFormComponent
  implements ControlValueAccessor, Validator, OnDestroy, OnInit {

  @Input() controls: ControlConfig[] = [];

  @Output() submited: EventEmitter<any> = new EventEmitter<any>(); // option to send form data through an event

  form: FormGroup;

  subscription: Subscription;

  // for implement Control Value Accessor
  change: (value: any) => void = () => {};

  @HostListener('focusout')
  touched: () => void = () => {}

  constructor(private fb: FormBuilder) {}

  writeValue(obj: any): void {
    if (!obj) {
      this.form.reset();
      return;
    }
    this.form.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  private setupForm(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    this.form = this.createControl();

    this.subscription = this.form.valueChanges.subscribe(value => {
      console.log(value);
      this.change(value);
      this.touched();
    });
  }

  ngOnInit(): void {
    this.setupForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.form.valid) {
      this.submited.emit(this.form.value);
    } else {
      this.validateAllFormControls(this.form);
    }
  }

  createControl(): FormGroup {
    const group = this.fb.group({});
    this.controls.forEach((field) => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any): ValidatorFn | null {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormControls(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  validate(control: AbstractControl): ValidationErrors {
    console.log(this.form.value, this.form.valid);
    return this.form.valid ? null : { notValid: '' };
  }

}
