import React, { Component } from 'react'
import { Outlet,Link } from 'react-router-dom'

export default class layout extends Component {
  render() {
    return (
        <body>
        <nav class="navbar navbar-expand-sm navbar-light py-4">
              <div class="container">
                <Link class="navbar-brand" to="/">Start Framework</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link me-3 active" to="/about" aria-current="page">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-3" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-3" to="/contact">Contact</Link>
                        </li>
                    </ul>
                   
                </div>
          </div>
        </nav>
        <Outlet/>
        <footer>
        <div class="container">
            <div class="row py-5">
                <div class="col-4 my-4">
                    <div class="text-center">
                        <p class="fs-2 fw-bold">LOCATION</p>
                        <p>2215 John Daniel Drive <br/>Clark, MO 65243</p>
                    </div>
                </div>
                <div class="col-4 my-4">
                    <div class="text-center">
                        <p class="fs-2 fw-bold">AROUND THE WEB</p>
                        <div class="d-flex justify-content-center">
                            <span class="mx-2 rounded-circle border border-1 border-white d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook p-3"></i>
                            </span>
                            <span class="mx-2 rounded-circle border border-1 border-white d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-twitter p-3"></i>
                            </span>
                            <span class="mx-2 rounded-circle border border-1 border-white d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-linkedin p-3"></i>
                            </span>
                            <span class="mx-2 rounded-circle border border-1 border-white d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-globe p-3"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-4 my-4">
                    <div class="text-center">
                        <p class="fs-2 fw-bold">ABOUT FREELANCER</p>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center footer-bottom">
            <br/>
            <p>Copyright © Your Website 2021</p>
            <br/>
        </div>

        
    </footer>
     </body>
    )
  }
}
