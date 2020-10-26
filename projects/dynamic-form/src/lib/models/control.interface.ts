export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface OptionsConfig {
  value: string;
  label: string;
  selected?: boolean; // for list component
}

export interface ControlConfig {
  type: string;
  id?: string;
  label?: string;
  name?: string;
  inputType?: string;
  options?: OptionsConfig[];
  collections?: any;
  value?: any;
  validations?: Validator[];
  multipleSelection?: boolean;
}


