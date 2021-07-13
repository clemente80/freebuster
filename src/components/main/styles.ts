import styled,{css} from 'styled-components'

interface IThumbnailProps{
  space: number;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
  background: #0d070d;
  flex-basis: 100%;
  flex-wrap: wrap;
  padding: 35px;
  gap: 20px;
  color: #fff;
  overflow: hidden;
  

  .background {
    position: absolute;
    width: 100%;
    height: 500px;
    overflow: hidden;
    top: 0;
    left: 0;

    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 140px;
      bottom: 0;
      left: 0;
      background: linear-gradient(to top, #0d070d, transparent);
      z-index: 2px;
    }
  }

  .arrowThumbnail {
    cursor: pointer;
    position: relative;
    top: 460px;
    background: rgba(0, 0, 0, .4);
    box-shadow: 0 0 10px #000;
    z-index: 2;
    height: 165px;
    display: flex;
    align-items: center;
    color: rgba(256, 256, 256, .5);
    transition: .2s ease-in-out;

    svg {
      font-size: 40px;
      transition: .2s ease-in-out;
    }

    :hover {
      color: rgba(256, 256, 256, 1);

      svg {
        transform: scale(1.2);
      }
    }
  }

  .scrollHorizontal {
    position: relative;
    width: 100%;
    background: red;
  }
`

export const Thumbnail = styled.section<IThumbnailProps>`
  position: absolute;
  top: 500px;
  width: 266px;
  height: 154px;
  margin: 0;
  padding: 0;
  border-radius: 0px;
  transform-style: preserve-3d;
  transition: .2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  ${props => props.space && css`
      left: calc((270px * ${props.space}) + 40px);
  `}
  z-index: 1;

  :hover {
    border-radius: 8px;
    transform-origin: center center;
    transition-delay: 0.5s;

    ${props => props.space && css`
      left: calc(((270px * ${props.space}) - 40px) + 40px);
      top: calc(500px - 20px);
    `}
    
    width: calc(266px + 80px);
    height: calc(154px + 40px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    z-index: 20;

    .playTrailer {
      transition-delay: 1.5s;
      opacity: 1;
    }

    .sectionPoser {
      transition-delay: 3s;
      opacity: 0;
    }

    .sectionPlayer {
      transition-delay: 0.5s;
      opacity: 1;
      bottom: -135px;

      .sectionNameMovie {
        opacity: 1;
        left: 0px;
        transition-delay: .5s;
      }
    }
  }

  .sectionSign {
    padding: 0 5px;
    position: absolute;
    display: inline-block;
    width: fit-content;
    z-index: 1;

    span:first-child {
      font-family: 'Lobster', cursive;
      margin-right: 5px;
      color: orange;
    }

    span:last-child {
      font-family: 'Raleway', sans-serif;
      font-weight: 900;
      padding: 0 5px;
      background: linear-gradient(90deg, orange, transparent);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      color: #fff;
    }
  }

  .sectionTop10 {
    position: absolute;
    display: inline-block;
    width: fit-content;
    top: 5px;
    right: 0;
    background: linear-gradient(-90deg, orange, transparent 99%);
    padding: 4px 6px;
    font-size: 12px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1),
                0 0 20px rgba(0, 0, 0, .5);

    span:last-child {
      position: relative;
      font-size: 20px;
      top: -5px;
      font-weight: 600;
    }
  }

  .sectionPoser {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 1;
    transition: .4s ease-in-out;
    z-index: 0;
  }

  .playTrailer {
    overflow: hidden;
    opacity: 0;
    z-index: 9;
    transition: .4s ease-in-out;
  }

  .sectionPlayer {
    position: absolute;
    width: 100%;
    height: fit-content;
    bottom: -5px;
    opacity: 1;
    z-index: -1;
    background-color: rgba(255,165,0, .25);
    backdrop-filter: blur(7.5px);
    transition: .4s ease-in-out;
    border-top: 1px solid rgba(256, 256, 256, .25);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, .5);

    div {
      width: 100%;

      :nth-child(n+2) {
        justify-content: flex-start;
        
        span {
          padding: 0 20px;

          :last-child {
            border: 0;
          }
        }
      }
    }

    .sectionNameMovie {
      width: fit-content;
      pointer-events: none;
      position: relative;
      bottom: 0px;
      margin-left: 22px;
      margin-top: 5px;
      opacity: 0;
      transition: .4s ease-in-out;
      transition-delay: 0s;

      img {
        height: 30px;
      }
    }

    .clicks {
      display: flex;
      position: relative;
      width: 100%;
      height: fit-content;
      flex-direction: row;
      justify-content: space-between;

      a {
        transition: .4s ease-in-out;

        :hover {
          transform: rotate(180deg);
        }
      }

      svg {
        padding: 4px 22px;
        vertical-align: middle;
        cursor: pointer;
        vertical-align: middle;
        font-size: 25px;
        color: rgba(256, 256, 256, .6);
        transition: .4s ease-in-out;

        :hover {
          color: rgba(256, 256, 256, 1);
        }
      }
    }

    .types {
      margin-top: 5px;

      span {
        font-size: 12px;
      }

      span:first-child {
        border: 0;
      }
      
      span:nth-child(2) {
        position: relative;
        background: yellow;
        padding: 3px;
        color: #000;
        border-radius: 5px;
        font-weight: 600;
        border: 0;
        box-shadow: -2px 2px 5px rgba(0, 0, 0, .5);
      }
    }

    .category {
      margin: 5px 0 10px;

      span {
        position: relative;
        text-transform: capitalize;
        font-size: 12px;

        :after {
          content: '';
          position: absolute;
          top: 50%;
          right: -2.5px;
          width: 5px;
          height: 5px;
          border: 0;
          border-radius: 50%;
          background: rgba(256, 256, 256, .25);
          transform: translateY(-50%);
        }
      }

      span:nth-child(3):after {
        display: none;
      }
    }

    .description {
      p {
        font-size: 14px;
        margin: 20px;
        padding: 10px 0 0 0;
        border-top: 1px dashed rgba(256, 256, 256, .5);
      }
    }
  }

  .sectionDescription {
    height: 220px;
      
    .clicks {
      a {
        transition: .4s ease-in-out;
        transform: rotate(180deg);

        :hover {
          transform: rotate(0deg);
        }
      }
    }
  }
`