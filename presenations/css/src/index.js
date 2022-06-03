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

const cssLogo =
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'

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
          🎉 CSS 🎉
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Image src={cssLogo} size={500} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is CSS?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>CSS stands for Cascading Style Sheets</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            CSS is the language we use to style an HTML document
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            CSS describes how HTML elements should be displayed
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            CSS saves a lot of work. It can control the layout of multiple web
            pages all at once
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>External stylesheets are stored in CSS files</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>How does it look like?</Heading>
      <FlexBox>
        <Appear>
          <CodePane language="css" theme={prism}>
            {`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Syntax</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        A CSS rule consists of a selector and a declaration block
      </Heading>
      <FlexBox alignItems="center">
        <Image src="https://www.w3schools.com/css/selector.gif"></Image>
        <UnorderedList fontSize="30px">
          <ListItem>
            The selector points to the HTML element you want to style
          </ListItem>
          <ListItem>
            The declaration block contains one or more declarations separated by
            semicolons
          </ListItem>
          <ListItem>
            Each declaration includes a CSS property name and a value, separated
            by a colon
          </ListItem>
          <ListItem>
            Multiple CSS declarations are separated with semicolons, and
            declaration blocks are surrounded by curly braces
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Syntax</Heading>
      <CodePane language="css" theme={prism} highlightRanges={[[1], [2], [3]]}>
        {`p {
  color: red;
  text-align: center;
}`}
      </CodePane>
      <Notes>
        <ul>
          <li>
            p is a selector in CSS (it points to the HTML element you want to
            style.
          </li>
          <li># color is a property, and red is the property value</li>
          <li>text-align is a property, and center is the property value</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Selectors</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        A CSS selector selects the HTML element(s) you want to style.
      </Heading>
      <FlexBox>
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>
              Simple selectors (select elements based on name, id, class)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Combinator selectors (select elements based on a specific
              relationship between them)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Pseudo-class selectors (select elements based on a certain state)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Pseudo-elements selectors (select and style a part of an element)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Attribute selectors (select elements based on an attribute or
              attribute value)
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>div, body, html, .class, #id</li>
          <li>div+div</li>
          <li></li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Element Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        The element selector selects HTML elements based on the element name.
      </Heading>
      <CodePane language="css" theme={prism} highlightRanges={[1]}>
        {`p {
  color: red;
  text-align: center;
}`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Id Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        The id selector uses the id attribute of an HTML element to select a
        specific element.
      </Heading>
      <CodePane language="css" theme={prism} highlightRanges={[1]}>
        {`#para1 {
  text-align: center;
  color: red;
}`}
      </CodePane>
      <CodePane language="html" theme={prism}>
        {`<p id="para1">My awesome text!</p>`}
      </CodePane>

      <Notes>
        <ul>
          <li>
            The id of an element is unique within a page, so the id selector is
            used to select one unique element!
          </li>
          <li>
            To select an element with a specific id, write a hash (#) character,
            followed by the id of the element.
          </li>
          <li>An id name cannot start with a number!</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Class Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        The class selector selects HTML elements with a specific class
        attribute.
      </Heading>
      <CodePane language="css" theme={prism} highlightRanges={[1]}>
        {`.center {
  text-align: center;
  color: red;
}`}
      </CodePane>
      <CodePane language="html" theme={prism}>
        {`<p class="center">My awesome text!</p>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Class Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        You can also specify that only specific HTML elements should be affected
        by a class.
      </Heading>
      <CodePane language="css" theme={prism} highlightRanges={[1]}>
        {`p.center {
  text-align: center;
  color: red;
}`}
      </CodePane>
      <CodePane language="html" theme={prism}>
        {`<p class="center">My awesome text!</p>`}
      </CodePane>

      <Notes>
        <ul>
          <li>A class name cannot start with a number!</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Class Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        HTML elements can also refer to more than one class.
      </Heading>
      <CodePane language="html" theme={prism}>
        {`<p class="center large">This paragraph refers to two classes.</p>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Other Selectors</Heading>
      <CodePane language="css" theme={prism} highlightRanges={[[1], [6]]}>
        {`* { /* Universal selector */
  text-align: center;
  color: blue;
}

h1, h2, p { /* Grouping Selector */
  text-align: center;
  color: red;
}
`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Class Selector</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        HTML elements can also refer to more than one class.
      </Heading>
      <CodePane language="html" theme={prism}>
        {`<p class="center large">This paragraph refers to two classes.</p>`}
      </CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Exercise Time! 🤯</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>BUT! Let's have dinner first! 🍝</Heading>
        <Text>https://flukeout.github.io/</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Exercise #1</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        Create a new codepen.io project and try to apply some typography to a
        lorem ipsum text with several paragraphs.
      </Heading>
      <UnorderedList fontSize="30px">
        <ListItem>Include two different font styles (bold, italic)</ListItem>
        <ListItem>Have a serif and sans serif text (font-family)</ListItem>
        <ListItem>Change the text color</ListItem>
        <ListItem>Have two different font sizes</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>How To Add CSS</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        When a browser reads a style sheet, it will format the HTML document
        according to the information in the style sheet.
      </Heading>
      <UnorderedList fontSize="30px">
        <Appear>
          <ListItem>External CSS</ListItem>
        </Appear>
        <Appear>
          <ListItem>Internal CSS</ListItem>
        </Appear>
        <Appear>
          <ListItem>Inline CSS</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>External CSS</Heading>
      <Text>
        With an external style sheet, you can change the look of an entire
        website by changing just one file!
      </Text>
      <CodePane language="html" theme={prism} highlightRanges={[4]}>
        {`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
      </CodePane>
      <Quote>
        Each HTML page must include a reference to the external style sheet file
        inside the link element, inside the head section.
      </Quote>
    </Slide>
    <Slide>
      <Heading>Internal CSS</Heading>
      <Text>
        An internal style sheet may be used if one single HTML page has a unique
        style. The internal style is defined inside the{' '}
        <CodeSpan>{`<style>`}</CodeSpan> element, inside the head section.
      </Text>
    </Slide>
    <Slide>
      <Heading>Internal CSS</Heading>
      <CodePane language="html" theme={prism} highlightRanges={[4, 13]}>
        {`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Inline CSS</Heading>
      <Text>
        An inline style may be used to apply a unique style for a single
        element. To use inline styles, add the style attribute to the relevant
        element. The <CodeSpan>style</CodeSpan> attribute can contain any CSS
        property.
      </Text>
      <CodePane language="html" theme={prism} highlightRanges={[5, 6]}>
        {`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Specificity</Heading>
      <Text>
        If there are two or more conflicting CSS rules that point to the same
        element, the browser follows some rules to determine which one is most
        specific and therefore wins out.
      </Text>
      <Quote>
        Think of specificity as a score/rank that determines which style
        declarations are ultimately applied to an element.
      </Quote>
    </Slide>
    <Slide>
      <Heading>Specificity</Heading>
      <Text fontSize="30px" margin="0px" padding="0px">
        Every selector has its place in the specificity hierarchy. There are
        four categories which define the specificity level of a selector
      </Text>
      <UnorderedList fontSize="30px">
        <Appear>
          <ListItem>
            <b>Inline styles</b> - An inline style is attached directly to the
            element to be styled. <br />
            <CodeSpan fontSize="30px">
              {`<h1 style="color: #ffffff;">`}
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <b>IDs</b> - An ID is a unique identifier for the page elements,
            such as <CodeSpan fontSize="30px">{`#navbar`}</CodeSpan>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <b>Classes, attributes and pseudo-classes</b> - This category
            includes <CodeSpan fontSize="30px">.classes</CodeSpan>,
            <CodeSpan fontSize="30px">[attributes]</CodeSpan> and pseudo-classes
            such as <CodeSpan fontSize="30px">:hover</CodeSpan>,{' '}
            <CodeSpan fontSize="30px">:focus</CodeSpan> etc.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <b>Elements and pseudo-elements</b> - This category includes element
            names and pseudo-elements, such as{' '}
            <CodeSpan fontSize="30px">h1</CodeSpan>,{' '}
            <CodeSpan fontSize="30px">div</CodeSpan>,{' '}
            <CodeSpan fontSize="30px">:before</CodeSpan> and{' '}
            <CodeSpan fontSize="30px">:after</CodeSpan>.
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Calculate Specificity</Heading>
      <Quote>
        Start at 0, add 1000 for style attribute, add 100 for each ID, add 10
        for each attribute, class or pseudo-class, add 1 for each element name
        or pseudo-element.
      </Quote>
    </Slide>
    <Slide>
      <Heading>Calculate Specificity</Heading>
      <FlexBox
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
      >
        <CodeSpan>{`A: h1`}</CodeSpan>
        <CodeSpan>{`B: #content h1`}</CodeSpan>
        <CodeSpan>
          {`C:
        <div id="content">
        <h1 style="color: #ffffff">Heading</h1>
        </div>`}
        </CodeSpan>
      </FlexBox>
      <Text>
        The specificity of A is 1 (one element). <br />
        The specificity of B is 101 (one ID reference and one element). <br />
        The specificity of C is 1000 (inline styling). <br />
        {`Since 1 < 101 < 1000, the third rule (C) has a greater level of specificity, and therefore will be applied.`}
      </Text>
    </Slide>
    <Slide>
      <Heading>Specificity Rules</Heading>
      <Text>
        <b>Equal specificity</b>: the latest rule counts
      </Text>
      <CodePane language="css" theme={prism}>
        {`h1 {background-color: yellow;}
h1 {background-color: red;}`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Specificity Rules</Heading>
      <Text>
        ID selectors have a higher specificity than attribute selectors
      </Text>
      <CodePane language="css" theme={prism}>
        {`div#a {background-color: green;}
#a {background-color: yellow;}
div[id=a] {background-color: blue;}`}
      </CodePane>
      <Appear>
        <Text>
          the first rule is more specific than the other two, and will be
          applied
        </Text>
      </Appear>
      <Notes>
        Try out in CodePen!
        <ul>
          <li>
            Contextual selectors are more specific than a single element
            selector
          </li>
          <li>A class selector beats any number of element selectors</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Box Model</Heading>
      <Text>
        In CSS, the term "box model" is used when talking about design and
        layout.
      </Text>
      <FlexBox>
        <Image src="https://codinglead.github.io/images/box-model.png" />
      </FlexBox>
      <Quote>
        The CSS box model is essentially a box that wraps around every HTML
        element. It consists of: margins, borders, padding, and the actual
        content.
      </Quote>
      <Notes>
        <ul>
          <li>
            Content - The content of the box, where text and/or images appear
          </li>
          <li>
            Padding - The area around the content. The padding is transparent
          </li>
          <li>Border - A border that goes around the padding and content</li>
          <li>
            Margin - The area outside the border. The margin is transparent
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Border, Margin and Padding</Heading>
      <FlexBox>
        <Image src="https://codinglead.github.io/images/box-model.png" />
      </FlexBox>
      <UnorderedList fontSize="30px">
        <Appear>
          <ListItem>
            <b>border</b> - border properties allow you to specify the style,
            width, and color of an element's border
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <b>margin</b> - margin properties are used to create space around
            elements, outside of any defined borders
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <b>padding</b> - padding properties are used to generate space
            around an element's content, inside of any defined borders
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Border, Margin and Padding</Heading>
      <Text fontSize="30px" margin="0px" padding="0px">
        CSS has properties for specifying the border/margin/padding for each
        side of an element
      </Text>
      <CodePane
        language="css"
        theme={prism}
        highlightRanges={[
          [2, 6],
          [8, 11],
        ]}
      >
        {`div {
    border: 4px solid black;
    border-top: 4px solid black;
    border-left: 4px solid black;
    border-right: 4px solid black;
    border-bottom: 4px solid black;

    padding: 10px; /* top right bottom left */
    padding: 10px 10px /* top+bottom right+left */;

    margin: 10px 10px 10px /*top right+left bottom */;
  }`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Box Sizing</Heading>
      <Text>
        We can control how the total width and height of an element is
        calculated with the <CodeSpan>box-sizing</CodeSpan> property
      </Text>
      <UnorderedList fontSize="30px">
        <ListItem fontSize="30px">
          <CodeSpan fontSize="30px">content-box</CodeSpan> - The width and
          height properties (and min/max properties) includes only the content.
          Border and padding are not included. <b>This is the default!</b>
        </ListItem>
        <ListItem fontSize="30px">
          <CodeSpan fontSize="30px">border-box</CodeSpan> - The width and height
          properties (and min/max properties) includes content, padding and
          border.
        </ListItem>
        <ListItem fontSize="30px">
          <CodeSpan fontSize="30px">initial</CodeSpan> - Sets this property to
          its default value.
        </ListItem>
        <ListItem fontSize="30px">
          <CodeSpan fontSize="30px">inherit</CodeSpan> - Inherits this property
          from its parent element.
        </ListItem>
      </UnorderedList>
      <Notes>
        <ul>
          <li>What would that mean?</li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">
              Box Sizing Visual
            </a>
          </li>
          <li>
            Devs tend to set border-box by default, because it is way easier to
            calculate
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Exercise Time! 🤯</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Exercise #2</Heading>
      <Heading fontSize="30px" margin="0px" padding="0px">
        What is the total width of the <CodeSpan fontSize="30px">div</CodeSpan>?
      </Heading>
      <CodePane language="html" theme={prism}>
        {`  <div>
    woo a div
  </div>`}
      </CodePane>
      <CodePane language="css" theme={prism}>
        {`div {
    border: 4px solid black;
    padding: 10px;
    width: 200px;
  }`}
      </CodePane>
      <Appear>
        <Text fontSize="30px">
          200px (width) + 20px (left + right padding) + 8px (left + right
          border) + 0px (left + right margin) = 228px
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>🤯</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>🤮</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Most of the developers haven't mastered CSS yet!</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Next Time!</Heading>
        <Text>We will dive into the depths of layouting with CSS!</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Learn more about CSS</Heading>
        <UnorderedList>
          <ListItem>
            <a href="http://www.dontfeartheinternet.com/">
              http://www.dontfeartheinternet.com/
            </a>
          </ListItem>
          <ListItem>
            <a href="https://www.w3schools.com/css/default.asp">
              W3Schools CSS Tutorial
            </a>
          </ListItem>
          <ListItem>
            <a href="https://flukeout.github.io/">CSS Diner</a>
          </ListItem>
          <ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
              MDN Learn CSS
            </a>
          </ListItem>
          <ListItem>
            <a href="https://css-tricks.com/where-do-you-learn-html-css-in-2020/">
              CSS-Tricks - Where do you learn HTML & CSS in 2020
            </a>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    {/* <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={cssLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide> */}
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById('root'))
