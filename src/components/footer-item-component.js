import React, {Component} from 'react';

export default class ItemFooter extends Component{
    render(){
        return(
            <div>
                <footer className="page-footer font-small pt-4" style={{backgroundColor:"#ececec"}}>
                    <div style={{color:'black'}} className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> amazonlanka.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}
