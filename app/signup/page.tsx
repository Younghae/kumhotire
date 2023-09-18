"use client";
import * as React from "react";
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
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const dept = [
  { label: "경영본부" },
  { label: "생산본부" },
  { label: "연구본부" },
];

const office = [{ label: "경영부" }, { label: "생산부" }, { label: "연구부" }];

const team = [
  { label: "경영지원팀" },
  { label: "생산1팀" },
  { label: "연구1팀" },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
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
      [id]: id === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(FormData); // Submit form data to server here
  };

  return (
    <Container maxWidth="xl">
      <Grid container direction="column">
        <Grid sx={{ m: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            회원가입
          </Typography>
        </Grid>
        {/* <form onSubmit={handleSubmit}> */}
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
                sx={{ width: "100%", fontWeight: "bold" }}>
                회원가입
              </Button>
            </Item>
          </Grid>
        </Grid>
        {/* </form> */}
      </Grid>
    </Container>
  );
}
