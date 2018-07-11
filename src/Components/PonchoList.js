import React, { Component } from 'react'
import { getPonchos, deletePoncho } from '../actions/actions'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PonchoModal from "./PonchoModal";
import CartModal from "./CartModal";
import Navbar from "./Navbar";
import "../App.css";


let ponchoObject = getPonchos()


class PonchoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      ponchoModal: false,
      cartModal: false,
      clickedPoncho: ''
    }
  }

  componentDidMount() {
    ponchoObject.then(data => {
      this.setState({data: data.ponchos})
    })
  }

  togglePonchoModal = (e) => {
    let clickedPoncho
    if (e) {
      const id = parseInt(e.target.id)
      clickedPoncho = this.state.data.filter(poncho => poncho.id === id)
    }
    this.setState({
      ponchoModal: !this.state.ponchoModal,
      clickedPoncho: clickedPoncho
    })
  }

  toggleCartModal = (e) => {
    this.setState({
      cartModal: !this.state.cartModal
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
  
  sendPonchoById(id) {

  }
  
  render() {
  const ponchos = this.state.data.map((poncho, index) => {
    return <Card key={poncho.id} className="img-card border-white">
        <CardImg id={poncho.id} onClick={this.togglePonchoModal} src={poncho.image} alt="poncho" />
        <CardBody className="text-left">
          <CardSubtitle>{poncho.name}</CardSubtitle>
          <CardText>{poncho.description}</CardText>
          <Button onClick={this.handleDelete.bind(this, poncho)}>
            Delete Poncho
          </Button>
        </CardBody>
      </Card>;
  })

  
    return (
      <React.Fragment>
        <Navbar toggleState={this.toggleCartModal} />
        <div className='grid'>
          {ponchos}

          {this.state.ponchoModal ? <PonchoModal passedState={this.state} toggleState={this.togglePonchoModal} /> : null}

          {this.state.cartModal ? <CartModal passedState={this.state} toggleState={this.toggleCartModal} /> : null}
        </div>
      </React.Fragment>
    )
  }
}

export default PonchoList

