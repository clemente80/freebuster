import React, { useCallback, useEffect, useState } from 'react'
import {Container, Thumbnail} from './styles'
import backgroundPoster from './../../assets/background_poster.jpg'
import {AiOutlineDownCircle} from 'react-icons/ai'
import {IoMdAddCircleOutline, IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {RiPlayCircleLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import api from './../../services/api'

interface ImovieData{
    film_name: string,
    url: string,
    poster_img: string,
    logo_img: string,
    type: string,
    parental_rating: number,
    category: [],
    year: number,
    duration: number,
    session: number,
    episodes: number,
    like: boolean,
    deslike: boolean,
    description: string,
    top10: boolean,
    spotlight: boolean,
    id: number
}

const MainComponent: React.FC = () => {

    const [dataMovie, setDataMovie] = useState<ImovieData[]>([])
    
    const HandleOpenDesciption = useCallback(() => {
        const ThumB = document.querySelector('.sectionPlayer')
        ThumB?.classList.toggle('sectionDescription')
        console.log(ThumB)
    }, [])

    useEffect(() => {
        api.get('/films').then((response) => {
            console.log(response)
            setDataMovie(response.data)
        })
        .catch(err => console.log(err))
    }, [])



    //TRES MANEIRAS DIFERENTES DE FAZER UMA CHAMADA DE FUNÇÃO O USECALLBACK É UMA FUNÇÃO DO REACT JA TE ENSINEI VARIAS VEZES NAO VOU FALAR DE NOVO, PROCURA NA INTERNET 
    // SE VC QUISER SABER DE VERDADE O QUE ELA FAZ, CRIANDO UMA CONSTANTE POR ARROW FUNCTION NA ULTIMA, E A PRIMEIRA CONVENCIONAL ATRAVES DE UMA FUNÇÃO SINCRONA
    //posso fazer assim tambem, ae vc tem que pesquisar o que é async e pra que serve tambem é importante, não vou conseguir te explicar tão bem quanto se vc pesquisar
     function firstPos (pos:any){
        if (pos === 0)
        return pos= 0.0001
        else 
        return pos
    }

    async function teste1 (pos:any){
        if (pos === 0)
        return pos= 0.0001
        else 
        return pos
    }

     const teste2 = useCallback((pos:any)=>{
        if (pos === 0)
        return pos= 0.0001
        else 
        return pos
     },[])

     const teste3 = ((pos:any)=>{
        if (pos === 0)
        return pos= 0.0001
        else 
        return pos
     })        

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

            {dataMovie.map(myMovie => (
                
                <Thumbnail key={myMovie.id} className='thumbnail' space={firstPos(myMovie.id)}>
                    <div className='sectionSign'>
                        <span>F</span><span>B</span>
                    </div>
                    <div className='sectionTop10'>
                        <span>TOP</span><br/><span>10</span>
                    </div>
                    <div className='playTrailer'>
                        <ReactPlayer
                            className='player'
                            url= {myMovie.url}
                            width= '346px'
                            height= '194px'
                            playing= {true}
                            loop= {true}
                        />            
                    </div>
                    <div className='sectionPoser' style={{backgroundImage: `url(${myMovie.poster_img})`}}></div>
                    <div className='sectionPlayer'>
                        <div className='sectionNameMovie'><img src={myMovie.logo_img}/></div>
                        <div className='clicks'>
                            <RiPlayCircleLine />
                            <IoMdAddCircleOutline />
                            <BiLike />
                            <BiDislike />
                            <a onClick={() => {HandleOpenDesciption()}}><AiOutlineDownCircle /></a>
                        </div>
                        <div className='types'>
                            <span>{myMovie.session} temporadas</span>
                            <span>{myMovie.parental_rating}</span>
                            <span>{myMovie.year}</span>
                        </div>
                        <div className='category'>
                            {myMovie.category.map(value => (
                                <span>{value}</span>                            
                            ))}
                        </div>               
                    </div>
                </Thumbnail>

            ))}

            <div  className='arrowThumbnail next'><IoIosArrowForward /></div>
        </Container>
    )
}

export default MainComponent