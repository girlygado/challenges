import React, { useEffect, useCallback, useRef } from 'react';
import { useDropzone, type FileWithPath } from 'react-dropzone';
import InfoIcon from '../assets/images/icon-info.svg?react';
import UploadIcon from '../assets/images/icon-upload.svg?react';

interface FileWithPreview extends FileWithPath {
  preview: string;
}

interface FormInputFieldProps {
  label: string;
  htmlFor: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  caption?: string;
  file: FileWithPreview | null;
  setFile: React.Dispatch<React.SetStateAction<FileWithPreview | null>>;
}

const FormInputField: React.FC<FormInputFieldProps> = ({
  label,
  htmlFor,
  error,
  caption,
  file,
  setFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );
    setFile(filesWithPreview[0] ?? null);
  }, [setFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
  });

  useEffect(() => {
    if (file) {
      return () => URL.revokeObjectURL(file.preview);
    }
  }, [file]);

  const onRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
  };

  const onChangeImage = () => {
    fileInputRef.current?.click();
  };

  const iconClasses = error ? 'form-field__info-icon--error' : 'form-field__info-icon';

  return (
    <div className="form-field">
      <label htmlFor={htmlFor} className="form-field__label">
        {label}
      </label>
      <div className="form-field__avatar">
        <div {...getRootProps({ className: 'form-field__dropzone' })}>
          <input ref={fileInputRef} {...getInputProps()} />
          {isDragActive ? (
            <p className="form-field__caption">Drop the files here ...</p>
          ) : file ? (
            <div className="form-field__avatar__preview">
              <img
                src={file.preview}
                className="form-field__avatar__image"
                alt="Profile Avatar"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
              <div className="form-field__avatar__actions">
                <button
                  type="button"
                  className="form-field__avatar__actions__button"
                  onClick={onRemoveImage}
                >
                  Remove Image
                </button>
                <button
                  type="button"
                  className="form-field__avatar__actions__button"
                  onClick={onChangeImage}
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <div className="form-field__avatar__preview">
              <UploadIcon className="form-field__dragzone__icon" />
              <p className="form-field__dragzone__caption">Drop the files here ...</p>
            </div>
          )}
        </div>
      </div>
     {!file && !error && caption && (
        <span className="form-field__caption">
          <InfoIcon className={iconClasses} />
          {caption}
        </span>
      )}
      {error && <span className="form-field__error"><InfoIcon className={iconClasses} /> {error}</span>}
    </div>
  );
};

export default FormInputField;
