import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InputField } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <InputField ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
