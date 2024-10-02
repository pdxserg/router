import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtctedPage} from "../components/pages/ProtctedPage";
import {ProtectedRouter} from "./ProtectedRouter";


const PATH = {
	PAGE: '/page!',
	ADIDAS: '/adidas',
	PUMA: '/puma',
	ABIBAS: '/abibas',
	PRICES: '/prices',
	ROUTES: '/:model/:id',
	ERROR: '/error'

} as const

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Navigate to={PATH.ERROR}/>,
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
				path: PATH.ERROR,
				element: <Error404/>,
			},

			{
				path: PATH.PAGE,
				element: (
					<ProtectedRouter>
						<ProtctedPage/>
					</ProtectedRouter>
				)
			},


		]
	}

]);

// createRoot(document.getElementById("root")).render(
// 	<RouterProvider router={router} />
// );