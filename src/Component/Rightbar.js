import React from 'react'
import "./rightbar.css"
import image1 from "../Images/drockpic.jpg"
import image2 from "../Images/samuel.jpg"
import image3 from "../Images/keanureeves.jpg"
import image4 from "../Images/leonardo.jpg"
import image5 from "../Images/denzel.jpg"
import image6 from "../Images/phoenix.jpg"
import image7 from "../Images/strange.jpg"

export default function Rightbar() {
  return (
    <div className='rightbarMainContainer'>
      <div style={{marginTop:"50px"}}>
        <p className='topactorsheader'>Top Actors</p>
        <div style={{marginLeft:"12px" , paddingTop:"10px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0425005/?ref_=nv_sr_srsg_0_tt_4_nm_4_q_Dwayne%2520Johnson'>
            <img src={`${image1}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0000168/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Samuel'>
            <img src={`${image2}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0000206/?ref_=nv_sr_srsg_0_tt_2_nm_6_q_keanu'>
            <img src={`${image3}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0000138/?ref_=nv_sr_srsg_1_tt_2_nm_5_q_leo'>
            <img src={`${image4}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0000243/?ref_=nv_sr_srsg_0_tt_2_nm_6_q_den'>
            <img src={`${image5}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm0001618/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_joa'>
            <img src={`${image6}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>

        <div style={{marginLeft:"12px" , paddingTop:"20px"}}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.imdb.com/name/nm1212722/?ref_=nv_sr_srsg_1_tt_3_nm_1_q_benedict%2520cumberbatch'>
            <img src={`${image7}`} className="Profileimage" alt="" />
          </a>
          <div className='dott'></div>
        </div>
      </div>
    </div>
  )
}
