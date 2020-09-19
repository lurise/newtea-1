import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Carousel, Icon } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

import img1 from "../../assets/carousel/轮播图1.jpg";
import img2 from "../../assets/carousel/轮播图2.jpg";
import img3 from "../../assets/carousel/轮播图3.jpg";
import img4 from "../../assets/carousel/轮播图4.jpg";
import img5 from "../../assets/carousel/轮播图5.jpg";

import 白茶知识 from "../../assets/newList/白茶知识.jpg";
import 白茶资讯 from "../../assets/newList/白茶资讯.jpg";
import 白茶诗文 from "../../assets/newList/白茶诗文.jpg";
import 公告栏 from "../../assets/newList/公告栏.jpg";
import 茶企动态 from "../../assets/newList/茶企动态.jpg";
import 茶与健康 from "../../assets/newList/茶与健康.jpg";
import 白茶视频 from "../../assets/newList/白茶视频.jpg";
import 茶旅结合 from "../../assets/newList/茶旅结合.jpg";

const img = [img1, img2, img3, img4, img5];
const colors = [
  "#2db7f5",
  "#87d068",
  "#f50",
  "#108ee9",
  "orange",
  "#364d79",
  "#4bff04",
  "#dd1717",
];
const randomcol = () => colors[parseInt(Math.random() * colors.length)];

const list = [
  {
    title: "白茶知识",
    path: "",
    img: 白茶知识,
  },
  {
    title: "白茶资讯",
    path: "",
    img: 白茶资讯,
  },
  {
    title: "白茶诗文",
    path: "",
    img: 白茶诗文,
  },
  {
    title: "公告栏",
    path: "",
    img: 公告栏,
  },
  {
    title: "茶企动态",
    path: "",
    img: 茶企动态,
  },
  {
    title: "茶与健康",
    path: "",
    img: 茶与健康,
  },
  {
    title: "白茶视频",
    path: "",
    img: 白茶视频,
  },
  {
    title: "茶旅结合",
    path: "",
    img: 茶旅结合,
  },
];
function Home(props) {
  const { history } = props;

  const onClick = (path) => {
    history.push("/newsList");
  };

  const showCard = (list) => {
    let retlist = [];
    for (let item of list) {
      retlist.push(
        <div className="card" onClick={() => onClick(item.path)}>
          <div className="card_img">
            <img className="card_img_cell" src={item.img} />
          </div>
          <div className="card_text" style={{ backgroundColor: randomcol() }}>
            <div className="title">{item.title}</div>
            {item.text ? <div className="text">{item.text}</div> : null}
            <div className="icon">
              <Icon style={{ fontSize: 24 }} type="right-circle" />
            </div>
          </div>
        </div>
      );
    }
    return retlist;
  };

  return (
    <div className="Home">
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <img className="img" src={img1} style={{ height: "160px" }} />
          </div>
          <div>
            <img className="img" src={img2} style={{ height: "160px" }} />
          </div>
          <div>
            <img className="img" src={img3} style={{ height: "160px" }} />
          </div>
          <div>
            <img className="img" src={img4} style={{ height: "160px" }} />
          </div>
          <div>
            <img className="img" src={img5} style={{ height: "160px" }} />
          </div>
        </Carousel>
        ,
      </div>
      <WingBlank>
        <div>{showCard(list)}</div>
      </WingBlank>
      <div className="home_footer">© 2014-2020 福鼎白茶官方平台</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // state: state.registerReducer
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  /*  getallData: data => {
    dispatch(actionCreators.getallData(data));
  } */
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
