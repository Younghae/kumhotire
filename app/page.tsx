import * as React from "react";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main>
      <div>
        <Button variant="contained" href="/login">
          login
        </Button>
        <Button variant="contained" href="/input">
          input
        </Button>
        <Button variant="contained" href="/login_gyurye">
          login_gyurye
        </Button>
      </div>
    </main>
  );
}
