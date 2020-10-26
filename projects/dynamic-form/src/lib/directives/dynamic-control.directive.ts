import { ListComponent } from './../components/list/list.component';
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { SelectComboBoxComponent } from '../components/select-combo-box/select-combo-box.component';
import { ControlConfig } from '../models/control.interface';

const componentMapper = {
  input: InputComponent,
  selectcombobox: SelectComboBoxComponent,
  button: ButtonComponent,
  list: ListComponent
};

@Directive({
  selector: '[dynamicControl]'
})
export class DynamicControlDirective implements OnInit {

  @Input() control: ControlConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.control.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.control = this.control;
    this.componentRef.instance.group = this.group;
  }

}
