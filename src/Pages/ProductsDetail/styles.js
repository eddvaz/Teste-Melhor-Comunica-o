import styled from "styled-components"

export const MainConteiner = styled.div`
    display: flex;
    justify-content: center;
`
export const MainContent = styled.div`
    width: 690px;
    height: 394px;
    margin-top: 40px;
    margin-bottom: 78px;
`

export const HeaderProductsDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        input{
            width: 198px;
            height: 40px;
            border: 1px solid #707070;
            border-radius: 5px;
            
        }
        select{
            width: 198px;
            height: 40px;
            border: 1px solid #707070;
            border-radius: 5px;
        }
`

export const ColumnLabel = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    margin: 16px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 105px;
    margin-top: 40px;
        button{
            width: 87px;
            height: 33px;
            margin-right: 24px;
            cursor: pointer;
        }
`