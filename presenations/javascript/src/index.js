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

const jsLogo =
  'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'

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

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Web Development for Beginners</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          🎉 JavaScript 🎉
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Image src={jsLogo} size={500} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is JavaScript (JS)?</Heading>
      <FlexBox justifyContent="left">
        <UnorderedList fontSize="30px">
          <Appear>
            <ListItem>Programming language built for the web</ListItem>
          </Appear>
          <Appear>
            <ListItem>Has nothing in common or isn't based on Java</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Was more and more standardized across browsers thanks to Ecma
              International
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>The js standard is called ECMAScript</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Thanks to TypeScript or Babel we can use new features, before they
              are implemented
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>JS is an interpreted language</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Basics
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Including JS on a page</Heading>
      <FlexBox>
        <CodePane language="html" theme={prism}>
          {`<script type="text/javascript">//JS code goes here</script>`}
        </CodePane>
      </FlexBox>
      <Heading>Including external JS on a page</Heading>
      <FlexBox>
        <CodePane language="html" theme={prism}>
          {`<script type="text/javascript">//JS code goes here</script>`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Comments</Heading>
      <Text>Make sure you use comments only in complex situations.</Text>
      <UnorderedList fontSize="30px">
        <ListItem>
          Use <code>//</code> for single line comments
        </ListItem>
        <ListItem>
          Use <code>/* */</code> for multi-line comments.
        </ListItem>
      </UnorderedList>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`// My name is Tobi

/*My name
is
Mr Tobi
*/`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Syntax</Heading>
      <Text fontSize="30px">
        JavaScript syntax is the set of rules, how JavaScript programs are
        constructed
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Syntax</Heading>
      <FlexBox>
        <UnorderedList fontSize="30px">
          <ListItem>
            JavaScript is Case Sensitive. <code>unitybuddy</code> and{' '}
            <code>unityBuddy</code> are two different variables. .
          </ListItem>
          <ListItem>You can't use hyphens(-) in JavaScript</ListItem>
          <ListItem>
            Every Js line should be ended with a semicolon <code>;</code>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Variables</Heading>
      <Text>
        Variables are stand-in values that you can use to perform operations.
        You should be familiar with them from math class.
      </Text>
      <Text>
        You have three different possibilities for declaring a variable in
        JavaScript, each with its own specialties
      </Text>
    </Slide>
    <Slide>
      <Heading>Variables</Heading>
      <FlexBox>
        <UnorderedList fontSize="30px">
          <ListItem>
            <code>var</code> — The most common variable. It can be reassigned
            but only accessed within a function. Variables defined with{' '}
            <code>var</code> move to the top when the code is executed.
          </ListItem>
          <ListItem>
            <code>const</code> — Can not be reassigned and not accessible before
            they appear within the code.
          </ListItem>
          <ListItem>
            <code>let</code> — Similar to <code>const</code>, the{' '}
            <code>let</code> variable can be reassigned but not re-declared.
          </ListItem>
        </UnorderedList>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`var x = 5; // Store value of 5
let x = 10; // Store value of 10
const PI = 3.14159265359; // Store this value of 3.14159265359;`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Data Type</Heading>
      <Text fontSize="30px">
        In programming, data types is an important concept. To be able to
        operate on variables, it is important to know something about the type.
        Without data types, a computer cannot safely solve this.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let x = 16 + "Volvo";`}
        </CodePane>
      </FlexBox>
      <Text fontSize="30px">JavaScript will treat the example above as</Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let x = "16" + "Volvo";`}
        </CodePane>
      </FlexBox>
      <Quote fontSize="30px">
        When adding a number and a string, JavaScript will treat the number as a
        string.
      </Quote>
    </Slide>
    <Slide>
      <FlexBox height="100%" justifyContent="center" alignItems="center">
        <Image
          width={1200}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--mGQ-cA-T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1627219786897/X8pfOqg1s.png"
        ></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Data Type</Heading>
      <Text fontSize="30px">
        JavaScript has dynamic types. This means that the same variable can be
        used to hold different data types
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
____________________________________
x = "Cat" // Now x is a Cat 😹`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading marginBottom={0}>Functions</Heading>
      <Text fontSize="30px">
        Function names can contain letters, digits, underscores, and dollar
        signs (same rules as variables). <br />A JavaScript function is defined
        with function keyword, followed by a name, followed by parentheses
        <code>()</code>.
        <br />
        The parentheses may include parameter names separated by commas:
        (parameter1, parameter2, ...)
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`function name(parameter1, parameter2, parameter3) {
  // code to
}`}
        </CodePane>
      </FlexBox>
      <Notes>
        Function parameters are listed inside the parentheses () in the function
        definition.
        <br />
        Function arguments are the values received by the function when it is
        invoked.
        <br />
        Inside the function, the arguments (the parameters) behave as local
        variables.
        <br />
        The code to be executed, by the function, is placed inside curly
        brackets: {}
      </Notes>
    </Slide>
    <Slide>
      <Heading>Functions</Heading>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`// Sample Code
function getDaysBetweenTwoDates(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diff = endDate - startDate;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Concept of Objects</Heading>
      <Text fontSize="30px">
        The concept of objects might be somewhat hard so let's take a simple
        example.
      </Text>
      <Text fontSize="30px"> In real life, a flight is an object.</Text>
      <Text fontSize="30px">
        Properties of a flight are color and weight, and the methods are
        pitch(up and down), roll etc.
      </Text>
    </Slide>
    <Slide>
      <Image
        height={650}
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--kEZVd4Cf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1627221203986/bS4m2V6SI.png"
      ></Image>
      <Notes>
        All flights have the same properties, but the property values differ
        from flight to flight.
        <br />
        All flight have the same methods, but the methods are performed at
        different times.
        <br />
        This is the concept of an Object! It's super easy 🙌
      </Notes>
    </Slide>
    <Slide>
      <Heading>Object in JS</Heading>
      <Text fontSize="30px">
        This code assigns a simple value (F12) to a variable named car
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let flight = "F12";`}
        </CodePane>
      </FlexBox>
      <Notes>
        Objects are variables too. But objects can contain many values
      </Notes>
    </Slide>
    <Slide>
      <Heading>Object in JS</Heading>
      <Text fontSize="30px">
        This code assigns many values (F12, 41 200, White) to a variable named
        flight
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`const flight = {name:"F12", weight:"41 200", color:"white"};`}
        </CodePane>
      </FlexBox>
      <Text fontSize="30px">
        The values are written as name: value pairs (name and value separated by
        a colon).
      </Text>
      <Quote>
        It is a common practice to declare objects with the const keyword.
      </Quote>
      <Notes>
        Objects are variables too. But objects can contain many values.
      </Notes>
    </Slide>
    <Slide>
      <Heading>Strings</Heading>
      <Text fontSize="30px">
        A string (or a text string) is a series of characters just like "Sinner
        Schrader".
        <br />
        Strings are written with quotes. You can use single or double quotes:
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let name = "Sinner Schrader" // or
let name = 'Sinner Schrader'`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Booleans</Heading>
      <Text fontSize="30px">
        Very often, in programming, you will need a data type that can only have
        one of two values, like
      </Text>
      <UnorderedList fontSize="30px">
        <ListItem>YES / NO</ListItem>
        <ListItem>ON / OFF</ListItem>
        <ListItem>TRUE / FALSE</ListItem>
      </UnorderedList>
      <Quote>
        For this, JavaScript has a Boolean data type. It can only take the
        values true or false.
      </Quote>
    </Slide>
    <Slide>
      <Heading>Booleans</Heading>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`let isProgrammingHard = false
// or
let isFoodNecessary = true`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Arrays</Heading>
      <Text fontSize="30px">
        JavaScript arrays are used to store multiple values in a single
        variable.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`const authors = ["Victoria", "Chris", "Catalin"];`}
        </CodePane>
      </FlexBox>
      <Text fontSize="30px">
        Simply, an array is a special variable, which can hold more than one
        value at a time.
      </Text>
    </Slide>
    <Slide>
      <Heading>Accessing an Array Element</Heading>
      <Text fontSize="30px">
        You access an array element by referring to the index number:
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`const games = ["COD", "Overwatch", "Among Us"];
let x = games[0];    // x = "COD"`}
        </CodePane>
      </FlexBox>
      <Quote fontSize="30px">
        Array indexes start with 0.
        <br />
        <code>[0]</code> is the first element. <code>[1]</code> is the second
        element.
      </Quote>
    </Slide>
    <Slide>
      <Heading>Adding an Array Element</Heading>
      <Text fontSize="30px">
        To add a new element, we need to <code>push</code> it
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`const games = ["COD", "Overwatch", "Cyberpunk"];
fruits.push("Hill Climb Racing");  //`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Changing an Array Element</Heading>
      <Text fontSize="30px">
        Following code changes the first element of games
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`cars[0] = "Cyberpunk"; // Change COD into Cyberpunk`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Array Elements Can Be Objects</Heading>
      <Text fontSize="30px">
        JavaScript variables can be objects. Arrays are special kinds of
        objects.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myGames;`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Image
        height={650}
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--mejMOTqd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1627256135616/_47jxnuNI.png"
      ></Image>
    </Slide>
    <Slide>
      <Image
        height={650}
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--Re17bCFj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1627256199160/g-eagkkSG.png"
      ></Image>
    </Slide>
    <Slide>
      <Heading>Conditionals</Heading>
      <Text fontSize="30px">
        Very often when we write code, we want to perform different actions for
        different decisions.
      </Text>
      <Text fontSize="30px">
        <code>if</code>
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`if (condition) {
  //  block of code to be executed if the condition is true
}`}
        </CodePane>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`if (age < 18) {
  message = "Too young to vote";
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Conditionals</Heading>
      <Text fontSize="30px">
        <code>else</code>
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}`}
        </CodePane>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`if (age < 18) {
  message = "Too young to vote";
} else {
  message = "Old enough to vote";
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Conditionals</Heading>
      <Text fontSize="30px">
        <code>else if</code>
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Conditionals</Heading>
      <Text fontSize="30px">
        <code>switch</code>
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`switch (new Date().getDay()) { // The getDay() method returns the weekday as a number between 0 and 6.
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Loops</Heading>
      <Text fontSize="30px">
        Loops are cool, if you want to run the same code over and over again,
        each time with a different value.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<be>";`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Loops</Heading>
      <Text fontSize="30px">Instead of this, you can just use a loop</Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}`}
        </CodePane>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`for (statement 1; statement 2; statement 3) {
  // code block to be executed
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Loops</Heading>
      <Text fontSize="30px">
        The while loop loops through a block of code as long as a specified
        condition is true. It means the value is changing and while the
        condition is true, while loops work.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`while (condition) {
  // code block to be executed
}`}
        </CodePane>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`while (i < 10) { // While the variable is less than 10
  text += "The number is " + i;
  i++;
}`}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Loops</Heading>
      <Text fontSize="30px">
        The do...while loop is a variant of the while loop. This loop will
        execute the code block once, before checking if the condition is true,
        then it will repeat the loop as long as the condition is true.
      </Text>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`do {
  // code block to be executed
}
while (condition);`}
        </CodePane>
      </FlexBox>
      <FlexBox>
        <CodePane language="js" theme={prism}>
          {`do {
  text += "The number is " + i;
  i++;
}
while (i < 10);`}
        </CodePane>
      </FlexBox>
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
        <Heading>Exercise Time! 🤯</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Exercise</Heading>
      <Text fontSize="30px">
        We want to create a phonebook application step-by-step. For this first
        think about a potential structure how we could start.
      </Text>
      <UnorderedList fontSize="30px">
        <ListItem>
          Think in simple small steps. We don't want to involve UI yet
        </ListItem>
        <ListItem>What functionality do we need?</ListItem>
        <ListItem>
          How could functions, data be organized? Think about the different data
          types and what is worth putting in small capsulated functionality
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Combining JavaScript with HTML/CSS</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Debugging</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Next steps for my coding career</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Next steps for my coding career</Heading>
      <UnorderedList>
        <ListItem>
          <a href="http://www.dontfeartheinternet.com/">
            Don't fear the Internet
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.w3schools.com/js/default.asp">
            W3Schools JS Tutorial
          </a>
        </ListItem>
        <ListItem>
          <a href="https://nodeschool.io/#workshoppers">
            NodeSchool Workshoppers
          </a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">
            MDN Learn JavaScript
          </a>
        </ListItem>
        <ListItem>
          <a href="https://github.com/micromata/awesome-javascript-learning">
            Awesome JavaScript Learning
          </a>
        </ListItem>
        <ListItem>
          <a href="https://beginnerjavascript.com/">
            💰 Wes Bos Beginner JavaScript course
          </a>
        </ListItem>
        <ListItem>Don't give up! ✊</ListItem>
      </UnorderedList>
    </Slide>
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById('root'))
