import React, { useCallback, useEffect, useMemo, useState, type ChangeEvent } from 'react';
import FormField from './FormField';
import FormInputField from './FormInputField';
import type { FileWithPath } from 'react-dropzone';

type RegisterFormValues = {
  name: string;
  email: string;
  username: string;
  profile?: File;
};

type RegisterFormErrors = Partial<{
  name: string;
  email: string;
  username: string;
  profile?: string;
}>;

interface FileWithPreview extends FileWithPath {
	preview: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RegistrationForm = () => {
  const initialFormValues: RegisterFormValues = useMemo(() => {
    return {
      name: '',
      email: '',
      username: '',
    };
  }, []);

	const [file, setFile] = useState<FileWithPreview | null>(null);
  const [formValues, setFormValues] = useState<RegisterFormValues>(initialFormValues);
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	useEffect(() => {
		if (file) {
			setErrors((prevErrors) => {
				const newErrors = { ...prevErrors };
				delete newErrors['profile' as keyof RegisterFormErrors];
				return newErrors;
			});
		}
	}, [file])

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));

      // Clear error for the specific field as user types
      if (errors[name as keyof RegisterFormErrors]) {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[name as keyof RegisterFormErrors];
          return newErrors;
        });
      }
    },
    [errors],
  );

  const validateForm = useCallback(
    (values: RegisterFormValues): RegisterFormErrors => {
      const newErrors: RegisterFormErrors = {};

      // Required fields
      if (!values.name.trim()) {
        newErrors.name = 'Please enter your full name.';
      }
      if (!values.email.trim()) {
        newErrors.email = 'Please enter your email address.';
      } else if (!EMAIL_REGEX.test(values.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!values.username.trim()) {
        newErrors.username = 'Please enter your Github username.';
      } else if (values.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters long.';
      }

			if (!file) {
				newErrors.profile = 'Please upload your avatar.';
			}

      return newErrors;
    },
    [file],
  );

  const onSubmitRegistration = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const currentErrors = validateForm(formValues);
      setErrors(currentErrors);

      if (Object.keys(currentErrors).length === 0) {
        try {
          console.log('Form data submitted:', formValues);

          alert('Registration successful!');
          setFormValues(initialFormValues);
					setFile(null)
          setErrors({}); // Clear errors
        } catch (error) {
          console.error('Submission failed:', error);
          alert('An error occurred during registration. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setIsSubmitting(false);
      }
    },
    [formValues, validateForm, initialFormValues],
  );

  return (
    <form className="registration-form" onSubmit={onSubmitRegistration}>
			<FormInputField
				label="Upload Avatar"
        name="profile"
        htmlFor="profile"
        onChange={onInputChange}
				file={file}
				setFile={setFile}
				error={errors?.profile}
				caption='Upload your photo (JPG/PNG)'
      />

      <FormField
        label="Full Name"
        name="name"
        htmlFor="name"
        error={errors?.name}
        onChange={onInputChange}
        value={formValues.name}
        maxLength={100}
        type="text"
        placeholder="Full Name"
      />

      <FormField
        label="Email"
        name="email"
        htmlFor="email"
        error={errors?.email}
        onChange={onInputChange}
        value={formValues.email}
        maxLength={100}
        type="text"
        placeholder="example@email.com"
      />

      <FormField
        label="Github Username"
        name="username"
        htmlFor="username"
        error={errors?.username}
        onChange={onInputChange}
        value={formValues.username}
        maxLength={100}
        type="text"
        placeholder="@username"
      />

      <button
        type="submit"
        className="registration-form__submit-button"
        disabled={isSubmitting}
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default RegistrationForm;
