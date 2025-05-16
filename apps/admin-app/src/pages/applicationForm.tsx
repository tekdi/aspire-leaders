'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import loginImg from '../../public/assets/aspireLogo.png';
import Image from 'next/image';

// Dynamically import FormBuilderComponent on the client side only
const FormBuilder = dynamic(() => import('../components/FormBuilder'), {
  ssr: false,
});
const applicationForm = () => {
  return (
    <Grid container minHeight={'100dvh'}>
      <Grid item xs={2} bgcolor={'customTextColors.bgColor'}>
        <Box display={'flex'} justifyContent={'center'} my={'24px'}>
          <Box
            style={{ maxWidth: '185px', width: '100%' }}
            textAlign={'center'}
            maxWidth={'185px'}
            width={'100px'}
          >
            <Image
              src={loginImg}
              layout="responsive"
              width={185}
              alt="aspire logo"
            />
          </Box>
        </Box>
        <Box pl={'7px'} bgcolor={'#007D80'} my={'40px'}>
          <Box bgcolor={'white'} py={'12px'} pl={'30px'} sx={{
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px'
          }}>
            <Typography fontSize={'18px'} fontWeight={'400'} color={'black'}>
              My Form
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Typography variant="headlineMedium" mb={3}>
              Form Builder
            </Typography>
            <FormBuilder />
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default applicationForm;
