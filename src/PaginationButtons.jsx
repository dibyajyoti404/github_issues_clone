import React, { useState } from 'react'

const PaginationButtons = ({ totalList, listPerPage,setCurrentPage ,currentPage}) => { 
    let buttonNumbers = [];
    for (let i = 0; i < totalList / listPerPage; i++) {
        buttonNumbers.push(i );
    } 
    console.log('current page is ')
    return (
        <div>
            <nav >
                <ul className="pagination justify-content-center">
                     
                    {buttonNumbers.map((button,index)=>{
                        return(
                            <li className={currentPage===button?"page-item activate":"page-item"} aria-current="page" key={index}>
                            <a className="page-link" href="#" onClick={()=>setCurrentPage(button)}>{button+1}</a>
                             </li> 
                        )
                    })}
                     
                </ul>
            </nav>
        </div>
    )
}

export default PaginationButtons
