import styled from "styled-components"

export const MainConteiner = styled.div`
    display: flex;
    justify-content: center;
`

export const MainContent = styled.div`
    width: 912px;
    margin-top: 40px;
    margin-bottom: 78px;
    display: flex;
    flex-direction: column;
`

export const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
        button{
            width: 155px;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
        }
`
export const PhoneList = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 64px;
        ul{
            display: flex;
            flex-direction: row;
            width: 864px;
        }
        li{
            display: inline;
            vertical-align:top;
            width: 150px;
            
        }
`
export const ListCard = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 64px;
    display: flex;
        ul{ 
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        li{
            display: inline;
            vertical-align:top;
            width: 150px; 
        }
`

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;
    
`

export const IconContainer = styled.div`
    margin-right: 32px;
        img{
            cursor: pointer;
        }
`

export const DeleteContainer = styled.div` 
    img{
            cursor: pointer;
        }
`

