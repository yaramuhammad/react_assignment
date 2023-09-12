import React, { Component } from 'react'

export default class card extends Component {
  render() {
    return (
        <div class="col-4">
        <div class="position-relative item">
            <img src={this.props.img} alt="item" class="w-100 rounded"/>
            <div class="layer position-absolute top-0 start-0 end-0 bottom-0 rounded d-flex justify-content-center align-items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
        </div>
    </div>
    )
  }
}
