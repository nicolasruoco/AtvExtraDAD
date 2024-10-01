import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import   Header  from './components/Header/Header' 
import Secao from './components/Secao/Secao'
import './index.css'
import styles from "./index.module.css"
import banner from "./assets/banner.svg"

import CincoEstrelas from "./assets/FiveStar.png"
import QuatroEstrelas from "./assets/FourStar.png"
import FourHalfStar from "./assets/FourHalfStar.png"
import footer from "./assets/footer.png"

const produtos = [
  {
    "imagem": "https://i0.wp.com/bebgames.com.br/wp-content/uploads/2022/07/image-removebg-preview-45.png",
    "desconto": "40",
    "titulo": "HAVIT HV-G92 Gamepad",
    "valorAtual": "120",
    "precoOriginal": "160",
    "estrelas": CincoEstrelas,
    "qtAvaliacoes": "88"
  },
  {
    "imagem": "https://vivensis.vtexassets.com/arquivos/ids/155437-1000-1000/Teclado-Mamba-Product-Image02.png?v=638055295894930000",
    "desconto": "35",
    "titulo": "AK-900 Wired Keyboard",
    "valorAtual": "960",
    "precoOriginal": "1160",
    "estrelas": QuatroEstrelas,
    "qtAvaliacoes": "75"
  },
  {
    "imagem": "https://t17208.vtexassets.com/arquivos/ids/161466/Monitor-Gamer-LG-24--Full-HD-144-Hz-Widescreen-24GL600F.png?v=638048853518270000",
    "desconto": "30",
    "titulo": "IPS LCD Gaming Monitor",
    "valorAtual": "370",
    "precoOriginal": "400",
    "estrelas": CincoEstrelas,
    "qtAvaliacoes": "99"
  }
  // ,
  // {
  //   "imagem": "https://vivensis.vtexassets.com/arquivos/ids/155730/Cadeira--1-.png?v=638209711475700000",
  //   "desconto": "25",
  //   "titulo": "S-Series Comfort Chair ",
  //   "valorAtual": "375",
  //   "precoOriginal": "400",
  //   "estrelas": FourHalfStar,
  //   "qtAvaliacoes": "99"
  // }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <img src={banner} className={styles.banner}></img>
    <Secao subtitle="Today" title="Flash Sales" days="03" hours="23" minutes="19" seconds="56" isTimer={true} products= {produtos} isViewAll={true}/>
    <img src={footer}></img>
  </StrictMode>,
)
