import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody, CardSubtitle
} from 'reactstrap';
import { getPonchos, deletePoncho } from './actions/actions'
import PonchoModal from "./Components/PonchoModal";
import CartModal from "./Components/CartModal";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AddPoncho from "./Components/AddPoncho";
import "./App.css";


let ponchoObject = getPonchos()


class PonchoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      ponchosModal: false,
      cartModal: false,
      addPonchoModal: false,
      clickedPoncho: ''
    }
  }

  componentDidMount() {
    ponchoObject.then(data => {
      this.setState({data: data.ponchos})
    })
  }

  togglePonchosModal = (e) => {
    let clickedPoncho
    if (e) {
      const id = parseInt(e.target.id, 0)
      clickedPoncho = this.state.data.filter(poncho => poncho.id === id)
    }
    this.setState({
      ponchosModal: !this.state.ponchosModal,
      clickedPoncho: clickedPoncho
    })
  }

  toggleAddPonchoModal = (e) => {
    this.setState({
      addPonchoModal: !this.state.addPonchoModal
    })
  }

  toggleCartModal = (e) => {
    this.setState({
      cartModal: !this.state.cartModal
    })
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
  const ponchos = this.state.data.map((poncho, index) => {
    return (
      <li style={{listStyleType: 'none'}}key={poncho.id}>
        <Card key={poncho.id} className="img-card border-white">
          <CardImg className='card-image' id={poncho.id} onClick={this.togglePonchosModal} src={poncho.image} alt="poncho" />
          <CardBody className="text-left">
            <CardSubtitle><strong>{poncho.name}</strong></CardSubtitle>
            <CardText>${poncho.price}.00</CardText>
          </CardBody>
        </Card>
      </li>
    )
  })

    return (
      <div className="app">
        <img className="hero-img" src="assets/store-front.jpg" alt="store front" />
        <Header />
        <Navbar toggleCartModal={this.toggleCartModal} toggleAddPonchoModal={this.toggleAddPonchoModal}/>
        <ul className="grid">
          {ponchos}

          {this.state.ponchosModal ? <PonchoModal passedState={this.state} toggleState={this.togglePonchosModal} /> : null}

          {this.state.cartModal ? <CartModal passedState={this.state} toggleState={this.toggleCartModal} /> : null}
          
          {this.state.addPonchoModal ? <AddPoncho passedState={this.state} toggleState={this.toggleAddPonchoModal} /> : null}
        </ul>
      </div>
    )
  }
}

export default PonchoList

