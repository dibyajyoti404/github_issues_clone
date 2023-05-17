import React from 'react'
import './Body.css'
import PaginationData from './PaginationData' 

const Body = () => {
    return (
        <>
            <section className="body-section px-4 mt-4">
                <div className="first-body">
                    <form className='w-100'>
                        <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />


                    </form>
                    <div className="combo-btn ms-4">
                        <button type="button" className="btn btn-outline-secondary  body-btn-left">
                        <svg viewBox="0 0 16 16" width="16px" height="16px" style={{ filter: "invert(1)" }} >
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>                       
                            Labels</button>
                        <button type="button" className="btn btn-outline-secondary  body-btn-right">
                        <svg viewBox="0 0 16 16" width="16px" height="16px" style={{ filter: "invert(1)" }} >
                            <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
                        </svg> Milestones</button>
                    </div>
                    <button type="button" className="btn btn-success ms-4" style={{width:"14%"}}>New Issues</button>
                </div>
                <div className="second-body mt-3 outer-border">
                    <div className="list-group">
                    
                        <li className="list-group-item list-group-item-dark inner-border">
                            
                            <div className="d-flex w-100 justify-content-between">
                            <div className="first-list-left ">
                            <svg viewBox="0 0 16 16" width="16px" height="16px" style={{ }} >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                        </svg>
                                <span className='white-color'>974 open</span>
                                <span className='faded-color'>11,676 closed</span>
                            </div>
                            <div className="first-list-right d-flex">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Author
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark ">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Label
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Milestones
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Assignee
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 faded-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </li>
                        <PaginationData />

                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Body
