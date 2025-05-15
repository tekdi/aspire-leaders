import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useRef, useState } from 'react';
import appLogo from '../../public/images/appLogo.png';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getUserDetails, getUserId, login } from '../services/LoginService';
import Loader from './components/Loader';
import { useDirection } from '../hooks/useDirection';
import config from '../../config.json';
import ReactGA from 'react-ga4';
import { Snackbar, Alert } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type LoginPageProps = {
  onLoginSuccess: (response: any) => void;
  handleRedirect: (response: any) => void;
  handleHomeRedirect: (response: any) => void;
  loginText: string;
  projectName: string;
  loginImg?: any;
  register?: boolean;
};

const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  handleRedirect,
  loginText,
  handleHomeRedirect,
  projectName,
  loginImg,
  register,
}) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ErrorMsg, setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [language, setLanguage] = useState(selectedLanguage);
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const { isRTL } = useDirection();
  const router = useRouter();

  const passwordRef = useRef<HTMLInputElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let lang;
      if (localStorage.getItem('preferredLanguage')) {
        lang = localStorage.getItem('preferredLanguage') ?? 'en';
      } else {
        lang = 'en';
      }
      setLanguage(lang);
      setLang(lang);
      const token = localStorage.getItem('token');
      const tenant = localStorage.getItem('tenantName');
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!usernameError && !passwordError) {
      setLoading(true);

      try {
        const response = await login({ username, password });

        if (response?.result?.access_token) {
          if (typeof window !== 'undefined' && window.localStorage) {
            const token = response.result.access_token;
            const refreshToken = response?.result?.refresh_token;

            if (token) {
              localStorage.setItem('token', token);
            }

            if (rememberMe) {
              localStorage.setItem('refreshToken', refreshToken);
            } else {
              localStorage.removeItem('refreshToken');
            }

            // handleHomeRedirect(response);
            // console.log('dash');
            const userResponse = await getUserId();

            const userId = userResponse.userId;

            localStorage.setItem('userId', userId);

            if (userId) {
              const userDetails = await getUserDetails(userId);
              setLoading(false);
              handleHomeRedirect(response);
            }
          }
        }
      } catch (error: any) {
        setErrorMsg(error.response.data.params.errmsg);
        setOpen(true);
        setLoading(false);
      }
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    setUsername(trimmedValue);
    const containsSpace = /\s/.test(trimmedValue);
    setUsernameError(containsSpace);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleChange = (event: SelectChangeEvent) => {
    const newLocale = event.target.value;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('preferredLanguage', newLocale);
      setLanguage(event.target.value);
      ReactGA.event('select-language-login-page', {
        selectedLanguage: event.target.value,
      });
      setSelectedLanguage(newLocale);
      router.push('/login', undefined, { locale: newLocale });
    }
  };

  const darkMode =
    typeof window !== 'undefined' && window.localStorage
      ? localStorage.getItem('mui-mode')
      : null;

  return (
    <Box sx={{ overflowY: 'auto' }}>
      <Box
        width={'100% !important'}
        height={'100dvh'}
        px={'30px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box style={{ maxWidth: '316px', width: '100%' }} textAlign={'center'}>
          {loginImg && (
            <Image
              className="login-img"
              src={loginImg}
              alt="Login Image"
              layout="responsive"
              width={316}
            />
          )}
          {projectName && (
            <Typography variant="h2" my={3}>
              {projectName}
            </Typography>
          )}

          {loginText && <Typography variant="h4">{loginText}</Typography>}
        </Box>
        <Box>
          <form onSubmit={handleFormSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  bgcolor={theme.palette.warning.A200}
                  borderRadius={'10px'}
                  sx={{
                    '@media (max-width: 900px)': {
                      display: 'none',
                    },
                  }}
                >
                  {loading && (
                    <Loader showBackdrop={true} loadingText={'Loading'} />
                  )}
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    '@media (max-width: 700px)': {
                      width: '100%',
                    },
                  }}
                >
                  {/* <Box mt={'0.5rem'}>
                    <FormControl sx={{ m: '1rem 0 1rem' }}>
                      <Select
                        inputProps={{
                          'aria-label': 'Select Language',
                        }}
                        className="select-languages"
                        value={i18n.language}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          borderRadius: '0.5rem',
                          width: '117px',
                          height: '32px',
                          marginBottom: '0rem',
                          fontSize: '14px',
                          '& .MuiSelect-icon': {
                            right: isRTL ? 'unset' : '7px',
                            left: isRTL ? '7px' : 'unset',
                          },
                        }}
                      >
                        {config?.languages.map((lang) => (
                          <MenuItem value={lang.code} key={lang.code}>
                            {lang.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box> */}
                  <Box
                    marginY={'1rem'}
                    sx={{
                      width: '668px',
                      '@media (max-width: 700px)': {
                        width: '100%',
                      },
                      '@media (min-width: 900px)': {
                        width: '100%',
                      },
                    }}
                  >
                    <TextField
                      id="username"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // label={t('LOGIN_PAGE.USERNAME')}
                      label={'Username'}
                      // placeholder={t('LOGIN_PAGE.USERNAME_PLACEHOLDER')}
                      placeholder={'Enter Username'}
                      value={username}
                      onChange={handleUsernameChange}
                      error={usernameError}
                      className="userName"
                      fullWidth
                    />
                  </Box>
                  <Box
                    sx={{
                      width: '668px',
                      '@media (max-width: 768px)': {
                        width: '100%',
                      },
                      '@media (min-width: 900px)': {
                        width: '100%',
                      },
                    }}
                    margin={'2rem 0 0'}
                  >
                    <TextField
                      fullWidth
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onClick={() => setScrolling(!scrolling)}
                      className="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      // label={t('LOGIN_PAGE.PASSWORD')}
                      label={'Passoword'}
                      // placeholder={t('LOGIN_PAGE.PASSWORD_PLACEHOLDER')}
                      placeholder={'Enter Passoword'}
                      value={password}
                      onChange={handlePasswordChange}
                      error={passwordError}
                      inputRef={passwordRef}
                    />
                  </Box>

                  <Box
                    color={'info.linkColor'}
                    sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      mt: 1,
                      lineHeight: '20px',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={handleRedirect}
                  >
                    {/* {t('LOGIN_PAGE.FORGOT_PASSWORD')} */}
                    Forgot Password?
                  </Box>

                  {/* <Box marginTop={'1.2rem'} className="">
                    <Checkbox
                      // color="info"
                      onChange={(e) => setRememberMe(e.target.checked)}
                      checked={rememberMe}
                      inputProps={{ 'aria-label': 'Remember Me' }}
                    /> */}
                  {/* <button
                      type="button"
                      style={{
                        cursor: 'pointer',
                        color: theme.palette.warning['300'],
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        font: 'inherit',
                      }}
                      className="fw-400"
                      onClick={() => {
                        setRememberMe(!rememberMe);
                      }}
                    >
                      Remember Me
                    </button> */}
                  {/* {t('LOGIN_PAGE.REMEMBER_ME')} */}
                  {/* </Box> */}
                  <Box
                    alignContent={'center'}
                    textAlign={'center'}
                    margin={'2rem 0'}
                    width={'100%'}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth={true}
                      ref={loginButtonRef}
                    >
                      {/* {t('LOGIN_PAGE.LOGIN')} */}
                      Login
                    </Button>
                  </Box>

                  {register && (
                    <Box>
                      <Divider />
                      <Box
                        display="flex"
                        justifyContent="center"
                        gap={1}
                        alignItems="center"
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="20px"
                        mt={1}
                      >
                        Don’t have an Account?
                        <Box
                          component="span"
                          fontSize="14px"
                          fontWeight="400"
                          lineHeight="20px"
                          color={'info.linkColor'}
                          sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                          }}
                          onClick={handleRedirect}
                        >
                          Register
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: '100%', color: 'white', backgroundColor: 'red' }}
          icon={<ErrorOutlineIcon sx={{ color: 'white' }} />}
        >
          {' '}
          {ErrorMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
