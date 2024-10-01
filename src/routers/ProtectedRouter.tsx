// @flow
import * as React from 'react';
import {ProtctedPage} from "../components/pages/ProtctedPage";
import {Error404} from "../components/pages/Error404";
import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
children:ReactNode
};
export const ProtectedRouter = (props: Props) => {
	const isLogged= false


	return (
		<div>
			{isLogged
				? props.children
				: <Navigate to={'/error'}/>}
		</div>
	);
};

