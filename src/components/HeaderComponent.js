import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{

    render(){
        return(
            <>
            <Navbar dark>
                <div className='container'>
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Shree Hari</h1>
                            <p>Come have the best of best delicasies here</p>
                        </div>
                    </div>

                </div>
            </Jumbotron>
            </>
        );
    }
}


export default Header;