import logo from "./image/logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MuList_img from "./image/MuList.png";
import MuShop_img from "./image/mushop.png";
import jlk from "./image/jlk_.png";
import jl from "./image/jl.png";
import lal from "./image/lal.png";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding-left: 50px;
  padding-right: 50px;
`;

const Top = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 0px;
`;

function App() {
  const [username, setUsername] = useState();
  const [createProfile, setCreateProfile] = useState(false);
  const [createModalRegister, setcreateModalRegister] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  function MuList() {
    return (
      <Top>
        <div
          className={css`
            width: 100%;
            margin-left: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 100px;
          `}
        >
          <h3>ยินดีต้อนรับ</h3>
          <h1>MuList</h1>

          <h4>แอพที่พึ่งทางใจ</h4>
          <h4>มูทั่วไทยได้ในคลิ๊ก</h4>
          <button
            className={css`
              margin-top: 10%;
              font-size: 30px;
              line-height: 45px;
            `}
            onClick={() => {
              setCreateModalVisible(false);
              setcreateModalRegister(true);
            }}
          >
            <a href="https://forms.gle/HjZKWnbcfQ3ukySi7">ลงทะเบียน</a>
          </button>
        </div>
        <div
          className={css`
            width: 100%;
            display: flex;
          `}
        >
          <img
            src={MuList_img}
            alt="MuList"
            width="100%"
            className={css`
              height: auto !important;
            `}
          ></img>
        </div>

        <div
          className={css`
            width: 100%;
            display: flex;
            padding-bottom: 10px;
          `}
        >
          <img
            src={MuShop_img}
            alt="MuList"
            width="100%"
            className={css`
              height: auto !important;
            `}
          ></img>
        </div>
        <div
          className={css`
            width: 100%;
            display: flex;
            padding-bottom: 10px;
          `}
        >
          <img
            src={lal}
            alt="MuList"
            width="100%"
            className={css`
              height: auto !important;
            `}
          ></img>
        </div>
        <div
          className={css`
            width: 100%;
            display: flex;
            padding-bottom: 10px;
          `}
        >
          <img
            src={jl}
            alt="MuList"
            width="100%"
            className={css`
              height: auto !important;
            `}
          ></img>
        </div>
        <div
          className={css`
            width: 100%;
            display: flex;
            padding-bottom: 10px;
          `}
        >
          <img
            src={jlk}
            alt="MuList"
            width="100%"
            className={css`
              height: auto !important;
            `}
          ></img>
        </div>
        <div
          className={css`
            width: 100%;
            margin-left: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 100 px;
          `}
        >
          <h3>ยินดีต้อนรับ</h3>
          <h1>MuList</h1>

          <h4>แอพที่พึ่งทางใจ</h4>
          <h4>มูทั่วไทยได้ในคลิ๊ก</h4>
          <button
            className={css`
              margin-top: 10%;
              font-size: 30px;
              line-height: 45px;
            `}
            onClick={() => {
              setCreateModalVisible(false);
              setcreateModalRegister(true);
            }}
          >
            <a href="https://forms.gle/HjZKWnbcfQ3ukySi7">ลงทะเบียน</a>
          </button>
        </div>
      </Top>
    );
  }

  function MuTunJai() {
    return (
      <Top>
        <div
          className={css`
            width: 100%;
            display: flex;
          `}
        >
          <div
            className={css`
              width: 50%;
              height: 100%;
              margin-right: 0;
              padding-bottom: 10px;
            `}
          >
            <img
              src={MuList_img}
              alt="MuList"
              width="100%"
              className={css`
                height: auto !important;
              `}
            ></img>
          </div>
        </div>

        <div
          className={css`
            width: 100%;
            margin-left: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 100 px;
          `}
        >
          <button
            className={css`
              margin-top: 10%;
              font-size: 30px;
              line-height: 45px;
            `}
            onClick={() => {
              setCreateModalVisible(false);
              setcreateModalRegister(true);
            }}
          >
            <a href="https://forms.gle/HjZKWnbcfQ3ukySi7">ลงทะเบียน</a>
          </button>
        </div>
      </Top>
    );
  }

  return (
    <div
      className={css`
        max-width: 100%;
        margin: 0 auto;
      `}
    >
      <Router>
        {/*<nav>
          <div className={css``}>
            <Link to="/">
              <img src={logo} alt="logo" height="100px" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">MuList </Link>
            </li>
            <li>
              <Link
                to="/"
                className={css`
                  font-family: Kanit;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 31px;
                  color: #fafafa;
                `}
              >
                {" "}
                แอพที่พึ่งทางใจมูทั่วไทยได้ในคลิ๊ก
              </Link>
            </li>
          </ul>
          <button
            className={css`
              font-family: Kanit;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 31px;
              color: #fafafa;
            `}
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            <a href="https://forms.gle/HjZKWnbcfQ3ukySi7">ลงทะเบียน</a>
          </button>
          {/* <ul>
            <li>
              <Link to="/">MuList</Link>
            </li>
            <li>
              <Link to="/MuTunJai">MuTunJai</Link>
            </li>
            <li>
              <Link to="/MuShop">MuShop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul> 
          </nav>*/}
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/MuTunJai">
              <MuList />
            </Route>
            <Route path="/MuShop">
              <MuList />
            </Route>
            <Route path="/contact">
              <MuList />
            </Route>
            <Route path="/">
              <MuList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
