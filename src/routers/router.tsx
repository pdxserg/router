import {createBrowserRouter, Route} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtctedPage} from "../components/pages/ProtctedPage";


const PATH = {
	PAGE: '/page',
	ADIDAS: '/adidas',
	PUMA: '/puma',
	ABIBAS: '/abibas',
	PRICES: '/prices',
	ROUTES: '/:model/:id'
} as const

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Error404/>,
		children: [
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
				path: PATH.PAGE,
				element: <ProtctedPage/>,
			}

		]
	}

]);

// createRoot(document.getElementById("root")).render(
// 	<RouterProvider router={router} />
// );