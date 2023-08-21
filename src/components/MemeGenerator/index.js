import {Component} from 'react'

import {
  MainContainer,
  Heading,
  FormContainer,
  ImageUrlLabel,
  InputImgField,
  SelectComponent,
  OptionsList,
  GenerateButton,
  GeneratedMeme,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memeShow: false,
  }

  handleImageInput = event => {
    this.setState({imageUrl: event.target.value})
  }

  handleTopText = event => {
    this.setState({topText: event.target.value})
  }

  handleBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  handleFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    this.setState({memeShow: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, memeShow} = this.state
    console.log(fontSize)
    return (
      <MainContainer>
        <div>
          <Heading>Meme Generator</Heading>
          <FormContainer onSubmit={this.generateMeme}>
            <ImageUrlLabel>Image URL</ImageUrlLabel>
            <InputImgField
              placeholder="Enter the Image URL"
              onChange={this.handleImageInput}
            />
            <ImageUrlLabel>Top Text</ImageUrlLabel>
            <InputImgField
              placeholder="Enter the Top text"
              onChange={this.handleTopText}
              value={topText}
            />
            <ImageUrlLabel>Bottom Text</ImageUrlLabel>
            <InputImgField
              placeholder="Enter the Bottom text"
              onChange={this.handleBottomText}
              value={bottomText}
            />
            <ImageUrlLabel>Font Size</ImageUrlLabel>
            <SelectComponent onChange={this.handleFontSize}>
              {fontSizesOptionsList.map(each => (
                <OptionsList key={each.optionId}>
                  {each.displayText}
                </OptionsList>
              ))}
            </SelectComponent>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </div>
        <GeneratedMeme backMeme={imageUrl} isShow={memeShow}>
          <TopText ftsize={fontSize}>{topText}</TopText>
          <BottomText ftsize={fontSize}>{bottomText}</BottomText>
        </GeneratedMeme>
      </MainContainer>
    )
  }
}
export default MemeGenerator
