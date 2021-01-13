import React, { useCallback, useState } from 'react'
import {Container, Thumbnail} from './styles'
import backgroundPoster from './../../assets/background_poster.jpg'
import poser1 from './../../assets/poster1.jpg'
import poser2 from './../../assets/poster2.jpg'
import poser3 from './../../assets/poster3.jpg'
import poser4 from './../../assets/poster4.jpg'
import poser5 from './../../assets/poster5.jpg'
import poser6 from './../../assets/poster6.jpg'
import poser7 from './../../assets/poster7.jpg'
import logo_movie1 from './../../assets/cobra_kai_logo.png'
import logo_movie2 from './../../assets/biohackers_logo.png'
import logo_movie3 from './../../assets/black_mirror_logo.png'
import logo_movie4 from './../../assets/lucifer_logo.png'
import logo_movie5 from './../../assets/3_logo.png'
import logo_movie6 from './../../assets/you_logo.png'
import logo_movie7 from './../../assets/lupin_logo.png'
import {AiOutlineDownCircle} from 'react-icons/ai'
import {IoMdAddCircleOutline, IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {RiPlayCircleLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import api from './../../services/api'



const MainComponent: React.FC = () => {
    
    const HandleOpenDesciption = useCallback(() => {
        const ThumB = document.querySelector('.thumbnail')
        ThumB?.classList.toggle('.sectionDescription')
        console.log(ThumB)
      }, [])

    return(
        <Container>
            {/* <div className='background' style={{backgroundImage: `url(${backgroundPoster})`}}></div> */}
            
            <div className='background'>
                <ReactPlayer
                    className='player'
                    url= {[ 'https://www.youtube.com/watch?v=B9U8OgTGDSk',
                            'https://www.youtube.com/watch?v=atHBOUvgBI8',
                            'https://www.youtube.com/watch?v=i9Wc82gCZLE',
                            'https://www.youtube.com/watch?v=NcnK3C5W7SI',
                            'https://www.youtube.com/watch?v=8yyzNQfaQR8'
                    ]}
                    width= '100%'
                    height= '100vh'
                    playing= {true}
                    loop= {true}
                />            
            </div>
             
            <div className='arrowThumbnail previous'><IoIosArrowBack /></div>
            <Thumbnail className='thumbnail' space={0.001}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=B9U8OgTGDSk'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser1})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie1}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>               
                </div>
            </Thumbnail>
            <div  className='arrowThumbnail next'><IoIosArrowForward /></div>
            <Thumbnail space={1}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=atHBOUvgBI8'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser2})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie2}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>1 temporada</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Complexos</span>
                        <span>Comovente</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
            <Thumbnail space={2}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=i9Wc82gCZLE'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser3})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie3}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
            <Thumbnail space={3}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=NcnK3C5W7SI'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser4})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie4}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
            <Thumbnail space={4}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=8yyzNQfaQR8'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser5})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie5}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
            <Thumbnail space={5}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=urnOhIiiuYI'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser6})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie6}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
            <Thumbnail space={6}>
                <div className='sectionSign'>
                    <span>F</span><span>B</span>
                </div>
                <div className='sectionTop10'>
                    <span>TOP</span><br/><span>10</span>
                </div>
                <div className='playTrailer'>
                    <ReactPlayer
                        className='player'
                        url= 'https://www.youtube.com/watch?v=FoiQ-Xr8NDI'
                        width= '316px'
                        height= '204px'
                        playing= {true}
                        loop= {true}
                    />            
                </div>
                <div className='sectionPoser' style={{backgroundImage: `url(${poser7})`}}></div>
                <div className='sectionPlayer'>
                    <div className='sectionNameMovie'><img src={logo_movie7}/></div>
                    <div className='clicks'>
                        <RiPlayCircleLine />
                        <IoMdAddCircleOutline />
                        <BiLike />
                        <BiDislike />
                        <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                    </div>
                    <div className='types'>
                        <span>2 temporadas</span>
                        <span>12</span>
                        <span>2020</span>
                    </div>
                    <div className='category'>
                        <span>Instigante</span>
                        <span>Empolgantes</span>
                        <span>Ação</span>
                    </div>
                </div>
            </Thumbnail>
        </Container>
    )
}

export default MainComponent