import { Alert, Box, Card, Snackbar, Typography } from "@mui/material";
import Scene from "./Scene";
import keycloak from "../keycloak";
import { useEffect, useState } from "react";
import { getMyProfile } from "../services/userService";
import LineItem from "../components/LineItem";

export default function Home() {
  const [profile, setProfile] = useState({});
  const [snackSeverity, setSnackSeverity] = useState("info");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  const getProfile = async () => {
    try {
      const response = await getMyProfile();
      const data = response.data;

      setProfile(data.result);
    } catch (error) {
      const errorResponse = error.response?.data;
      setSnackSeverity("error");
      setSnackBarMessage(errorResponse?.message ?? error.message);
      setSnackBarOpen(true);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log("AccessToken:", keycloak.token);

  return (
    <>
      <Snackbar
        open={snackBarOpen}
        onClose={handleCloseSnackBar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <Scene>
        <Card
          sx={{
            minWidth: 350,
            maxWidth: 500,
            boxShadow: 3,
            borderRadius: 2,
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                mb: "40px",
              }}
            >
              Welcome back to Devteria, {profile.username} !
            </Typography>
            <LineItem header={"Username"} data={profile.username}></LineItem>
            <LineItem header={"Email"} data={profile.email}></LineItem>
            <LineItem header={"User Id"} data={profile.userId}></LineItem>
            <LineItem header={"Profile Id"} data={profile.profileId}></LineItem>
            <LineItem header={"First Name"} data={profile.firstName}></LineItem>
            <LineItem header={"Last Name"} data={profile.lastName}></LineItem>
            <LineItem header={"Date of birth"} data={profile.dob}></LineItem>
          </Box>
        </Card>
      </Scene>
    </>
  );
}
