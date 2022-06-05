import React from 'react'
import ReactDOM from 'react-dom'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism'

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Quote,
} from 'spectacle'

const htmlLogo =
  'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: '#2B2D42',
    secondary: '#2B2D42',
    tertiary: '#EDF2F4',
    quaternary: '#EF233C',
    quinary: '#8D99AE',
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Operator Mono Lig", "Consolas", "Menlo", monospace',
  },
}
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color="#2B2D42" />
    </Box>
    <Box padding="1em">
      <Progress color="#2B2D42" />
    </Box>
  </FlexBox>
)
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
)

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Web Development for Beginners</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🎉 Introduction 🎉
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Goals of this course</Heading>
      <FlexBox justifyContent="left">
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>Give a simple overview about web development</ListItem>
          </Appear>
          <Appear>
            <ListItem>Why should I learn to code?</ListItem>
          </Appear>
          <Appear>
            <ListItem>How can I code?</ListItem>
          </Appear>
          <Appear>
            <ListItem>Taking the first steps into HTML, CSS and JS</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Learn how to tackle down problems and debug my code
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Next steps for my coding career</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>What is Web Development?</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🤔
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>How does it look like?</Heading>
      <FlexBox>
        <Appear>
          <CodePane language="html" theme={prism}>
            {`<!DOCTYPE html>
<html><head><style>
body {
  background-color: lightblue;
}
</style></head>
<body>
<button onclick="myFunction()">👨‍💻👩‍💻</button>
<script>
function myFunction() {
  console.log('HELLO WORLD')
}
</script>
</body></html>`}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>🤯</Heading>
      <FlexBox justifyContent="center" alignItems="center">
        <Image
          width={600}
          src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?crop=1"
        ></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Some buzzword bingo</Heading>
      <FlexBox justifyContent="left">
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>HTML, CSS and JavaScript</ListItem>
          </Appear>
          <Appear>
            <ListItem>Angular, Vue, React, Svelte, Vanilla JS...</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Bootstrap, Tailwind, Material, Bulma, Foundation, ...
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>IDE, Editor, vscode, intellij, sublime, ...</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              github, gitlab, CI, CD, pipelines, deployment, ...
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              npm, yarn, package.json, webpack, parcel, express, node, ...
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>JSON, XML, CSV, XLS, DOC, PNG, JPEG, ...</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Chrome, Edge, FireFox, Safari, iOS, Android, ...
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>🤯</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Why should I learn to code?</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🤔
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>My personal reasons, why coding is useful</Heading>
      <FlexBox justifyContent="left">
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>Easier communication/understanding with devs</ListItem>
          </Appear>
          <Appear>
            <ListItem>It can help you in different situations</ListItem>
          </Appear>
          <Appear>
            <ListItem>Don't need to pay people for your own website</ListItem>
          </Appear>
          <Appear>
            <ListItem>Create stuff that is useful for you</ListItem>
          </Appear>
          <Appear>
            <ListItem>Cool hobby if you love to solve problems</ListItem>
          </Appear>
          <Appear>
            <ListItem>It is needed more than ever</ListItem>
          </Appear>
          <Appear>
            <ListItem>It is FUN!</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox justifyContent="center" alignItems="center">
        <Image
          height={700}
          src="https://images-prod.healthline.com/hlcmsresource/images/topic_centers/leftbrain-rightbrain.jpg"
        ></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox justifyContent="center" alignItems="center">
        <Image
          height={400}
          src="https://sf.ezoiccdn.com/ezoimgfmt/networkencyclopedia.com/wp-content/uploads/2021/06/web-browsers-500px-min.jpg?ezimgfmt=ng:webp/ngcb2"
        ></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>How can I start coding?</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🤓
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Creating our own development environment or IDE</i>
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What do we need?</Heading>
      <FlexBox justifyContent="left">
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>
              A browser (FireFox Developer Edition, Chrome Developer Edition)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              An editor (Visual Studio Code, TextMate, Notepad, ...)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>That's it</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Installing time
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Taking the first steps into HTML, CSS and JS</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🤔
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Exercise Time! 🤯</Heading>
      </FlexBox>
    </Slide>
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById('root'))
