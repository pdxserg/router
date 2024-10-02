import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtctedPage} from "../components/pages/ProtctedPage";
import {Login} from "../components/login/Login";
import * as React from "react";


export const PrivateRouter = () => {
	const isAuth = true
	return <>
		{isAuth ? <Outlet/> : <Navigate to={'/login'}/>}
	</>
};

const PATH = {
	PAGE: '/page!',
	ADIDAS: '/adidas',
	PUMA: '/puma',
	ABIBAS: '/abibas',
	PRICES: '/prices',
	ROUTES: '/:model/:id',
	ERROR: '/error',
	LOGIN: '/login',

} as const

const publickRoutes: RouteObject[] = [
	{
		path: PATH.ADIDAS,
		element: <Adidas/>,
	},
	{
		path: PATH.PUMA,
		element: <Puma/>,
	},
	{
		path: PATH.ABIBAS,
		element: <Abibas/>,
	},
	{
		path: PATH.PRICES,
		element: <Prices/>,
	},
	{
		path: PATH.ROUTES,
		element: <Model/>,
	},
	{
		path: PATH.LOGIN,
		element: <Login/>,
	},
	{
		path: PATH.ERROR,
		element: <Error404/>,
	},
]
const privateRoutes: RouteObject[] = [
	{
		path: PATH.PAGE,
		element: <ProtctedPage/>
	},
]


export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Navigate to={PATH.ERROR}/>,
		children: [
			...publickRoutes,
			{
				element:<PrivateRouter/>,
				children: privateRoutes
			}
		]
	}

]);

//--------------------------
// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App/>,
// 		errorElement: <Navigate to={PATH.ERROR}/>,
// 		children: [
// 			{
// 				path: PATH.ADIDAS,
// 				element: <Adidas/>,
// 			},
// 			{
// 				path: PATH.PUMA,
// 				element: <Puma/>,
// 			},
// 			{
// 				path: PATH.ABIBAS,
// 				element: <Abibas/>,
// 			},
// 			{
// 				path: PATH.PRICES,
// 				element: <Prices/>,
// 			},
// 			{
// 				path: PATH.ROUTES,
// 				element: <Model/>,
// 			},
// 			{
// 				path: PATH.LOGIN,
// 				element: <Login/>,
// 			},
// 			{
// 				path: PATH.ERROR,
// 				element: <Error404/>,
// 			},
//
// 			{
// 				path: PATH.PAGE,
// 				element: (
// 					<ProtectedRouter>
// 						<ProtctedPage/>
// 					</ProtectedRouter>
// 				)
// 			},
//
//
// 		]
// 	}
//
// ]);