import React,{useState,useEffect,} from "react"
import styled from "styled-components"
import CheckoutForm from "./CheckoutForm"
import CartItem from "./CartItem"

export default function CheckoutContent(){
    const [NumItems,updateNumItems] = useState()
    const[TotalPrice,updateTotalPrice] = useState(0)

    let url1= "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg"
    let url2="https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg"
    
    const ItemArray = [
        {
            imageURL:url1,
            productName:"Black Bed sheet",
            color:"Black",
            price:99.99,
            quantity:3,
            id:0
        },
        {
            imageURL:url2,
            productName:"Blue Bed sheet",
            color:"Blue",
            price:99.99,
            quantity:1,
            id:1
        }
    ]
    //Initialize the Price and total amount of products
    useEffect(() => {
        let x = 0;
        let y = 0;
        ItemArray.map(
            (item)=>{
                x+=((item.price)*(item.quantity))
                y+=item.quantity
            }
        )
        updateTotalPrice(x)
        updateNumItems(y)
      }, []);

      //Update total price and amount of items on change
      function updateNums(newVal,id){
        console.log(newVal)
        console.log(id)
        let x = 0;
        let y = 0;
        ItemArray[id].quantity = newVal
        ItemArray.map(
            (item)=>{
                x+=(item.price*item.quantity)
                y+=item.quantity
            }
        )
        updateTotalPrice(x)
        updateNumItems(y)
      }

    return(
        <Wrapper>
            <Container>
                <Col1>
                    <Cart_Wrapper>
                        <Cart_Container>
                            {ItemArray.map((item)=>
                                <CartItem
                                    key={item.id}
                                    imageURL={item.imageURL}
                                    productName={item.productName}
                                    color={item.color}
                                    price={item.price}
                                    quantity={item.quantity}
                                    Productid={item.id}
                                    updateNums={updateNums}
                                />
                            )}
                        </Cart_Container>
                    </Cart_Wrapper>
                    <CheckoutForm />
                </Col1>
                <Col2>
                    <Wrap>
                        <Checkout>
                            <Top>
                                <Row>
                                    <Bold>
                                        ({NumItems})Items:
                                    </Bold>
                                    <Bold>
                                        ${TotalPrice.toFixed(2)}
                                    </Bold>
                                </Row>
                                <Row>
                                    <Text>
                                        Promotional Savings:
                                    </Text>
                                    <Red>
                                        $0
                                    </Red>
                                </Row>
                                <Row>
                                    <Bold>
                                        Subtotal After Discounts
                                    </Bold>
                                    <Bold>
                                        ${TotalPrice.toFixed(2)}
                                    </Bold>
                                </Row>
                            </Top>
                            <Bottom>
                                <Row>
                                    <Text>
                                        Shipping:
                                    </Text>
                                    <Bold>
                                        FREE
                                    </Bold>
                                </Row>
                                <Row>
                                    <Text>
                                        Estimated Tax:
                                    </Text>
                                    <Text>
                                        ${(TotalPrice*.1).toFixed(2)}
                                    </Text>
                                </Row>
                                <Button form="my-form" type="submit">
                                    Submit Order
                                </Button>
                            </Bottom>
                        </Checkout>
                    </Wrap>
                </Col2>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:100px;
`;

const Container = styled.div`
    width:60%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:row;
    @media (max-width:1200px){
        width:80%;
        flex-direction:column;
    }
`;

const Cart_Wrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Cart_Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
`;

const Col1 = styled.div`
    width:60%;
    @media (max-width:1200px){
        width:100%;
    }
`;

const Col2 = styled.div`
    width:40%;
    height:100%;
    display:flex;
    @media (max-width:1200px){
        width:100%;
        display:flex;
        justify-content:center;
    }
`;

const Wrap = styled.div`
    width:80%;
    height:32%;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    border: 1px solid #e7e8ea;
    margin-left:40px;
    top:183px;
    @media (max-width:1200px){
        
        width:100%;
        height:100%;
        top:-100px;
        margin-right:25px;
    }
`;

const Checkout = styled.div`
    padding:25px;
    width:100%;
    height:100%;
`;

const Top = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #e7e8ea;
    
`;

const Bottom = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Row = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    padding:10px 0;
`;

const Text = styled.div`
    color: #2f3337;
    line-height:1.5;
`;

const Bold = styled.div`
    font-weight:700;
    color: #2f3337;
    line-height:1.5;
`;

const Red = styled.div`
    color:red;
    line-height:1.5;
`;

const Button = styled.button`
    width:100%;
    background-color: #27865f;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    outline: none;
    font-family: Helvetica,Arial,sans-serif;
    height: 44px;
    padding: 0 20px;
    border:none;
    margin: 0 20px;
`;