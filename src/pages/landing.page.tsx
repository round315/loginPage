import {
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';

import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import mainImage from '../image/main.jpg';

import Header from './header';

const MainContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: "center",
  backgroundColor: 'grey',
  backgroundImage: '../image/main.jpg',
  alignItems: 'center',
  height: "100vh"
}))



const LandingPage: FC = () => {

  // 👇 JSX to be rendered
  return (
    <>
      <div>
        <Header/>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <MainContainer>
                  <Typography variant="h2">
                    Welcome my test project
                  </Typography>
                </MainContainer>
                
            </Grid>
          </Grid>
        </div>
    </div>
    </>
  );
};

export default LandingPage;
