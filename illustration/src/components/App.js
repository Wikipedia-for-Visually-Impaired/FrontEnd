import React from "react";
import Entry from "./Entry";
import choices from "../choices";
import Navbar from "./Navbar";
function App(){
    return(
        <div>
          <Navbar/>
          <div>
        <h1><span>ILLUSTRATION</span></h1>
        <h2>Choose the picture you want to get description of and click on upload</h2>
        <div className="container1">
            <div style={{width: "25%"}}>
                <p><span>Photo</span></p> 
           </div>
           <div style={{width: "65%"}}>
              <p><span>DESCRIPTION GENERATED</span></p>
           </div>
        </div>
        <div className="dictionary">
        {choices.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            imgURL={emojiTerm.imgURL}
            description={emojiTerm.description}
          />
        ))}
      </div>
    </div>
        </div>
    );
}

export default App;