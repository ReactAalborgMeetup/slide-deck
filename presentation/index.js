// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Layout,
  Fill,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  westworld: require("../assets/westworld.jpg"),
  andri: require("../assets/andri.jpg"),
  uffe: require("../assets/uffe.jpg"),
  thomas: require("../assets/thomas.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#960013",
  secondary: "#ffffff",
  tertiary: "#ff5862",
  quartenary: "#eeeeee",
  meetupRed: "#cf1838",
  darkTextPrimary: "#FFFFFF"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "fade"]} transitionDuration={300} theme={theme}>
        <Slide bgImage={images.westworld}>
          <Heading size={1} fit caps lineHeight={1} textColor="meetupRed">
            Aalborg React Meetup
          </Heading>
          <Text margin="10px 0 0" textColor="darkTextPrimary" size={1} bold>
            #4 - Webhouse
          </Text>
        </Slide>
        <Slide bgColor="meetupRed" textColor="secondary">
            <Heading size={3} caps textColor="primary">Agenda</Heading>
            <List>
              <ListItem>About Aalborg React (Native) Meetup</ListItem>
              <ListItem>About WebHouse</ListItem>
              <ListItem>GraphQL og React</ListItem>
              <ListItem>Expo Snack and the Expo SDK</ListItem>
              <ListItem>Coding Dojo</ListItem>
              <ListItem>Wrap up</ListItem>
            </List>
        </Slide>
        <Slide bgColor="secondary" textColor="black">
          <Heading fit textColor="meetupRed">Aalborg React Meetup</Heading>
          <List>
            <ListItem>To get more people interested in React</ListItem>
            <ListItem>Short, inspiring talks</ListItem>
            <ListItem>Coding Dojo for depth</ListItem>
            <ListItem>For both ninjas and beginners</ListItem>
            <ListItem>Every month</ListItem>
          </List>
          <Layout>
            <Fill>
              <Image src={images.andri} height={150} />
              <Heading size={6}>Andri</Heading>
              <Heading size={7}>Tech Lead at PARKPARK</Heading>
            </Fill>
            <Fill>
              <Image src={images.thomas} height={150} />
              <Heading size={6}>Thomas</Heading>
              <Heading size={7}>Co-founder at SubHub</Heading>
            </Fill>
            <Fill>
              <Image src={images.uffe} height={150} />
              <Heading size={6}>Uffe</Heading>
              <Heading size={7}>Founder at Det Gode Firma</Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit textColor="secondary">WebHouse</Heading>
        </Slide>
        <Slide>
          <Heading fit textColor="secondary">GraphQL</Heading>
        </Slide>
        <Slide>
          <Heading fit textColor="secondary">Expo, Sketch & Friends</Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="black">
          <Heading fit>Thank you</Heading>
          <List>
            <ListItem>Github (code and examples): https://github.com/ReactAalborgMeetup</ListItem>
            <ListItem>Meetup: https://www.meetup.com/Aalborg-React-React-Native-Meetup/</ListItem>
            <ListItem>Slack: #AalborgReactMeetup at https://slack.devdk.org</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

