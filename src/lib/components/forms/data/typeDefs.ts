/* eslint-disable  @typescript-eslint/no-explicit-any */
import { validateRadio, validateVoid, validateSelect, validateCheckbox, validatePhone } from "./validatorDefs";

export type SelectValidator = (
  input: string,
  defaultChoice: string
) => string[];
export type SingleInputValidator = (inputOne: string) => string[];
export type DoubleInputValidator = (
  inputOne: string,
  inputTwo: string
) => string[];
export type BooleanValidator = (input: boolean) => string[]
export type TripleInputValidator = (inputOne: string, inputTwo: string, inputThree: string) => string[]


export type InputSize = "short" | "medium" | "long";
export type FormInput =
  | SingleTextInput
  | DoubleTextInput
  | RadioInput
  | ImageSelectInput
  | CheckboxInput
  | PhoneInput

/*** PARAMETER DEFINITIONS ***/
export type TextInputParams = {
  size: InputSize;
  length: number;
  label: string;
  description: string[];
  altText: string;
  placeholder: string;
  trailText: string;
  isUpper: boolean;
  isRequired: boolean;
};

export type RadioInputParams = {
  label: string;
  altText: string;
  trailText: string;
  choices: string[];
  description: string[];
  isRequired: boolean;
};

export type ImageSelectChoiceParams = {
  bottomText: string;
  imageUrl: string;
  imageAlt: string;
  isDefault: boolean;
  value: string;
};

export type ImageSelectInputParams = {
  label: string;
  altText: string;
  choices: ImageSelectChoice[];
  default: ImageSelectChoice;
  description: string[];
  isRequired: boolean;
};

/*** END PARAMETER DEFINITIONS ***/

//***END INPUT DEFINITIONS***/
export class SingleTextInput {
  [key: string]: any;
  inputType: "text";
  size: InputSize;
  label: string;
  description: string[];
  altText: string;
  placeholder: string;
  length: number;
  trailText: string;
  validator: SingleInputValidator;
  isValid: boolean;
  isRequired: boolean;
  value: string;
  errors: string[];

  constructor(validator: SingleInputValidator, params: TextInputParams) {
    this.inputType = "text";
    this.label = params.label;
    this.validator = validator;
    this.size = params.size;
    this.altText = params.altText;
    this.placeholder = params.placeholder;
    this.length = params.length;
    this.trailText = params.trailText;
    this.description = params.description;
    this.isRequired = params.isRequired;
    this.isUpper = params.isUpper;
    this.isValid = false;
    this.value = "";
    this.errors = [];
  }

  validate() {
    const validatorData = this.validator(this.value);

    if (validatorData.length === 0) {
      this.clearErrors();
      this.isValid = true;
    } else {
      this.errors = validatorData;
      this.isValid = false;
    }
  }

  clearErrors() {
    this.errors = [];
  }
}

export class DoubleTextInput {
  [key: string]: any;
  inputType: "double-text";
  size: InputSize;
  label: string;
  description: string[];
  altText: string;
  placeholder: string;
  length: number;
  trailText: string;
  validator: DoubleInputValidator;
  isValid: boolean;
  isRequired: boolean;
  valueOne: string;
  valueTwo: string;
  errors: string[];

  constructor(validator: DoubleInputValidator, params: TextInputParams) {
    this.inputType = "double-text";
    this.label = params.label;
    this.validator = validator;
    this.size = params.size;
    this.altText = params.altText;
    this.placeholder = params.placeholder;
    this.length = params.length;
    this.trailText = params.trailText;
    this.description = params.description;
    this.isRequired = params.isRequired;
    this.isUpper = params.isUpper;
    this.isValid = false;
    this.value = "";
    this.errors = [];
  }

  validate() {
    const validatorData = this.validator(this.valueOne, this.valueTwo);

    if (validatorData.length === 0) {
      this.clearErrors();
      this.isValid = true;
    } else {
      this.errors = validatorData;
      this.isValid = false;
    }
  }

  clearErrors() {
    this.errors = [];
  }
}

export class RadioInput {
  [key: string]: any;
  inputType: "radio";
  label: string;
  description: string[];
  altText: string;
  trailText: string;
  choices: string[];
  validator: SingleInputValidator;
  isValid: boolean;
  isRequired: boolean;
  value: string;
  errors: string[];

  constructor(params: RadioInputParams) {
    this.inputType = "radio";
    this.label = params.label;
    this.altText = params.altText;
    this.trailText = params.trailText;
    this.choices = params.choices;
    this.description = params.description;
    this.isRequired = params.isRequired;
    this.isValid = false;
    this.value = "";
    this.errors = [];

    if (params.isRequired) {
      this.validator = validateRadio;
    } else {
      this.validator = validateVoid;
    }
  }

  validate() {
    const validatorData = this.validator(this.value);

    if (validatorData?.length === 0) {
      this.clearErrors();
      this.isValid = true;
    } else {
      this.errors = validatorData;
      this.isValid = false;
    }
  }

  clearErrors() {
    this.errors = [];
  }
}

export class CheckboxInputGroup {
  [key: string]: any;
  inputType: "checkbox-group";
  label: string;
  altText: string;
  description: string;
  values: CheckboxInput[];
}

export class CheckboxInput {
  [key: string]: any;
  inputType: "checkbox"
  validator: BooleanValidator | SingleInputValidator;
  value: boolean;
  label: string
  description: string[];
  isRequired: boolean;
  isValid: boolean;
  errors: string[]


  constructor(label: string, description: string[], isRequired: boolean) {
    this.inputType = "checkbox"
    this.value = false;
    this.label = label;
    this.description = description;
    this.isRequired = isRequired;
    this.errors = [];

    if (isRequired) {
      this.isValid = false;
      this.validator = validateCheckbox;
    } else {
      this.isValid = true;
      this.validator = validateVoid;
    }
  }

};

export class ImageSelectInput {
  [key: string]: any;
  inputType: "image-select";
  validator: SelectValidator;
  label: string;
  altText: string;
  choices: ImageSelectChoice[];
  default: ImageSelectChoice;
  description: string[];
  isRequired: boolean;
  isValid: boolean;
  value: string;
  errors: string[];

  constructor(params: ImageSelectInputParams) {
    this.inputType = "image-select";
    this.label = params.label;
    this.altText = params.altText;
    this.choices = params.choices;
    this.default = params.default;
    this.description = params.description;
    this.isRequired = params.isRequired;
    this.isValid = false;
    this.value = params.default.value;
    this.errors = [];

    if (params.isRequired) {
      this.validator = validateSelect;
    } else {
      this.validator = validateVoid;
    }
  }

  clearErrors() {
    this.errors = [];
  }

  validate() {
    const validatorData = this.validator(this.value, this.default.value);

    if (validatorData?.length === 0) {
      this.clearErrors();
      this.isValid = true;
    } else {
      this.errors = validatorData;
      this.isValid = false;
    }
  }
}

export class ImageSelectChoice {
  imageUrl: string;
  imageAlt: string;
  value: string;
  bottomText: string;
  isDefault: boolean;

  constructor(params: ImageSelectChoiceParams) {
    this.imageUrl = params.imageUrl;
    this.imageAlt = params.imageAlt;
    this.bottomText = params.bottomText;
    this.value = params.value;
    this.isDefault = params.isDefault;
  }
}

export class PhoneInput {
  [key: string]: any;
  inputType: "phone";
  size: InputSize;
  label: string;
  description: string[];
  altText: string;
  placeholder: string;
  length: number;
  trailText: string;
  validator: TripleInputValidator;
  isValid: boolean;
  isRequired: boolean;
  valueOne: string;
  valueTwo: string;
  valueThree: string;
  value: string;
  errors: string[];

  constructor(params: TextInputParams) {
    this.inputType = "phone";
    this.label = params.label;
    this.validator = validatePhone;
    this.size = params.size;
    this.altText = params.altText;
    this.placeholder = params.placeholder;
    this.length = params.length;
    this.trailText = params.trailText;
    this.description = params.description;
    this.isRequired = params.isRequired;
    this.isUpper = params.isUpper;
    this.isValid = false;
    this.value = "";
    this.errors = [];
  }

  validate() {
    const validatorData = this.validator(this.valueOne, this.valueTwo, this.valueThree);

    if (validatorData.length === 0) {
      this.clearErrors();
      this.value = this.valueOne + this.valueTwo + this.valueThree
      this.isValid = true;

    } else {
      this.errors = validatorData;
      this.isValid = false;
    }
  }

  clearErrors() {
    this.errors = [];
  }
}

export class AddressInput {
  inputType: "address";
  label: string;
  validator: TripleInputValidator;
  size: string;


  constructor(params: TextInputParams) {
    this.inputType = "address",
      this.label = params.label,
      this.validator
  }
}
//***END INPUT DEFINITIONS***/

//***FORM DEFINITIONS***/

export type FormFormatParams = {

  id: string;
  heading: string;
  subheading: string;
  description: string[];
}

export class SubformData {
  meta: {
    id: string
    percentComplete: number;
    allValid: boolean;
  };
  inputs: {
    [key: string]: FormInput;
  };
  format: FormFormatParams

  constructor(inputs: { [key: string]: FormInput }, format: FormFormatParams) {
    this.meta = {
      id: format.id,
      percentComplete: 0,
      allValid: false,
    };
    this.inputs = inputs;
    this.format = format
  };

  calculateValid() {
    const dataKeys: string[] = Object.keys(this.inputs);
    let validCount = 0;

    dataKeys.forEach((key) => {
      if (this.inputs[key].isValid === true) {
        validCount++;
      }
    });

    if (validCount / dataKeys.length === 1) {
      this.meta.allValid = true;
    } else {
      this.meta.allValid = false;
    }

    this.meta.percentComplete = validCount / dataKeys.length;
  }
}


//*** END FORM DEFINITIONS***/
