"use client";

import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [FormData, setFormData] = React.useState({
    emid: "",
    id: "",
    password: "",
    name: "",
    email: "",
    dept: "",
    office: "",
    team: "",
    rank: "",
    role: "",
  });

  const handleFormChange = (event: any) => {
    const { id, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: id === "" ? checked : value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async () => {
    if (
      !FormData.emid ||
      !FormData.id ||
      !FormData.password ||
      !FormData.name ||
      !FormData.email ||
      !FormData.dept ||
      !FormData.office ||
      !FormData.team ||
      !FormData.rank ||
      !FormData.role
    ) {
      alert("모든 필수 입력 항목을 작성해주세요.");
      return;
    }
    const Userdata = await axios.post("http://localhost:8000/User", {
      emid: FormData.emid,
      id: FormData.id,
      password: FormData.password,
      name: FormData.name,
      email: FormData.email,
      dept: FormData.dept,
      office: FormData.office,
      team: FormData.team,
      rank: FormData.rank,
      role: FormData.role,
      code: "",
    });
    alert(FormData.id + "로 회원가입이 완료되었습니다.");
    console.log(FormData);
    router.push("/login");
  };

  return (
    <Container maxWidth="xl">
      <Grid sx={{ m: 5 }}>
        <Image src="/logo.png" width={150} height={50} alt="kumhotire logo" />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            TCI 통합 모니터링 시스템 회원가입
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid sx={{ width: "30vw" }}>
            <Item>
              <Grid sx={{ m: 1 }} />
              <TextField
                label="본부를 작성해주세요."
                variant="filled"
                fullWidth
                required
                id="dept"
                size="small"
                value={FormData.dept}
                onChange={handleFormChange}
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                label="부문을 작성해주세요."
                variant="filled"
                fullWidth
                required
                id="office"
                size="small"
                value={FormData.office}
                onChange={handleFormChange}
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                label="팀을 작성해주세요."
                variant="filled"
                fullWidth
                required
                id="team"
                size="small"
                value={FormData.team}
                onChange={handleFormChange}
              />
              <Grid sx={{ m: 1 }} />
            </Item>
          </Grid>
          <Grid sx={{ m: 1 }} />
          <Grid sx={{ width: "30vw" }}>
            <Item>
              <TextField
                label="사번을 작성해주세요."
                variant="filled"
                fullWidth
                required
                id="emid"
                size="small"
                value={FormData.emid}
                onChange={handleFormChange}
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                id="id"
                label="ID를 작성해주세요."
                variant="filled"
                fullWidth
                required
                value={FormData.id}
                size="small"
                onChange={handleFormChange}
              />
              <Grid item sx={{ m: 1 }} />
              <FormControl variant="filled" fullWidth size="small" required>
                <InputLabel htmlFor="password">
                  비밀번호를 작성해주세요.
                </InputLabel>
                <FilledInput
                  id="password"
                  value={FormData.password}
                  onChange={handleFormChange}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Grid sx={{ m: 1 }} />
              <TextField
                id="name"
                value={FormData.name}
                onChange={handleFormChange}
                label="이름을 작성해주세요."
                variant="filled"
                fullWidth
                required
                size="small"
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                id="email"
                value={FormData.email}
                onChange={handleFormChange}
                label="e-mail을 작성해주세요."
                variant="filled"
                fullWidth
                required
                size="small"
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                id="rank"
                value={FormData.rank}
                onChange={handleFormChange}
                label="직책을 작성해주세요."
                variant="filled"
                fullWidth
                required
                size="small"
              />
              <Grid sx={{ m: 1 }} />
              <TextField
                id="role"
                value={FormData.role}
                onChange={handleFormChange}
                label="직급을 작성해주세요."
                variant="filled"
                fullWidth
                required
                size="small"
              />
              <Grid sx={{ m: 1 }} />
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                sx={{
                  width: "100%",
                  height: "50px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}>
                회원가입
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
