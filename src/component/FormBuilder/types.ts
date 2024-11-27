import { FormikValues } from 'formik';

export enum FormVariant {
  MUIDefault,
  LabelOnLeft
}

export enum FieldType {
  TextField,
  TextArea,
  Select,
  List,
  Radio,
  Checkbox,
  Date,
  Time,
  DateTime,
  File,
  Image,
  Video,
  Audio,
  Password,
  Hidden,
  Custom
}

export type TSection = {
  seq: number, 
  label: string
}

export type TFormBuilderProps = {
  initialValues: FormikValues
  onSubmit: (values: unknown) => void
  fields: TFormField[]
  variant?: FormVariant
  sections?: TSection[]
}

export type TOptionItem = { 
  value: string
  label: string
};

type TOnChangeHandler = {
  (e: React.ChangeEvent<unknown>): void;
  <T = string | React.ChangeEvent<unknown>>(field: T): T extends React.ChangeEvent<unknown> ? void : (e: string | React.ChangeEvent<unknown>) => void
}

type TOnBlurHandler = {
  (e: React.FocusEvent<unknown>): void;
  <T = unknown>(fieldOrEvent: T): T extends string ? (e: unknown) => void : void;
}

export interface IBaseField {
  section: number;
  type: FieldType;
  name: string;
  label: string;
  description?: string;
  required: boolean;
}

// List field type
export interface IListField extends IBaseField {
  type: FieldType.List;
  options: {
    multiple: boolean;
    enableSorts: boolean;
    data: TOptionItem[];
  };
}

// Text field type
export interface ITextField extends IBaseField {
  type: FieldType.TextField | FieldType.TextArea | FieldType.Checkbox | FieldType.Custom;
}

// Select field type
export interface ISelectField extends IBaseField {
  type: FieldType.Select;
  options: {
    data: TOptionItem[];
  };
}

// Custom field type
export interface ICustomField extends IBaseField {
  custom?: (values: FormikValues) => JSX.Element
  options?: {[key: string]: unknown}
}

export type TSectionsProps = {
  variant: FormVariant
  formik: TFormik,
  section: TSection,
  fields: TFormField[]
}

export type TFormField = 
  IListField | 
  ITextField | 
  ISelectField | 
  ICustomField;

export type TSetFieldValue = (field: string, value: unknown, shouldValidate?: boolean) => void;

export type TFormik = {
  values: FormikValues
  handleChange: TOnChangeHandler
  handleBlur: TOnBlurHandler
  setFieldValue: TSetFieldValue
}

export type TFormFieldProps = {
  variant: FormVariant
  formik: TFormik
  field: TFormField
}