import React, { useEffect, useState } from "react";
import { MainConteiner, MainContent, HeaderMain, PhoneList, ListCard, ActionsContainer, IconContainer, DeleteContainer } from "../HomePage/styles";
import axios from "axios"
import { axiosConfig, base_URL } from "../../Constants/axiosUrl";
import { Link } from "react-router-dom"
import deleteIcon from "../../icons/delete-24px.svg"
import editIcon from "../../icons/edit-24px.svg"

function Main() {
    const [phone, setPhone] = useState([])
    console.log(phone)
    useEffect(() => {
        axios.get(base_URL, axiosConfig)
        .then(response => {
            console.log(response)
            setPhone(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])

    
    const deletePhone = (id) => {
        axios.delete(`${base_URL}/${id}`,axiosConfig,)
        .then(response =>{
            alert("Successfully removed")
            setPhone(phone.filter(phones => phones._id !== id)) 
        })
    }
    
    // const editPhone = (_id) => {
    //     axios.patch(`${base_URL}/${_id}`, axiosConfig)
    //     .then(response => {
            
    //     })
    // }

  return (
    <MainConteiner> 
        <MainContent>
            <HeaderMain>
                <h3>Produtos</h3>
                <Link to={"/add"}>
                    <button> + Adicionar</button>
                </Link> 
            </HeaderMain>

            <PhoneList>
                <ul>
                    <li>Codigo</li>
                    <li>Modelo</li>
                    <li>Preço</li>
                    <li>Marca</li>
                    <li>Cor</li>  
                </ul>  
            </PhoneList>
            {phone.map((data) =>{
                return(
                    <ListCard key={data._id}>
                            <ul>
                                <li>{data.code[1]}</li>                               
                                <li>{data.model}</li>                                                  
                                <li>{data.price}</li>
                                <li>{data.brand}</li>
                                <li>{data.color}</li>  
                            </ul>
                        
                        <ActionsContainer>
                            <IconContainer>                               
                                    <img src={editIcon}
                                    
                                    />                                                            
                            </IconContainer>
                            <DeleteContainer>
                                <img 
                                src={deleteIcon}
                                onClick={() => {deletePhone(data._id)}}
                                />
                            </DeleteContainer>  
                        </ActionsContainer>   
                    </ListCard>
                )   
            })}
        </MainContent>
    </MainConteiner> 
  );
}

export default Main;