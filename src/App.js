import React from "react";
import KeypadNew from "./KeypadNew";
import Display from "./Display";


function App() {
    return (
        <main>
            <div id="calculator">
              <Display />
              <KeypadNew />
            </div>
        </main>
    );
}

export default App;