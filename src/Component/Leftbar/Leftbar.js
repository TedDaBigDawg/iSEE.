import React from 'react'
import "./leftbar.css"
import browse from "../../Icons/explore.png";
import Friend from "../../Icons/friends (1).png";
import parties from "../../Icons/friends.png";
import Setting from "../../Icons/settings.png";
import Logout from "../../Icons/exit.png"
import {Link} from 'react-router-dom';


export default function Leftbar() {
  return (
    <div className='leftbarMainContainer'>
      <h2 className='logoname'><Link to="/">iSEE</Link><span className='dot'>.</span></h2>
      <div>
        <p className='menu'>Menu</p>
        <ul>
        <li>
            <img src={`${browse}`}  className="listicons" alt="" />
            <p className='lilistname'><Link to="/">Home</Link></p>
          </li>
          <li>
            <img src={`${browse}`}  className="listicons" alt="" />
            <p className='lilistname'><Link to="/discover">Discover Movies</Link></p>
          </li>
        </ul>
      </div>

      <div>
        <p className='menu'>Social</p>
        <ul>
          <li>
            <img src={`${Friend}`} className="listicons" alt="" />
            <p className='lilistname'><a target="_blank" rel="noopener noreferrer" href='https://www.ranker.com/list/best-actors-2023/alex-alvarez'>Top Actors</a></p>
          </li>  
          <li>
            <img src={`${parties}`} className="listicons" alt="" />
            <p className='lilistname'><a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/chart/top/'>Top Movies</a></p>
          </li>
        </ul>
      </div>

      <div>
        <p className='menu'>General</p>
        <ul>
          <li>
            <img src={`${Setting}`} className="listicons" alt="" />
            <p className='lilistname'>Settings</p>
          </li>  
          <li>
            <img src={`${Logout}`} className="listicons" alt="" />
            <p className='lilistname'>Log out</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
