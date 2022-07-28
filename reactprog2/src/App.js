import logo from './logo.svg'
import './app.css'

function app(){
    return(
        <header className="red">
            <h1>Here is Green content from App.js!</h1>
            <img src={logo}/>
            <p>Here is content!</p>
        </header>
    );
}

export default app;