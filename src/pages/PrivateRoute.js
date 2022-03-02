import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
	const { myUser } = useUserContext();
	return (
		<Route
			{...rest}
			render={() => (myUser ? children : <Redirect to="/" />)}
		/>
	);
};
export default PrivateRoute;
