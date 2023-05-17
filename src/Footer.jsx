import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <section className="footer1">
            <span style={{color:"white"}}> ProTip! <span style={{color:"#2f81f7"}}><a>no:milestone</a></span> will show everything without a milestone.</span>
      </section>
      <section className="footer2">
      <div className="container-fluid">
                    <div>
                    
                    <span style={{color:"white"}}><a className="navbar-brand" href="#">
                        <svg viewBox="0 0 16 16" width="32px" height="32px" style={{ filter: "invert(1)" }} >
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </a>© 2023 GitHub</span>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item footer-text">
                                <a className="nav-link" aria-current="page" href="#">Terms</a>
                                <a className="nav-link" aria-current="page" href="#">Privacy</a>
                                <a className="nav-link" aria-current="page" href="#">Security</a>
                                <a className="nav-link" aria-current="page" href="#">Status</a>
                                <a className="nav-link" aria-current="page" href="#">Docs</a> 
                                <a className="nav-link" aria-current="page" href="#">Contact Github</a> 
                                <a className="nav-link" aria-current="page" href="#">Pricing</a> 
                                <a className="nav-link" aria-current="page" href="#">API</a> 
                                <a className="nav-link" aria-current="page" href="#">Training</a> 
                                <a className="nav-link" aria-current="page" href="#">Blog</a> 
                                <a className="nav-link" aria-current="page" href="#">About</a> 
                     </li>
                    </ul>
       </div>
      </section>
    </div>
  )
}

export default Footer
