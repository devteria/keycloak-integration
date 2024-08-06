import keycloak from "../keycloak";

export const logOut = () => {
  keycloak.logout();
};
