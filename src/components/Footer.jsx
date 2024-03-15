import React from "react";

function Footer(){
const date=new Date();
const year=date.getFullYear();

    return(
        <div className="footer">
            <p>copyright <i class="fas  fa-copyright"></i>&nbsp;{year}</p>
        </div>
    );
}
export default Footer;  