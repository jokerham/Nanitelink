import { FormikValues } from 'formik';

export enum FormVariant {
  MUIDefault,
  LabelOnLeft
}

export enum FieldType {
  TextField,
  TextArea,
  Select,
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

export type TFormBuilderProps = {
  initialValues: FormikValues
  onSubmit: (values: unknown) => void
  fields: TFormField[]
  variant?: FormVariant
  sections?: { seq: number, label: string }[]
}

export type TFormField = {
  section?: number
  type: FieldType
  name: string
  label: string
  description?: string
  required: boolean
  options?: {[key: string]: unknown}
  custom?: (values: TFormFieldCustom) => JSX.Element
}

export type TFormFieldCustom = {
  section?: number
  type: FieldType
  name: string
  label: string
  description?: string
  required: boolean
  options?: {[key: string]: unknown}
}

type TOnChangeHandler = {
  (e: React.ChangeEvent<unknown>): void;
  <T = string | React.ChangeEvent<unknown>>(field: T): T extends React.ChangeEvent<unknown> ? void : (e: string | React.ChangeEvent<unknown>) => void
}

type TOnBlurHandler = {
  (e: React.FocusEvent<unknown>): void;
  <T = unknown>(fieldOrEvent: T): T extends string ? (e: unknown) => void : void;
}

export type TRenderFieldProps = {
  field: TFormField,
  values: FormikValues,
  handleChange: TOnChangeHandler
  handleBlur: TOnBlurHandler
}

export type TFieldVariantProp = {
  variant: FormVariant
  id: string
  name: string
  label: string
  value: unknown
  required?: boolean
  onChange: TOnChangeHandler
  onBlur: TOnBlurHandler
  custom?: (values: TFormFieldCustom) => JSX.Element
  options?: {[key: string]: unknown}
}

export type TFieldProp = {
  id: string
  name: string
  label: string
  value: unknown
  required?: boolean
  onChange: TOnChangeHandler
  onBlur: TOnBlurHandler
  custom?: (values: TFormFieldCustom) => JSX.Element
  options?: {[key: string]: unknown}
}

/*



export interface IFieldProp {
  id: string
  name: string
  label?: string
  value: unknown
  required?: boolean
  onChange: {
    (e: React.ChangeEvent<unknown>): void;
    <T = string | React.ChangeEvent<unknown>>(field: T): T extends React.ChangeEvent<unknown> ? void : (e: string | React.ChangeEvent<unknown>) => void
  }
  onBlur: {
    (e: React.FocusEvent<unknown>): void;
    <T = unknown>(fieldOrEvent: T): T extends string ? (e: unknown) => void : void;
  }
  custom?: (values: IFormFieldCustom) => JSX.Element
  options?: {[key: string]: unknown}
}
*/