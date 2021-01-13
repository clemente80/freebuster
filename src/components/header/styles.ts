import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  height: 50px;
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .8));
  backdrop-filter: blur(10px);
  box-shadow: 0 2.5px 10px rgba(256, 256, 256, .25);
  z-index: 10;
  
  div:first-child {
    span {
      font-family: 'Lobster', cursive;
      font-size: 20px;
      color: orange;
      letter-spacing: 10px;

      :first-child {
        font-size: 25px;
      }

      :nth-child(2) {
        font-family: 'Raleway', sans-serif;
        position: relative;
        font-weight: bolder;
        letter-spacing: 3px;
        background: linear-gradient(90deg, orange, transparent);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        color: rgba(256,256,256,.65);
        text-shadow: 0 0 5px #ececec;
        padding: 0 5px;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    flex: 1;
    gap: 40px;

    p:first-child {
      margin-left: 60px;
      font-weight: bolder;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 30px;

    svg {
      vertical-align: middle;
      font-size: 24px;
    }

    p {
      position: relative;
    }

    p:nth-child(4):after {
      font-weight: 600;
      position: absolute;
      content: '+9';
      font-size: 10px;
      text-align: center;
      width: 15px;
      height: 15px;
      right: 0px;
      top: 0px;
      background: orange;
      border: 0px;
      border-radius: 50%;
    }
    
    p:last-child {
      background-size: 200%;
      background-repeat: no-repeat;
      background-position: center;
      width: 35px;
      height: 35px;
      border: 1px solid transparent;
      border-radius: 15%;
      transition: .4s ease-in-out;

      :hover {
        background-size: 250%;
        background-repeat: no-repeat;
        transition: .4s ease-in-out;
        border: 1px solid #fff;
      }
    }
  }
`
