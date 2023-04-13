import styled from 'styled-components'

export const ReviewsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
min-height: 100vh;
background-image: url("https://assets.ccbp.in/frontend/react-js/reviews-bg.png");
background-size: cover;

`

export const ReviewsHead= styled.h1`
 color: #ffffff;
 font-size: 30px;
 font-weight: bold;
 font-family: 'Roboto';
`

export const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export const LeftArrowButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  
`

export const LeftArrowImage = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 30px;
`

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Profile = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 20px;
`
export const Name = styled.h1`
color: #ffffff;
font-size :30px ;
font-weight: bold;

`
export const Company = styled.p`
 color: #171f46;
 font-size: 15px;
 font-weight: 400;
`
export const Description = styled.p`
 color: #171f46;
 font-size: 15px;
 font-weight: 500;
 width: 500px;
`

export const RightArrowButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  
`

export const RightArrowImage = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 30px;
`
