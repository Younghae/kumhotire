"use client";
import { useState, useEffect, FormEvent, useRef } from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import { useRouter } from 'next/navigation'; // 수정: next/navigation에서 next/router로 변경

const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!isMounted.current) {
        return;
      }

      if (response.ok) {
        const data = await response.json();
        if (data.Status === "Success") {
          router.push('/login');
        }
      } else {
        console.error('Failed to send request');
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <TextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              이메일 보내기
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ForgotPassword;
