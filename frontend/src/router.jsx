import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import Inicio from './views/Inicio';
import Log from './views/Log';
import Registro from './views/Registro';

const router= createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        // exporta inicio al componente Layout por medio de Oulet
        children:[
            {
                index: true,//permite ver el componente Inicio en el Layout
                element: <Inicio/>
            }
        ]
    },
    {
        path:'/auth', 
        element:<AuthLayout/>,
        // exporta login al componente AuthLayout por medio de Oulet
        children:[
            {
                path:'/auth/login',
                element:<Log/>
            },
            {
                path:'/auth/registro',
                element: <Registro/>
            }
        ]
    }
]);

export default router;