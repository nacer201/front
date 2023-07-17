import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Sidebar from "../components/SideBar"
import Bar from "../components/Bar"
import Drive from "../components/drive"
import { BrowserRouter } from 'react-router-dom';


const IndexPage = () => (
 <div >
 
    <Header/>
     <Sidebar/>
     <Bar/>
     
    
   
  </div> 
)
export default IndexPage
