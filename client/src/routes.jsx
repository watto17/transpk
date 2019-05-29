import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from "react";
import Spinner from './Components/molecules/loader';

const Login = lazy(() => (import('./modules/Login/login')));
const Team  = lazy(() => (import('./modules/Customer')));
const addCustomer  = lazy(() => (import('./modules/Customer/addCustomer')));
const editCustomers  = lazy(() => (import('./modules/Customer/editCustomer')));

const Expenses= lazy(()=>(import('./modules/Expenses')))
const Packages= lazy(()=>(import('./modules/Packages')))



const ProtectedRoute = lazy(() => (import('./Components/molecules/protectedRoute')));
const createRoutes = () => (
    <Suspense fallback={<Spinner />}>
        <Switch>
            
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/dashboard" component={Team} />
            <Route exact={true} path="/packages" component={Packages} />
            <Route exact={true} path="/expenses" component={Expenses} />
            <Route exact={true} path="/customers" component={Team} />
            <Route exact={true} path="/addCustomers" component={addCustomer} />
            <Route exact={true} path="/editCustomers/:id" component={editCustomers} />
           
        </Switch>
    </Suspense>
);
export default createRoutes;