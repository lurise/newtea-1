import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "../usecompany/store/actionCreators";
import { Select, Icon, Divider } from "antd";
import { NavBar, WingBlank, SegmentedControl, Button } from "antd-mobile";
import * as CONST from "./CONST";
import QueryFooter from "../../components/basic/queryFooter";
import * as NAME_CONST from "../queryhome/CONST";

const { Option } = Select;

function UseCompany6(props) {
  const { history, newData3, match } = props;
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    props.getAll();
  }, []);

  // 跳转
  const toJump = (item) => {
    history.push(`/b/company/${item.id}`);
  };

  // 文本框变化的值
  const handleSearch = (value) => {
    if (value) {
      setOptions(CONST.getResult(value, [...allData]));
    } else {
      setOptions([]);
    }
  };

  // 选中 option
  const handleChange = (value) => {
    setValue(value);
    history.push("/company");
  };

  return (
    <div className="UseCompany6">
      <div className="top_fa">
        <div className="top">
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {
              history.go(-1);
            }}
          >
            {NAME_CONST.nameList.map((item) => {
              if (item.to === match.path.split("/")[2]) {
                return item.name;
              }
            })}
          </NavBar>
        </div>
      </div>

      <WingBlank>
        <div className="content-fa">
          <div className="title">
            福鼎白茶首届制茶能手
            <span style={{ fontSize: "14px", color: "#898989" }}>
              （排名不分先后）
            </span>
          </div>
          <div className="content">
            {newData3.map((item) => {
              return (
                <div className="line" key={item.id}>
                  <span> {item.name}</span>
                  {item.company}
                </div>
              );
            })}
          </div>
        </div>
      </WingBlank>

      <QueryFooter />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.UseCompanyReducer,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  getAll: (data) => {
    dispatch(actionCreators.getAll(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UseCompany6));
