import React, {Component} from 'react';
import './dashboard.css'
import {Link} from "react-router-dom";
import { Route } from 'react-router-dom';
import ManagementStaffList from "../ManagementStaffComponents/managementstaff.component";
import CreateManagementStaff from "../ManagementStaffComponents/create-managementstaff.component";
import EditManagementStaff from "../ManagementStaffComponents/edit-managementstaff.component";
import ProductCategoryList from "../ProductCategoryComponents/productcategory.component";
import CreateProductCategory from "../ProductCategoryComponents/create-productcategory.component";
import EditProductCategory from "../ProductCategoryComponents/edit-productcategory.component";

export default class DashboardIndex extends Component{
    render(){
        return(
            <div>
                <div className="row" id="body-row">
                    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
                        <ul className="list-group">
                            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                                <small>Management Dashboard</small>
                            </li>
                            <Link to ="/admin/mstaff" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-start align-items-center">
                                    <span className="fa fa-user fa-fw mr-3" />
                                    <span className="menu-collapsed">Management Staff</span>
                                </div>
                            </Link>
                            <Link to ="#" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-start align-items-center">
                                    <span className="fa fa-user fa-fw mr-3" />
                                    <span className="menu-collapsed">Products</span>
                                </div>
                            </Link>
                            <Link to ="/admin/pcategory" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-start align-items-center">
                                    <span className="fa fa-user fa-fw mr-3" />
                                    <span className="menu-collapsed">Product Categories</span>
                                </div>
                            </Link>
                        </ul>
                    </div>

                    <div className="col p-4">
                        <Route path="/admin/mstaff" component={ManagementStaffList} exact/>
                        <Route path="/admin/mstaff/add" component={CreateManagementStaff} />
                        <Route path="/admin/mstaff/edit/:id" component={EditManagementStaff} />
                        <Route path="/admin/pcategory" exact component={ProductCategoryList} />
                        <Route path="/admin/pcategory/add" component={CreateProductCategory} />
                        <Route path="/admin/pcategory/edit/:id" component={EditProductCategory} />
                    </div>
                </div>
            </div>
        )
    }
}
