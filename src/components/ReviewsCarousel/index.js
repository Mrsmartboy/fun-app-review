import {useState} from 'react'
import {ReviewsContainer,ReviewsHead,ReviewItemContainer,LeftArrowButton,LeftArrowImage,ReviewsList,Profile,Name,Company,Description,RightArrowButton,RightArrowImage} from './styled'

const ReviewsCarousel =(props)=>{
    const [value,setValue]=useState(0)
    const {reviewsList} = props 
    const {imgUrl,username,companyName,description} = reviewsList[value]

    const onLeftArrowButton=()=>{
        if (value>0){
            setValue(value-1)
        }
    }

    const onRightArrowButton=()=>{
        const length = reviewsList.length
        if (value<length-1){
            setValue(value+1)
        }
    }

    return(
        <ReviewsContainer>
            <ReviewsHead>Reviews</ReviewsHead>
            <ReviewItemContainer>
                <LeftArrowButton type="button" onClick={onLeftArrowButton}>
                    <LeftArrowImage src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow"/>

                </LeftArrowButton>
                <ReviewsList>
                    <Profile src={imgUrl} alt={username}/>
                    <Name>{username}</Name>
                    <Company>{companyName}</Company>
                    <Description>{description}</Description>
                </ReviewsList>

                <RightArrowButton type="button" onClick={onRightArrowButton}>
                    <RightArrowImage src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow"/>
                </RightArrowButton>
            </ReviewItemContainer>
        </ReviewsContainer>
    )
}

export default ReviewsCarousel