import React, {Component} from "react";
import axios from "axios";

export default class Editprofile extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeBYear = this.onChangeBYear.bind(this);
        this.onChangeBMonth = this.onChangeBMonth.bind(this);
        this.onChangeBDay = this.onChangeBDay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            user_id: '',
            user_email : '',
            user_password: '',
            user_username :'',
            user_phone : '',
            user_gender :'',
            user_image : '',
            user_b_year: '',
            user_b_month: '',
            user_b_day: '',

          //  users:[]
        };
    }

    componentDidMount() {
    if(localStorage.getItem('user_id') != null){
    axios.get('http://localhost:5000/users/'+ localStorage.getItem('user_id'))
                .then(response =>{
                    this.setState({
                        user_id : localStorage.getItem('user_id'),
                        user_email : response.data.user_email,
                        user_password : response.data.user_password,
                        user_username : response.data.user_username,
                        user_phone : response.data.user_phone,
                      //  user_gender : response.data.user_gender,
                        user_image : response.data.user_image,
                       // user_b_year : response.data.user_b_year,
                       // user_b_month : response.data.user_b_year,
                       // user_b_day : response.data.user_b_day,
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    }

    onChangeEmail(e){
        this.setState({
            user_email: e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            user_username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            user_password: e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            user_phone: e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            user_gender: e.target.value
        });
    }

    onChangeImage(e){
        this.setState({
            user_image: e.target.value
        });
    }

    onChangeBYear(e){
        this.setState({
            user_b_year:  e.target.value
        });
    }

    onChangeBMonth(e){
        this.setState({
            user_b_month:  e.target.value
        });
    }

    onChangeBDay(e){
        this.setState({
            user_b_day:  e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            user_id: this.state.user_id,
            user_email: this.state.user_email,
            user_username: this.state.user_username,
            user_password: this.state.user_password,
            user_phone: this.state.user_phone,
            user_gender: this.state.user_gender,
            user_image: this.state.user_image,
            user_b_year: this.state.user_b_year,
            user_b_month: this.state.user_b_month,
            user_b_day: this.state.user_b_day
        };

        console.log(`id:${this.state.user_id}`);
        console.log(`email:${this.state.user_email}`);
        console.log(`username:${this.state.user_username}`);
        console.log(`password:${this.state.user_password}`);
        console.log(`phone:${this.state.user_phone}`);
        console.log(`gender:${this.state.user_gender}`);
        console.log(`image:${this.state.user_image}`);

        axios.post('http://localhost:5000/users/update/'+this.state.user_id,user)
            .then(res => console.log((res.data)) && alert("Successfully updated!"));

           // localStorage.clear();
            //localStorage.setItem('user_id',props.user._id),
            localStorage.setItem('user_email',this.state.user_email);
            localStorage.setItem('user_username',this.state.user_username);
            localStorage.setItem('user_password',this.state.user_password);
            localStorage.setItem('user_phone',this.state.user_phone);
            localStorage.setItem('user_gender',this.state.user_gender);
            localStorage.setItem('user_image',this.state.user_image);
            localStorage.setItem('user_b_year',this.state.user_b_year);
            localStorage.setItem('user_b_month',this.state.user_b_month);
            localStorage.setItem('user_b_day',this.state.user_b_day);
    }


    render() {
        return (

            <div>
                <div className="container1">
                    <div style={{width:'70%', marginLeft:'15%'}}>
                        <hr/>
                            <h1>Update Profile</h1>
                        <hr/>
                    </div>

                    <form style={{marginBottom:'48px'}} onSubmit={this.onSubmit}>
                        <table style={{width:'70%', marginLeft:'16%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <table style={{width:'100%'}}>
                                            <tbody>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Email</label>
                                                        <div className="col-sm-12">
                                                            <input type="email" className="form-control" id="inputEmail3" required placeholder="Email" disabled
                                                                   value={this.state.user_email}
                                                                   onChange={this.onChangeEmail}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>


                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Phone</label>
                                                        <div className="col-sm-12">
                                                            <input type="numbers" className="form-control" id="inputPhone" required placeholder="Phone"
                                                                   value={this.state.user_phone}
                                                                   onChange={this.onChangePhone}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Password</label>
                                                        <div className="col-sm-12">
                                                            <input type="password" className="form-control" id="inputPassword3" required placeholder="Password" disabled
                                                                   value={this.state.user_password}
                                                                   onChange={this.onChangePassword}/>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Gender</label>
                                                        <div className="col-sm-12">
                                                            <select className="browser-default custom-select"
                                                                value={this.state.user_gender}
                                                                onChange={this.onChangeGender}>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputUserName" className="col-sm-2 col-form-label" style={{float: 'left'}}>Name</label>
                                                        <div className="col-sm-12">
                                                            <input type="Text" className="form-control" id="inputUserName" required placeholder="User Name"
                                                                   value={this.state.user_username}
                                                                   onChange={this.onChangeUsername}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>

                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float:'left'}}>Birthday</label>
                                                        <div className='row col-sm-12' style={{marginLeft:'1px'}}>
                                                        <div style={{width:'83px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}
                                                                value={this.state.user_b_year}
                                                                onChange={this.onChangeBYear}>
                                                                <option value="year">Year</option>
                                                                <option value="2000">2000</option>
                                                                <option value="1999">1999</option>
                                                                <option value="1998">1998</option>
                                                                <option value="1997">1997</option>
                                                            </select>
                                                        </div>
                                                        <div style={{width:'83px',marginLeft:'2px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}
                                                                value={this.state.user_b_month}
                                                                onChange={this.onChangeBMonth}>
                                                                <option value="month">Month</option>
                                                                <option value="January">January</option>
                                                                <option value="February">February</option>
                                                                <option value="March">March</option>
                                                                <option value="April">April</option>
                                                                <option value="May">May</option>
                                                                <option value="june">June</option>
                                                                <option value="July">July</option>
                                                                <option value="August">August</option>
                                                                <option value="September">September</option>
                                                                <option value="October">October</option>
                                                                <option value="November">November</option>
                                                                <option value="December">December</option>
                                                            </select>
                                                        </div>
                                                        <div style={{width:'83px',marginLeft:'2px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}
                                                                value={this.state.user_b_day}
                                                                onChange={this.onChangeBDay}>
                                                                <option value="day">Day</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    <td>
                                        <div>
                                            <div>
                                                <img id="blah" src="http://placehold.it/180" className="image"/>
                                            </div>
                                            <div style={{width:'110px',backgroundColor:'primary', marginLeft:'55px'}}>
                                                <input type="file" name="file" className="btn-primary" style={{width:'107px',padding:'5px',marginLeft:'-5px'}}/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="form-group" style={{marginTop:'15px'}}>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}