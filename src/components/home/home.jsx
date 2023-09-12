import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
        <div class="home d-flex justify-content-center align-items-center text-center">
        <div>
            <img class="w-75" src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="home"/>
            <h1 class="py-3">START FRAMEWORK</h1>
            <div class="d-flex justify-content-center align-items-center">
                <div class="lines bg-white"></div>
                <i class="px-2 fa-solid fa-star"></i>
                <div class="lines bg-white"></div>
            </div>
            <p class="py-3">Graphic Artist - Web Designer - Illustrator</p>

        </div>
    </div>
    )
  }
}
