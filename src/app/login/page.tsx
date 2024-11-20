import React from "react";
import LoginForm from "@/components/LoginForm";
import { Stack, Box } from "@mui/material";

const Register = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      className="animate__animated animate__backInDown"
    >
      <Box
        sx={{
          height: "713px",
          width: "1024px",
          backgroundImage: "url(/images/phish_tickets.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <LoginForm />
    </Stack>
  );
};

export default Register;
