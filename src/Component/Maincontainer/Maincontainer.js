import React from 'react'
import "./maincontainer.css"
import Navbar from '../Navbar/Navbar'
import coverimage from "../../Images/jurassic.jpg"
import itemimage from "../../Images/the-flash.jpeg"
import itemimage1 from "../../Images/john-wick.jpg"
import itemimage2 from "../../Images/Transformers.jpeg"
import itemimage3 from "../../Images/Blue-beetle.jpeg"
import itemimage4 from "../../Images/Oppen.jpeg"
import itemimage5 from "../../Images/darkknight.jpg"
import itemimage6 from "../../Images/godfather.jpg"
import itemimage7 from "../../Images/scarface.jpg"
import itemimage8 from "../../Images/readyplayerone.jpg"
import itemimage9 from "../../Images/parasite.jpg"

export default function Maincontainer() {
    return (
        <div className='mainContainer'>
            <Navbar />
            <div>
                <p className='toppicksheader'>Top Picks</p>
                <img src={`${coverimage}`} className='coverimage' alt='' />
                <div className='ItemsContainer'>
                    <p className='title'>Jurassic World Dominion (2022)</p>
                    <p className='subtitle'>92% Match</p>
                    <div className='btnContainer'>
                        <button className='btnwatch'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - Jurassic World Dominion 2022 Official Trailer  Screen Bites_480p.mp4'>Watch Now</a></button>
                        <div className='watchlater'>
                            <p className='plus'>+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h4 className='submaintitle'>Latest Movies</h4>
                <div style={{ display: 'flex' , marginLeft:"5px" , flexWrap:"wrap" }}>
                    <div className='itemContainer'>
                        <img src={`${itemimage}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - THE FLASH  New Trailer 5 2023 Ben Affleck Michael Keaton Ezra Miller Movie  Warner Bros_1080p.mp4'>Watch Now</a></button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage1}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - JOHN WICK 4 Trailer 2 2023_480p.mp4'>Watch Now</a></button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage2}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - Transformers Rise of the Beasts  Official Trailer 2023 Movie_480p.mp4'>Watch Now</a></button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage3}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - BLUE BEETLE  Final Trailer 2023 Xolo Mariduena  Warner Bros_480p.mp4'>Watch Now</a></button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage4}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'><a target="_blank" rel="noopener noreferrer" href='https://d250vlj93vfz9o.cloudfront.net/y2mate.com - Oppenheimer Trailer 1 2023_480p.mp4'>Watch Now</a></button>
                    </div>



                </div>
            </div>

            <div >
                <h4 className='submaintitle'>Must Watch Movies</h4>
                <div style={{ display: 'flex' , marginLeft:"5px" , flexWrap:"wrap" }}>
                    <div className='itemContainer'>
                        <img src={`${itemimage5}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'>Buy Now....</button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage6}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'>Buy Now....</button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage7}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'>Buy Now....</button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage8}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'>Buy Now....</button>
                    </div>

                    <div className='itemContainer'>
                        <img src={`${itemimage9}`} className={"itemimage"} alt="" />
                        <button className='btnitemcontainer'>Buy Now....</button>
                    </div>



                </div>
            </div>

        </div>
    )
}
