import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardColumns, CardDeck, CardGroup, Container} from "react-bootstrap";
import moon from "../assets/moon_v07.png"
import "../css/ART.css"

function ART() {
    return (
        <div>
            <div className="grid">
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>
                <Card className="box" style={{width: '18rem'}}>
                    <Card.Img src={moon}/>
                </Card>

            </div>
        </div>
    );
}

export default ART;
