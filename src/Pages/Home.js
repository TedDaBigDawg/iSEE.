import React from 'react'
import Maincontainer from '../Component/Maincontainer/Maincontainer'
import Rightbar from '../Component/Rightbar'
import "./home.css"

export default function Home() {
  return (
    <div className='mainContainerForHome'>
          <Maincontainer/>
          <Rightbar/>
    </div>
  )
}
