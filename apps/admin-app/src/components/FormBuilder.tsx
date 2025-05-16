'use client';
import React, { useState } from 'react';
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder';
import validator from '@rjsf/validator-ajv8';
import ThemedForm from '../styles/customRJSFTheme';
import { CommonSegmentButtons, SegmentOption } from '@shared-lib';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Divider } from '@mui/material';

const FormBuilderComponent = () => {
  const [schema, setSchema] = useState('{}');
  const [uiSchema, setUiSchema] = useState('{}');
  const [formData, setFormData] = useState({});
  const [viewMode, setViewMode] = useState<'builder' | 'preview'>('builder');

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | string[],
  ) => {
    if (newValue !== null) {
      setViewMode(newValue as 'builder' | 'preview');
    }
  };

  const segmentOptions: SegmentOption[] = [
    {
      label: 'Builder',
      value: 'builder',
      image: <CheckIcon />, // or any icon
      imagePosition: 'start',
    },
    {
      label: 'Preview',
      value: 'preview',
      image: <CheckIcon />,
      imagePosition: 'start',
    },
  ];
  return (
    <Box mt={4}>
      <CommonSegmentButtons
        options={segmentOptions}
        value={viewMode}
        onChange={handleViewChange}
      />

      <Divider sx={{ my: 4 }} />

      {viewMode === 'builder' && (
        <Box className="customFormBuilder">
          <FormBuilder
            schema={schema}
            uischema={uiSchema}
            onChange={(newSchema, newUiSchema) => {
              setSchema(newSchema);
              setUiSchema(newUiSchema);
            }}
          />
        </Box>
      )}

      {viewMode === 'preview' && (
        <>
          <hr />
          <h2>Preview Form</h2>
          <ThemedForm
            schema={JSON.parse(schema)}
            uiSchema={JSON.parse(uiSchema)}
            formData={formData}
            onChange={({ formData }) => setFormData(formData)}
            validator={validator}
          />
        </>
      )}
    </Box>
  );
};

export default FormBuilderComponent;
