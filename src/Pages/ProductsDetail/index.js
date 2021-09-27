import React, { useState } from "react";
import { MainConteiner, MainContent, HeaderProductsDetail, InputContainer, ColumnLabel, ButtonsContainer } from "./styles"
import useForm from "../../Hooks/useForm";
import axios from "axios"
import { axiosConfig, base_URL } from "../../Constants/axiosUrl";
import { Link } from "react-router-dom"

function ProductsDetail() {
  const { form, onChange, clearFields } = useForm ({
    model:"",
    brand:"",
    price:0,
    date:undefined,
    endDate:undefined,	
    color:"",
    code:["#",0]
  });
  
  const body = form

  const addProduct = () => {
    axios.post( base_URL, body, axiosConfig, 
    ).then((response) => {
      alert("Adicionado com sucesso!")
    }).catch((error) => {
      console.log(error)
    })
  }

  const submit = (e) => {
    e.preventDefault();
    clearFields();
  }

    return (
      <MainConteiner>
        <MainContent>
          <HeaderProductsDetail>
            <h3>Detalhes do produto</h3>
          </HeaderProductsDetail>

          <form onSubmit={submit}>
            <InputContainer>
            <div>
              <ColumnLabel>
                <strong>Modelo</strong>
                <input
                  required
                  type="text"
                  name={"model"}
                  value={form.model}
                  onChange={onChange}
                  placeholder="ex: XT2041-1"
                />
              </ColumnLabel>

              <ColumnLabel>
                <strong>Cor</strong>
                <select
                  required
                  name={"color"}
                  value={form.color}
                  onChange={onChange}
                  >
                  <option value="" disabled>Escolha uma cor</option>
                  <option>BLACK</option>
                  <option>WHITE</option>
                  <option>GOLD</option>
                  <option>PINK</option>
                </select>
              </ColumnLabel>

              <ColumnLabel>
                <strong>Inicio das vendas</strong>
                <input
                  disabletoolbar="true"
                  format="dd/MM/yy"
                  name={"date"}
                  value={form.date}
                  onChange={onChange}
                  placeholder="ex: 22/09/2021"
                />
              </ColumnLabel>

            </div>

            <div>
              <ColumnLabel>
                <strong>Marca</strong>
                <input
                  required
                  type="text"
                  name={"brand"}
                  value={form.brand}
                  onChange={onChange}
                  placeholder="ex: Motorola"
                />
              </ColumnLabel>

              <ColumnLabel>
                <strong>Preço</strong>
                <input
                  required
                  disabletoolbar="true"
                  type="number"
                  name={"price"}
                  value={form.price}
                  onChange={onChange}
                  placeholder="ex: 1.400,00"
                />
              </ColumnLabel>

              <ColumnLabel>
                <strong>Fim das vedas</strong>
                <input
                  
                  disabletoolbar="true"
                  format="dd/MM/yy"
                  name={"endDate"}
                  value={form.endDate}
                  onChange={onChange}
                  placeholder="ex: 22/09/2022"
                />
              </ColumnLabel> 
            </div>
            
            </InputContainer>
            <ButtonsContainer>
              <Link to={"/"}>
                <button>Voltar</button>
              </Link>
              <button onClick={addProduct}>Salvar</button>
            </ButtonsContainer>
          </form>

        </MainContent>
      </MainConteiner>
    );
  }
  
  export default ProductsDetail;