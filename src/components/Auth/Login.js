import React, { Component } from 'react';
import AuthService from '../../services/AuthService'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submittedValues: {}
        };
    }

    onSubmit(submitedValues) {
        window.console.log(submitedValues);
        AuthService.login(submitedValues)
            .then( resp => {
                window.location.href = "/";
            })
            .catch( err => {
                window.console.log(err)
            });
    }

    render() {
        return (
            <div>
                <br/>
                 Login
                 <br/>
                 <br/>
                <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <label htmlFor="Email">Email</label>
                            <Text field="email" id="Email" />
                            
                            <br/>
                            <br/>
                            <label htmlFor="password">Password</label>
                            <Text field="password" id="password" />

                            <br/>
                            <br/>
                        
                            <button type="submit" className="mb-4 btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                </Form>
            </div>
        );
    }

}

export default Login;
