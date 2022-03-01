import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import "./styles/index.css";

const domain: any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId: any = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);