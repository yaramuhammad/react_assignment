import React, { Component } from 'react'
import Card from '../card/card';
export default class portfolio extends Component {
  render() {
    return (
        <div class="contact text-center container py-5">

        <h1 class="py-3">PORTFOLIO COMPONENT</h1>
        <div class="d-flex justify-content-center align-items-center">
            <div class="lines bg-dark"></div>
            <i class="px-2 text-dark fa-solid fa-star"></i>
            <div class="lines bg-dark"></div>
        </div>
        <div class="row g-4 py-5">
            <Card img={require('./images/poert1.png')}/>
            <Card img={require('./images/port2.png')}/>
            <Card img={require('./images/port3.png')}/>
            <Card img={require('./images/poert1.png')}/>
            <Card img={require('./images/port2.png')}/>
            <Card img={require('./images/port3.png')}/>

        </div>
    </div>
    )
  }
}
