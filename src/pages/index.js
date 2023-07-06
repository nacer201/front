import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Sidebar from "../components/SideBar"
import { BrowserRouter } from 'react-router-dom';


const IndexPage = () => (
 <div >
 
    <Header/>
     <Sidebar/>
   
  </div> 
)
export default IndexPage
