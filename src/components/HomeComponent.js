import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}){
    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </div>
    )
}

function Home(props){
    return(
        <div className='container'>
            <div className='row-align-items-card'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );

}

export default Home;
