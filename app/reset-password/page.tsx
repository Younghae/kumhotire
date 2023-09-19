"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import { useRouter } from 'next/navigation';
import { NextPage } from "next";
import axios, { isCancel } from "axios";

const ResetPassword: NextPage = (): JSX.Element => { 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
      cancelToken.cancel("Component unmounted");
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isMounted) {
      axios.post('http://localhost:3000/api/reset-password', { password, confirmPassword }, { cancelToken: cancelToken.token })
        .then(res => {
          if (res.data.message === "Success") {
            router.push('/login');
          }
        })
        .catch(err => {
          if (isCancel(err)) {
            console.log("Request canceled", err.message);
          } else {
            console.log(err);
          }
        });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <TextField 
              label="New Password" 
              variant="outlined" 
              fullWidth 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Grid>
          <Grid item>
            <TextField 
              label="Confirm Password" 
              variant="outlined" 
              fullWidth 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ResetPassword;
