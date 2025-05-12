import { useTranslation } from 'next-i18next';

const rtlLanguages = ['ar', 'he', 'fa', 'ur']; // Add more RTL languages as needed

export const useDirection = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = rtlLanguages.includes(currentLanguage);
  const dir = isRTL ? 'rtl' : 'ltr';

  return { dir, isRTL };
};

// import { useTranslation } from 'next-i18next';

// export const useDirection = () => {
//   const { i18n } = useTranslation();
//   const currentLanguage = i18n.language;
//   const dir = i18n.dir(currentLanguage);
//   const isRTL = dir === 'rtl';

//   return { dir, isRTL };
// };
