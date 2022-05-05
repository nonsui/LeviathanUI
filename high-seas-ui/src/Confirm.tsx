import * as React from "react";

class Confirm extends React.Component{
    public render(){
        return(

            <div className="confirm-wrapper confirm visible">
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>HighSeas Title</span>
                    </div>
                    <div className="confirm-content-container">
                        <p>This is where out content should go</p>
                    </div>
                    <div className="confirm-buttons-container">
                        <button className="confirm-cancel">Cancel</button>
                        <button className="confirm-ok">ok</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;