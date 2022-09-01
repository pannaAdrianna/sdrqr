import {Route, Routes} from "react-router-dom";
import MyIndex from "./MyIndex";
import Dashboard from "./lenting/Dashboard";


export const AppRoutes = () => {


    return (

        <Routes>

            {/*info*/}
            <Route exact path='/' element={<MyIndex/>}/>
            <Route exact path='/start' element={<Dashboard/>}/>




        </Routes>


    )
}
