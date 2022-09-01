
import './App.css';

import {BrowserRouter as Router, Navigate} from "react-router-dom";
import 'antd/dist/antd.min.css'
import Layout, {Header} from "antd/es/layout/layout";
import {AppRoutes} from "./AppRoutes";
import {NavBar} from "./info/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes>
          <Layout>
            <Header>
              <NavBar/>
            </Header>
          </Layout>
          <Navigate to="/"/>
        </AppRoutes>
      </Router>
    </div>
  );
}

export default App;
