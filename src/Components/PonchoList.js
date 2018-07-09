import React, { Component } from 'react'
import { getPonchos, deletePoncho } from '../actions/actions'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import AddModal from "./AddModal.js";
import "../App.css";


let ponchoObject = getPonchos()


class PonchoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      modal: false
    }
  }

  componentDidMount() {
    ponchoObject.then(data => {
      this.setState({data: data.ponchos})
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete(poncho, e) {
    e.preventDefault()
    deletePoncho(poncho.id)
    const ponchos = this.state.data.slice()
    const index = ponchos.indexOf(poncho)
    ponchos.splice(index, 1)
    this.setState({
      data: ponchos
    })
  } 
  
  render() {
    const ponchos = this.state.data.map(poncho => {
      return <Card key={poncho.id} className="img-card">
          <CardImg src={poncho.image} onClick={this.toggle} alt="poncho" />
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{poncho.description}</CardText>
            <Button onClick={this.handleDelete.bind(this, poncho)}>
              Delete Poncho
            </Button>
            {this.state.modal ? <AddModal passState={this.state.modal} toggleState={this.toggle}/> : null}
          </CardBody>
        </Card>;
  })
    
    return (
      <div className='grid'>
         {ponchos}
      </div>
    )
  }
}




export default PonchoList

