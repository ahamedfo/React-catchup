import HelloWorld from './HelloWrld.js'
import logo from './logo.svg';



export default function Header(props){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>The title is: {props.header}</h1>
            <HelloWorld 
            prop1 = 'hi'
            prop2 = 'hello'
            prop3 = 'what?'
            
            />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
            </a>
      </header>
    )
}