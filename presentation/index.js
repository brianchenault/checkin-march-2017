// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


import images from './images'

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const imageContainerStyle = {
  width: '200px',
  height: '200px',
  margin: '10px'
};

const imageContainerStyle2 = {
  width: '280px',
  height: 'auto',
  margin: '10px'
};

const imageContainerStyle3 = {
  width: '440px',
  height: 'auto',
  margin: '10px'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  webkitBorderRadius: '10px'
}

export default class Presentation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playMusic: true
    }
  }

  render() {
    return (
      <div>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Brian's Personal Check-in
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              March 2017
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Cooking</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle}>
                <img src={images.jackfruitbbq} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.baconish} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.cauliflower} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.kalebfast} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.asian} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.ip} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.pantry} style={imageStyle} />
              </div>
              <div style={imageContainerStyle}>
                <img src={images.risotto} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>City Surf</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div onClick={this.state.playMusic ? this.stopMusic.bind(this) : this.startMusic.bind(this)}
                 style={{ color: '#fff', fontSize: '14px', marginBottom: '20px', cursor: 'pointer'}}>
              {this.state.playMusic ? 'stop music' : 'start music'}
            </div>
            <div style="position:relative;height:0;padding-bottom:56.25%">
              <iframe src="https://www.youtube.com/embed/SIrxGKSvLZU?ecver=2" width="640" height="360" frameborder="0"  allowfullscreen></iframe>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={8} textColor="primary" caps>Taos, NM</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.taos1} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.taos4} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ margin: '0 auto', width: '1000px'}}>
              <div style={{
                  width: '338px',
                  height: 'auto',
                  margin: '0 auto'
                }}>
                <img src={images.taos5} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.taos2} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.taos3} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle2}>
                <img src={images.taos6} style={{width: '900px'}} />
              </div>
            </div>
          </Slide>


          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={8} textColor="primary" caps>Great Sand Dunes Nat'l Park</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.sand1} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.sand2} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.sand3} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.sand4} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={5} textColor="primary" caps>Sting on <span style={{fontFamily: '"Apple Color Emoji","Segoe UI Emoji","NotoColorEmoji","Segoe UI Symbol","Android Emoji","EmojiSymbols"'}}>❤️️</span> Day</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.sting1} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.sting2} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.sting3} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.sting4} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={5} textColor="primary" caps>Mountains</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote style={{ fontSize: '28px'}}>"Keep close to Nature’s heart… and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean."</Quote>
              <Cite>John Muir</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>"Perhaps the truth depends on a walk around the lake."</Quote>
              <Cite>Wallace Stevens</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.mountains1} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.mountains5} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.mountains3} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.mountains2} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.mountains4} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.mountains6} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={imageContainerStyle3}>
                <img src={images.mountains7} style={imageStyle} />
              </div>
              <div style={imageContainerStyle3}>
                <img src={images.mountains8} style={imageStyle} />
              </div>
            </div>
          </Slide>


          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={5} textColor="primary" caps>Dance Lessons</Heading>
            <div style={{
                width: '100%',
                height: 'auto',
                margin: '40px auto 0 auto'
              }}>
              <img src={images.fred} style={imageStyle} />
            </div>
          </Slide>

        </Deck>
        {this.state.playMusic === true &&
          <iframe style={{display: 'none'}} width="0" height="0" scrolling="no" frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/291063920&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
        }
      </div>
    );
  }

  stopMusic() {
    this.setState({
      playMusic: false
    })
  }

  startMusic() {
    this.setState({
      playMusic: true
    })
  }
}

/*

 <Slide transition={["fade"]} bgColor="tertiary">
 <Heading size={6} textColor="primary" caps>Typography</Heading>
 <Heading size={1} textColor="secondary">Heading 1</Heading>
 <Heading size={2} textColor="secondary">Heading 2</Heading>
 <Heading size={3} textColor="secondary">Heading 3</Heading>
 <Heading size={4} textColor="secondary">Heading 4</Heading>
 <Heading size={5} textColor="secondary">Heading 5</Heading>
 <Text size={6} textColor="secondary">Standard text</Text>
 </Slide>
 <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
 <Heading size={6} textColor="secondary" caps>Standard List</Heading>
 <List>
 <ListItem>Item 1</ListItem>
 <ListItem>Item 2</ListItem>
 <ListItem>Item 3</ListItem>
 <ListItem>Item 4</ListItem>
 </List>
 </Slide>
 <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
 <BlockQuote>
 <Quote>Example Quote</Quote>
 <Cite>Author</Cite>
 </BlockQuote>
 </Slide>
 */
