import { ReactiveFormsModule, Validators } from '@angular/forms';
import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { DynamicFormComponent } from './dynamic-form.component';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { SelectComboBoxComponent } from './components/select-combo-box/select-combo-box.component';
import { DynamicControlDirective } from './directives/dynamic-control.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          DynamicFormComponent,
          InputComponent,
          DynamicControlDirective,
          SelectComboBoxComponent,
          ButtonComponent,
          ListComponent,
        ],
        imports: [
          ReactiveFormsModule,
          MatInputModule,
          MatSelectModule,
          MatButtonModule,
          MatListModule,
          BrowserAnimationsModule
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;

    component.controls = [
      {
        type: 'input',
        id: 'username',
        label: 'Username',
        inputType: 'text',
        name: 'username',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required',
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text',
          },
        ],
      },
      {
        type: 'input',
        id: 'email',
        label: 'Email Address',
        inputType: 'email',
        name: 'email',
        validations: [],
      },
    ];

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should render input elements', () => {
    const userNameInput = fixture.debugElement.query(By.css('input[ng-reflect-name="username"]'));
    const emailInput = fixture.debugElement.query(By.css('input[ng-reflect-name="email"]'));

    expect(userNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    const userNameInput = form.controls.username;
    userNameInput.setValue('diogofonteles');

    expect(form.valid).toBeTruthy();
  });

  it('should test input validity', () => {
    const userNameInput = component.form.controls.username;
    const emailInput = component.form.controls.email;

    expect(userNameInput.valid).toBeFalsy();
    expect(emailInput.valid).toBeTruthy();

    userNameInput.setValue('diogofonteles');
    expect(userNameInput.valid).toBeTruthy();
  });

  it('should test input errors', () => {
    const userNameInput = component.form.controls.username;
    console.log('test')
    console.log(userNameInput.errors);
    expect(userNameInput.errors.required).toBeTruthy();

    userNameInput.setValue('diogofonteles');
    expect(userNameInput.errors).toBeNull();
  });
});
