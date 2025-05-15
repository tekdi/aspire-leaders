'use client';
import React, { useState } from 'react';
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

// interface CardProps {
//   parameters: {
//     format?: string;
//     title?: string;
//   };
// }

const FormBuilderComponent = () => {
  const [schema, setSchema] = useState('{}');
  const [uiSchema, setUiSchema] = useState('{}');
  const [formData, setFormData] = useState({});

  //upload file type support
  // const mods = {
  //   customFormInputs: {
  //     file: {
  //       type: "object",
  //       displayName: "File Upload",
  //       label: "File Upload",
  //       schema: {
  //         type: "string",
  //         format: "data-url",
  //         title: "Upload File",
  //       },
  //       uiSchema: {
  //         "ui:widget": "file",
  //       },
  //       category: "Custom",
  //       icon: "📁",
  //       defaultDataSchema: {
  //         type: "string",
  //         format: "data-url",
  //       },
  //       defaultUiSchema: {
  //         "ui:widget": "file",
  //       },
  //       matchIf: [],
  //       cardBody: function (props: CardProps) {
  //         const params = props.parameters;
  //         return (
  //           <div>
  //             <div>Format: {params.format}</div>
  //             <div>Title: {params.title}</div>
  //           </div>
  //         );
  //       },
  //     },
  //   },
  //   fieldSettings: {
  //     common: {
  //       "ui:options.page": {
  //         label: "Page Number",
  //         type: "number",
  //         helper: "Assign this field to a specific page number",
  //         default: 1,
  //       },
  //     },
  //   },
  // };

  return (
    <div className="container mt-4">
      <h2>Form Builder</h2>
      <FormBuilder
        schema={schema}
        uischema={uiSchema}
        onChange={(newSchema, newUiSchema) => {
          setSchema(newSchema);
          setUiSchema(newUiSchema);
        }}
        // mods={mods}
      />

      <hr />

      <h2>Preview Form</h2>
      <Form
        schema={JSON.parse(schema)}
        uiSchema={JSON.parse(uiSchema)}
        formData={formData}
        onChange={({ formData }) => setFormData(formData)}
        validator={validator}
      />
      {/* <hr />

      <h3>Generated JSON Schema</h3>
      <pre style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
        {JSON.stringify(JSON.parse(schema), null, 2)}
      </pre>

      <h3>Generated UI Schema</h3>
      <pre style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
        {JSON.stringify(JSON.parse(uiSchema), null, 2)}
      </pre> */}
    </div>
  );
};

export default FormBuilderComponent;
