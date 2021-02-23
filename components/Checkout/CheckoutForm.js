import React from 'react';
import { Formik, Field, Form, ErrorMessage,useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

export default function CheckoutForm(){

    const validate = (values) => {
        const errors = {};

        if (!values.email) 
            errors.email = 'Required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            errors.email = 'Invalid email address';
            
        if (!values.first_name) 
            errors.first_name = 'Required';

        if (!values.last_name) 
            errors.last_name = 'Required';

        if(!values.address)
            errors.address = 'Required';
        
        if(!values.zip)
            errors.zip = 'Required';
        else if(values.zip.length < 5)
            errors.zip = 'Must be as least 5 digits';

        if(!values.city)
            errors.city = 'Required';

        if(!values.CC)
            errors.CC = 'Required';
        else if(values.CC.length != 16)
            errors.CC = 'Card number must be 16 digits long'

        if(!values.CVV)
            errors.CVV = 'Required';
        else if(values.CVV.length != 3)
            errors.CVV = 'Security Code must be 3 digits long'
        
        return errors;
    }
    const initialValues = {
        email: '',
        first_name:'',
        last_name:'',
        address:'',
        country: '',
        zip:'',
        city:'',
        state:'',
        CC:'',
        CVV:'',
        month:'',
        year:'',
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          }
    });
    return (
        <Wrapper>
            <Formik>
                <Checkout_Form id="my-form" onSubmit={()=>{
                    alert("Successfully submitted")
                    formik.resetForm(initialValues)
                }}>
                    <ButtonWrap>
                        <Button type="reset" onClick={()=>{
                            formik.resetForm({
                                values: {
                                    email: 'johnsmith@email.com',
                                    first_name:'John',
                                    last_name:'Smith',
                                    address: '123 Street St.',
                                    country:'United States',
                                    zip:'12345',
                                    city:'City',
                                    state:'New York',
                                    CC:'1234567887654321',
                                    CVV:'123',
                                    month:'01',
                                    year:'2021'
                                }
                            })
                            }}>
                            Autofill
                        </Button>
                    </ButtonWrap>
                    <H1Div>
                        <H1>
                            Billing Address
                        </H1>
                    </H1Div>
                    <Row>
                        <Full>
                            Email Address
                        </Full>
                    </Row>
                    <Row>
                        <Input__Full
                            type="email"
                            name="email"
                            id="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            enableReinitialize={true}
                        />
                        {(formik.errors.email && formik.touched.email) ? <ErrorDiv>{formik.errors.email}</ErrorDiv> : null}
                    </Row>
                    <Row>
                        <H2>
                            First Name
                        </H2>
                        <H2>
                            Last Name
                        </H2>
                    </Row>
                    <Row>
                        <Input__Half
                            type="text"
                            name="first_name"
                            id="first_name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.first_name}
                            enableReinitialize={true}
                        />
                        {(formik.errors.first_name && formik.touched.first_name) ? <ErrorDiv>{formik.errors.first_name}</ErrorDiv> : null}
                        <Input__Half
                            type="text"
                            name="last_name"
                            id="last_name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.last_name}
                            enableReinitialize={true}
                        />
                         {(formik.errors.last_name && formik.touched.last_name) ? <ErrorDiv__Last_Name>{formik.errors.last_name}</ErrorDiv__Last_Name> : null}
                    </Row>
                    <Row>
                        <Full>
                            Address
                        </Full>
                    </Row>
                    <Row>
                        <Input__Full
                            type="text"
                            name="address"
                            id="address"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            enableReinitialize={true}
                        />
                        {(formik.errors.address && formik.touched.address) ? <ErrorDiv>{formik.errors.address}</ErrorDiv> : null}
                    </Row>
                    <Row>
                        <H3>
                            Country
                        </H3>
                        <H3>
                            Zip Code
                        </H3>
                        <H3>
                            City
                        </H3>
                        <H3>
                            State
                        </H3>
                    </Row>
                    <Row>
                        <QSelect
                            type="select"
                            name="country"
                            id="country"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.country}
                            enableReinitialize={true}
                        >
                            <Option>
                                United States
                            </Option>
                        </QSelect>
                        <Input__Quarter
                            type="text"
                            name="zip"
                            id="zip"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.zip}
                            enableReinitialize={true}
                        />
                        {(formik.errors.zip && formik.touched.zip) ? <ErrorDiv__zip>{formik.errors.zip}</ErrorDiv__zip> : null}
                        <Input__Quarter
                            type="text"
                            name="city"
                            id="city"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            enableReinitialize={true}
                        />
                        {(formik.errors.city && formik.touched.city) ? <ErrorDiv__city>{formik.errors.city}</ErrorDiv__city> : null}
                        <QSelect
                            type="select"
                            name="state"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.state}
                            enableReinitialize={true}
                        >
                            <Option value="New York">
                                New York
                            </Option>
                            <Option value="New Jersey">
                                New Jersey
                            </Option>
                            <Option value="California">
                                California
                            </Option>
                            <Option value="Pennsylvania">
                                Pennsylvania
                            </Option>
                        </QSelect>
                    </Row>
                    <H1Div>
                        <H1>
                            Payment Information
                        </H1>
                    </H1Div>
                    <Row>
                        <Radio type="radio" id="card" defaultChecked value="card" name="payment"/>
                        <Label >
                            Credit/Debit Card
                            <ImageDiv>
                                <img src="https://i.ibb.co/XS6J4PM/20150901-visa.png"/>
                                <img src="https://i.ibb.co/gVDTzSh/20150901-mc.png"/>
                            </ImageDiv>
                        </Label>
                        <Radio type="radio" id="paypal" value="paypal" name="payment"/>
                        <Label >
                            <ImageDiv>
                                <img src="https://i.ibb.co/DpnLXd2/20150901-paypal.png"/>
                            </ImageDiv>
                        </Label>
                    </Row>
                    <Row>
                        <Input__Title__CardNum>
                            Card Number
                        </Input__Title__CardNum>
                        <Input__Title__CVV>
                            CVV
                        </Input__Title__CVV>
                    </Row>
                    <Row>
                        <Input__CardNum
                                type="text"
                                name="CC"
                                id="CC"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.CC}
                                enableReinitialize={true}
                            />
                            {(formik.errors.CC && formik.touched.CC) ? <ErrorDiv__CreditCard>{formik.errors.CC}</ErrorDiv__CreditCard> : null}
                        <Input__CVV
                                type="text"
                                name="CVV"
                                id="CVV"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            value={formik.values.CVV}
                            enableReinitialize={true}
                            />
                            {(formik.errors.CVV && formik.touched.CVV) ? <ErrorDiv__CVV>{formik.errors.CVV}</ErrorDiv__CVV> : null}
                    </Row>
                    <Row>
                        <Date>
                            Expiration Date
                        </Date>
                    </Row>
                    <Row>
                        <DateSelect
                            type="select"
                            name="month"
                            id="month"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.month}
                            enableReinitialize={true}
                        >
                            <Option value="1">
                                01 Jan
                            </Option>
                            <Option value="2">
                                02 Feb
                            </Option>
                            <Option value="3">
                                03 Mar
                            </Option>
                            <Option value="4">
                                04 Apr
                            </Option>
                            <Option value="5">
                                05 May
                            </Option>
                            <Option value="6">
                                06 Jun
                            </Option>
                            <Option value="7">
                                07 Jul
                            </Option>
                            <Option value="8">
                                08 Aug
                            </Option>
                            <Option value="9">
                                09 Sep
                            </Option>
                            <Option value="10">
                                10 Oct
                            </Option>
                            <Option value="11">
                                11 Nov
                            </Option>
                            <Option value="12">
                                12 Dec
                            </Option>
                        </DateSelect>
                        <DateSelect
                            type="select"
                            name="year"
                            id="year"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.year}
                            enableReinitialize={true}
                        >
                            <Option value="2021">
                                2021
                            </Option>
                            <Option value="2022">
                                2022
                            </Option>
                            <Option value="2023">
                                2023
                            </Option>
                            <Option value="2024">
                                2024
                            </Option>
                            <Option value="2025">
                                2025
                            </Option>
                            <Option value="2026">
                                2026
                            </Option>
                            <Option value="2027">
                                2027
                            </Option>
                            <Option value="2028">
                                2028
                            </Option>
                            <Option value="2029">
                                2029
                            </Option>
                            <Option value="2030">
                                2030
                            </Option>
                            <Option value="2031">
                                2031
                            </Option>
                            <Option value="2032">
                                2032
                            </Option>
                            <Option value="2033">
                                2033
                            </Option>
                        </DateSelect>
                    </Row>
                </Checkout_Form>
            </Formik>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width:100%;
    height:100%;
    margin-bottom:250px;
`;
const Checkout_Form = styled.form`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;
const H1Div = styled.div`
    width:100%100px;
    height:50px;
    background-color: #f2f3f4;
    margin:25px 0;
`;
const H1 = styled.h1`
    height:100%;
    display:flex;
    align-items:center;
    padding-left:10px;
    font-size: 16px;
    font-weight:bold;
    font-family:Helvetica, sans-serif;
    
`;
const Row = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;
const Full = styled.h2`
    width:100%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;
const Input__Full = styled.input`
    width:100%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:25px;
`;
const H2 = styled.h2`
    width:50%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;
const Input__Half = styled.input`
    width:50%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 600;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:25px;
    margin-right:5px;
`;
const H3 = styled.h3`
    width:25%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
`;
const Input__Quarter = styled.input`
    width:25%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:5px;
`;
const QSelect = styled.select`
    width:25%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:5px;
`;
const Option = styled.option`

`;
const Radio = styled.input`
    margin-right:10px;
`;
const Label = styled.label`
    width:50%;
    display:flex;
    flex-direction:column;
`;
const ImageDiv = styled.div`

`;
const Input__Title__CardNum = styled.h2`
    width:32%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-top:20px;
    margin-left:23px;
    @media (max-width:500px){
        width:55%;
    }
`;
const Input__CardNum = styled.input`
    width:30%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-bottom:20px;
    margin-left:23px;
    @media (max-width:500px){
        width:50%;
    }
`;
const Input__Title__CVV = styled.h2`
    width:15%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-top:20px;
    @media (max-width:500px){
        width:25%;
        
    }
`;
const Input__CVV = styled.input`
    width:15%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-left:10px;
    margin-bottom:20px;
    @media (max-width:500px){
        width:25%;
    }
`;
const DateSelect = styled.select`
    width:20%;
    padding: 7px 15px;
    background: #fff;
    color: #7b7b7b;
    font-weight: 500;
    border: 1px solid #d5d7d8;
    border-radius: 3px;
    outline: 0;
    font-size: 13px;
    vertical-align: bottom;
    margin-right:10px;
    margin-left:23px;
    @media (max-width:500px){
        -moz-appearance: none;
        -webkit-appearance: none;
        padding:none;
        width:60%
    }
`;
const Date = styled.h2`
    width:100%;
    font-family: Helvetica,Arial,sans-serif;
    font-weight:600;
    font-size:12px;
    padding-bottom:5px;
    margin-left:23px;
`;

const ButtonWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Button = styled.button`
    width:25%;
    background-color: #27865f;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    outline: none;
    font-family: Helvetica,Arial,sans-serif;
    height: 24px;
    padding: 0 20px;
    border:none;
    margin: 0 20px;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
`;
const ErrorDiv = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    font-weight:400;
`;
const ErrorDiv__CreditCard = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    margin-left:23px;
    font-weight:400;
`;
const ErrorDiv__CVV = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    margin-left:133px;
    font-weight:400;
`;
const ErrorDiv__Last_Name = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    margin-left:170px;
    font-weight:400;
`;
const ErrorDiv__zip = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    margin-left:83px;
    font-weight:400;
`;
const ErrorDiv__city = styled.div`
    width:150px;
    position:absolute;
    padding:3px;
    color: red;
    font-family:helvetica;
    margin-top:30px;
    margin-left:168px;
    font-weight:400;
`;