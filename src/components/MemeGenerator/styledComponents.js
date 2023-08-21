import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
padding-left:50px;


`
export const Heading = Styled.h1`
color:#35469c;
font-size:40px;
`
export const FormContainer = Styled.form`
display:flex;
flex-direction:column;
align-items:flex-start;
width:300px;
`
export const ImageUrlLabel = Styled.label`
color:#5a7184;
font-size:15px;
font-weight:600;
margin-bottom:5px;
`
export const InputImgField = Styled.input`
width:100%;
padding:5px;
outline:none;
margin-bottom:20px;
`

export const SelectComponent = Styled.select`
width:100%;
padding:5px;
outline:none;`
export const OptionsList = Styled.option`

`
export const GenerateButton = Styled.button`
color:#ffffff;
background-color:#0b69ff;
padding:8px 20px 8px 20px;
border-radius:5px;
border:none;
cursor:pointer;
margin-top:15px;
`

export const GeneratedMeme = Styled.div`
  background: url(${props => props.backMeme});
  background-size: cover;
  height: 400px;
  width: 400px;
  margin-left: 50px;
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: relative;
`

export const TopText = Styled.p`
  color: #ffffff;
  font-size: ${props => props.ftsize}px;
  width: 350px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const BottomText = Styled.p`
  color: #ffffff;
  font-size: ${props => props.ftsize}px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`
