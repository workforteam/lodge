import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HMOValuation from "../pages/HMOValuation/HMOValuation";
import PlanningApplications from "../pages/PlanningApplications/PlanningApplications";
import PostcodeTable from "../pages/PostcodeTable/PostcodeTable";
import PropertySearch from "../pages/PropertySearch/PropertySearch";
import SolidPrices from "../pages/SolidPrices/SolidPrices";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <PropertySearch />,
            },
            {
                path: '/property-search',
                element: <PropertySearch />,
            },
            {
                path: '/postcode-table',
                element: <PostcodeTable />,
            },
            {
                path: '/hmo-valuation',
                element: <HMOValuation />,
            },
            {
                path: '/solid-prices',
                element: <SolidPrices />,
            },
            {
                path: '/planning-applications',
                element: <PlanningApplications />,
            },
        ]
    }
])