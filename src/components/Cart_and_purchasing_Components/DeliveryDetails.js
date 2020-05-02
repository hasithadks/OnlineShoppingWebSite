import React, {Component} from "react";
import axios from "axios";
import * as configs from "../../Config/config";

export default class DeliveryDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            provinces: [
                'Northern', 'North_Western', 'Western', 'North_Central',
                'Central', 'Sabaragamuwa', 'Eastern', 'Uva', 'Southern'
            ],
            Northern: ['Jaffna', 'Kilinochchi', 'Mannar', 'Mulativu', 'Vavuniya'],
            North_Western: ['Kurunegala', 'Puttalam'],
            Western: ['Colombo (1 - 15)', 'Colombo - Greater', 'Gampaha', 'Kalutara'],
            North_Central: ['Anuradhapura', 'Polonnaruwa'],
            Central: ['Kandy', 'Matale', 'Nuwara Eliya'],
            Sabaragamuwa: ['Kegalle', 'Rathnapura'],
            Eastern: ['Ampara', 'Batticaloa', 'Trincomalee'],
            Uva: ['Badulla', 'Monaragala'],
            Southern: ['Galle', 'Matara', 'Hambantota'],
            isProvinceSelected: false,
            districtsList: [],
            userID: '',
            fullName: '',
            phoneNo: '',
            province: '',
            district: '',
            city: '',
            address: ''


        }

        this.FindDistrict = this.FindDistrict.bind(this);
        this.SaveDeliveryDetails = this.SaveDeliveryDetails.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
    }

    componentDidMount() {


    }

    SaveDeliveryDetails() {
        let {userID, fullName, phoneNo, province, district, city, address} = this.state;

        let payload = {userID, fullName, phoneNo, province, district, city, address};

        axios.post(configs.BASE_URL + '/deliveryDetails/add', payload)
            .then(() => alert("Data Save"));
    }

    FindDistrict(value) {

        this.setState({
                isProvinceSelected: true,
            province: value

            }, () => {
                let Northern = this.state[value]
                this.setState({
                        districtsList: Northern
                    },
                    () => {
                        console.log(this.state.districtsList)
                    });
            }
        )

    }

    onChangeName(e){
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }

    onChangePhoneNumber(e){
        this.setState({
            phoneNo: e.target.value
        });
    }

    onChangeDistrict(e){
        this.setState({
            district: e.target.value
        });
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <hr/>
                <h3>Delivery Information</h3>
                <hr/>
                <form>
                    <table style={{width: '80%', marginLeft: '10%'}}>
                        <tbody>
                        <tr>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>Full Name</label>
                                <br/>
                                <input type="text" onChange={this.onChangeName} style={{marginLeft: '20px', float: 'left'}}
                                       placeholder="Enter your first and last name" className="form-control"/>
                            </td>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>Provinces</label>
                                <br/>
                                <select className="form-control"
                                        style={{marginLeft: '20px', float: 'left', fontColor: 'black'}}
                                        onChange={e => this.FindDistrict(e.target.value)}>
                                    <option value="" disabled selected>Please select your Provinces</option>
                                    {this.state.provinces.map((prov) => <option key={prov}
                                                                                value={prov}>{prov}</option>)}

                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>Phone
                                    Number</label>
                                <br/>
                                <input type="text" style={{marginLeft: '20px', float: 'left'}} onChange={this.onChangePhoneNumber}
                                       placeholder="Enter your phone number " className="form-control"/>
                            </td>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>District</label>
                                <br/>
                                <select className="form-control" onChange={this.onChangeDistrict}
                                        style={{marginLeft: '20px', float: 'left', fontColor: 'black'}}
                                        disabled={!this.state.isProvinceSelected}>
                                    <option value="" disabled selected>Please select your District</option>
                                    {this.state.districtsList && this.state.districtsList.map((prov) => <option
                                        key={prov} value={prov}>{prov}</option>)}

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>City</label>
                                <br/>
                                <input type="text" style={{marginLeft: '20px', float: 'left'}} onChange={this.onChangeCity}
                                       placeholder="Enter your City" className="form-control"/>
                            </td>
                            <td>
                                <label style={{marginLeft: '20px', float: 'left', marginTop: '20px'}}>Address</label>
                                <br/>
                                <input type="text" style={{marginLeft: '20px', float: 'left'}} onChange={this.onChangeAddress}
                                       placeholder="Ex: Home#, street Name, Main road" className="form-control"/>

                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href="/orderSummery" type="submit" onClick={this.SaveDeliveryDetails}
                                   className="profile-edit-btn nav-link  btn btn-primary" name="btnAddMore"
                                   value="Proceed to Pay" style={{
                                    float: 'Right',
                                    marginRight: '25px',
                                    marginTop: '30px',
                                    marginBottom: '20px'
                                }}>
                                    Proceed Order
                                </a>
                                {/*<input type="submit" className="btn" value="Proceed to Pay" style={{*/}
                                {/*    backgroundColor: 'orange',*/}
                                {/*    marginTop: '30px',*/}
                                {/*    float: 'Right',*/}
                                {/*    marginRight: '25px',*/}
                                {/*    marginBottom: '20px'*/}
                                {/*}}/>*/}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
