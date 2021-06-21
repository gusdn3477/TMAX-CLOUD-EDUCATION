import React, { useState, useEffect } from "react";
import UseFetch from '../../../hooks/UseFetch';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function SignUp() {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    return (
        
        <div className="card-body">
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>회원가입</h4>
                    <h5>Sign In</h5>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Id</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Confirm Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>phonoe</label>
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );

}