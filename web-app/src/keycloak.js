import Keycloak from "keycloak-js";
import { KEYCLOACK_CONFIG } from "./configurations/configuration";

const keycloak = new Keycloak({
  url: KEYCLOACK_CONFIG.url,
  realm: KEYCLOACK_CONFIG.realm,
  clientId: KEYCLOACK_CONFIG.clientId,
});

export default keycloak;
