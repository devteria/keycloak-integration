import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import keycloak from "./keycloak";
import { Box, CircularProgress, Typography } from "@mui/material";

const Main = () => {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "check-sso",
      })
      .then((authenticated) => {
        setKeycloakInitialized(true);
      })
      .catch(() => {
        console.error("Authenticated Failed");
      });
  }, []);

  if (!keycloakInitialized) {
    return  (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress></CircularProgress>
        </Box>
      </>
    );
  }

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
