import React from 'react';
import InfoIcon from '../assets/icons/icon-info.svg?react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  caption?: string;
  iconColorOnHover?: string;
  isFileInput?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  error,
  caption
}) => {
  const iconClasses = [
    'form-field__info-icon',
    error ? 'form-field__info-icon--error' : '',
  ].join(' ').trim();

  return (
    <div className="form-field">
      <label htmlFor={htmlFor} className="form-field__label">
        {label}
      </label>
      <input
          type={type}
          name={name}
          id={htmlFor}
          className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      {caption && <span className="form-field__caption"> <InfoIcon className={iconClasses} /> {caption}</span>}
      {error && <span className="form-field__error"> <InfoIcon className={iconClasses} /> {error}</span>}
    </div>
  );
};

export default FormField;
