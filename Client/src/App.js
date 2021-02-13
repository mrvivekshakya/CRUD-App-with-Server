import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AddUser from './Containers/AddUser';
import addUser from './Containers/AddUser';
import AllUser from './Containers/AllUser';
import Home from './Containers/Home';
import RemoverUser from './Containers/RemoveUser';
import UpdateUser from './Containers/UpdateUser';
import Header from './Components/Main Components/Header';
import LeftMenu from './Components/Main Components/LeftMenu';
import './css/style.css';   

const urls = [
    {
        url: "/",
        value: "Home",
        component: Home
    },
    {
        url: "/AddUser",
        value: "Add User",
        component: AddUser
    },
    {
        url: "/UpdateUser",
        value: "Update User",
        component: UpdateUser
    },
    {
        url: "/AllUser",
        value: "Show All User",
        component: AllUser
    },
    {
        url: "/DeleteUser",
        value: "Delete User",
        component: RemoverUser
    }
]

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <><BrowserRouter>
                <div className="container-fluid bg-danger">
                    <Header title="Master User" caption="Welcome to Master User Dashboard" />
                    <div className="row">
                        <div className="col-sm-3 bg-white" style={{backgroundColor:"white", height:"500px"}}>
                           <LeftMenu urls={urls} />
                        </div>
                        <div className="col-sm-9">
                            {
                                urls ? urls.map((url,index) => {
                                    return <Route exact path={url.url} component={url.component} />
                                }) : null
                            }
                        </div>
                    </div>
                </div>
                </BrowserRouter></>
        );
    }
}

export default App;