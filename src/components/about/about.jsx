import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
        <div class="about d-flex justify-content-center align-items-center text-center">
        <div>
            <h1 class="py-3">ABOUT COMPONENT</h1>
            <div class="d-flex justify-content-center align-items-center">
                <div class="lines bg-white"></div>
                <i class="px-2 fa-solid fa-star"></i>
                <div class="lines bg-white"></div>
            </div>
            <div class="d-flex container text-start"> 
                <p class="p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p class="p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

        </div>
    </div>
    )
  }
}
