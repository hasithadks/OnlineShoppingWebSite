import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (

            <div className="container">
                <div style={{width:'70%', marginLeft:'15%'}}>
                    <hr/>
                    <h2>Reset Password</h2>
                    <hr/>
                </div>

                <form>
                    <table style={{width:'100%', marginLeft:'30%'}} className="col-12">
                        <tr>
                            <td style={{width:'auto'}}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left',marginLeft:'-2%'}}>Enter your Email</label>
                                    <div className="col-sm-5">
                                        <input type="email" className="form-control" id="inputEmail3" required placeholder="Email"

                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <div className="form-group" style={{marginTop:'1px', float:'left'}}>
                                <div className="col-sm-5">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </tr>
                    </table>
                </form>
            </div>

        )
    }
}