import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    return (
        <div class="contact text-center container py-5">
            <h1 class="py-3">CONATCT SECTION</h1>
            <div class="d-flex justify-content-center align-items-center">
                <div class="lines bg-dark"></div>
                <i class="px-2 text-dark fa-solid fa-star"></i>
                <div class="lines bg-dark"></div>
            </div>
            <div class="d-flex justify-content-center">
            <form action="" class="w-50">
                <input type="text" name="" id="" class="form-control my-5" placeholder="Name"/>
                <input type="text" name="" id="" class="form-control my-5" placeholder="Age"/>
                <input type="text" name="" id="" class="form-control my-5" placeholder="Email"/>
                <input type="text" name="" id="" class="form-control my-5" placeholder="Password"/>
                <button class="btn text-white">Send Message</button>
            </form>
        </div>
    </div>
    )
  }
}
