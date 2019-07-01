## Intro to React Breakout

### [Repo](https://github.com/vasiliy-klimkin/intro-to-react-w6d1brk)

For the rest of the hour, we will be continuing where we left off, and talking about state vs props, and conditionals.

### Props Vs State

In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.


### Props

Example of props:

```jsx
// somewhere declaration of a variable
const name = "Vasiliy";

// ....inside of some render method
render() {
  return (
      <div>
        <NamePrinter nameProp={name}>
      </div>
    )
}

// ... NamePrinter component

export default class NamePrinter extends Component {
  // ...

  render() {
    <div>
      <h1>Hi my name is {this.props.nameProp}</h1>
    </div>
  }
}

```

### State

State are variables set in the constructor. When the state variable changes (gets updated)
the entire dom re-renders, which gives you a reactive way to show change the page without a refresh ( kind of like Jquery ).

Note: the state is an object!!

to make a state we need to use a constructor

```jsx

export default class Count extends Component {
  constructor(props) {
    super(props)

    // set your state inside of this object.
    this.state = {
      counter: 0
    }
  }
}

```

To update the state we must use the method `setState()`

```jsx

countUp = () => {
  let tempCount = this.state.counter;
  tempCounter++;
  this.setState({ counter: tempCounter });
}

```

### Using Conditionals

(Condionals we Worked on here)[https://github.com/vasiliy-klimkin/intro-to-react-w6d1brk/blob/master/lecture/src/App.jsx]

We cannot use conditionals inside of a render of jsx

Wrong Way!

```html
render(){
  return (
    <div>
      {if (true) return <h1>Hello</h1>}
    </div>
  )
}
```

We cannot do this because JSX only takes in expressions! For this we use:

```html
render(){
  return (
    <div>
      {true && 'Hello'}
    </div>
  )
}
```

Or Turniary Operators...

```html
render(){
  return (
    <div>
      {true ? <h1>hello im true</h1> : <h2>Hi i was false</h2>}
    </div>
  )
}
```

Remember how some things will be different such as `class` is now `className` and so on.
Here is a page on all of the events that react has to offer and its syntax.



