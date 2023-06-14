import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

function About() {


    return (
        <div>
            <Card className="card-background text-center card-bg">
                <Card.Title as="h1" >
                   Who We Are
                </Card.Title>
                <Card.Body>
                    <Card.Text >
                    New to Chandigarh?- Welcome Aboard ! Search for Anything, Anytime, Anywhere related to Chandigarh using CityMate. 
                    The city beautiful is envisioned to become leader in liveability, sustainability, equality and innovation. 
                    One Stop Solution to all your queries and concerns regarding this City.
                    </Card.Text>
                </Card.Body>
                </Card>
            <br />
        </div>  
    )
}

export default About;
