// customRJSFTheme.tsx
import { withTheme } from '@rjsf/core';
import { Theme as MuiV5Theme } from '@rjsf/mui';



const customRJSFTheme = {
  ...MuiV5Theme,
};

// This is a COMPONENT
const ThemedForm = withTheme(customRJSFTheme);
export default ThemedForm;

