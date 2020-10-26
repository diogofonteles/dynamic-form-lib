import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { SelectComboBoxComponent } from './components/select-combo-box/select-combo-box.component';
import { DynamicControlDirective } from './directives/dynamic-control.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [DynamicFormComponent, InputComponent, DynamicControlDirective, SelectComboBoxComponent, ButtonComponent, ListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    InputComponent,
    SelectComboBoxComponent,
    ButtonComponent,
    ListComponent
  ]
})
export class DynamicFormModule { }
