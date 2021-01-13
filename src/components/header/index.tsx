import React from 'react'
import {Content} from './styles'
import logo from './../../assets/photo.jpg'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineGift} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {MdChildCare} from 'react-icons/md'

const HeaderComponent: React.FC = () => {
    return(
        <Content>
            <div>
                <span>Free</span>
                <span>BUSTER</span>

            </div>
            <div>
                <p>Início</p>
                <p>Séries</p>
                <p>Filmes</p>
                <p>Mais recentes</p>
                <p>Minha lista</p>
            </div>
            <div>
                <p><FaSearch /></p>
                <p><MdChildCare /></p>
                <p><AiOutlineGift /></p>
                <p><BiBell /></p>
                <p style={{backgroundImage: `url(${logo})`}}></p>
            </div>
        </Content>
    )
}

export default HeaderComponent