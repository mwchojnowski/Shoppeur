import React from "react"
import styled from "styled-components"
import{AiOutlineLock} from "react-icons/ai"
import { useRouter } from 'next/router'

export default function CheckoutNav(){
    const router = useRouter()
    return(
        <Wrapper>
            <Container>
                <Logo onClick={()=>router.push("/")}>
                    Overstock
                </Logo>
                <Checkout>
                    <Icon>
                        <AiOutlineLock />
                    </Icon>
                    <Text>
                        Checkout
                    </Text>
                </Checkout>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Container = styled.div`
    width:60%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    border-bottom:1px solid #dadcdf;
    @media (max-width:1200px){
        width:100%;
    }
`;

const Logo = styled.div`
    font-size:32px;
    font-weight:400;
    padding:25px;
    cursor:pointer;
`;

const Checkout = styled.div`
    padding:25px;
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const Icon = styled.div`
    font-size:20px;
    display:flex;
    align-items:center;
`;

const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    padding-left:10px;
`;