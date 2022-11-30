import React from "react";
import { connect } from "react-redux";
import logo from "../../imgs/logo.png";
import { APPLY_TITLE_FILTER } from '../../constants/actionTypes';

const Banner = (props) => {
  // functions

  const onChangeEvent = (event) => {
    event.preventDefault();
    const { value } = event.target;
    props.dispatch({
      type: APPLY_TITLE_FILTER,
      payload: { searchTitle: value },
    });
  };

  // styling
  const inputBlockStyle = {
    position: 'relative'
  };
  const inputStyle = {
    width: '300px',
    padding: '3px 10px',
    margin: '0 10px',
    borderRadius: '60px'
  };
  const iconStyle = {
    position: 'absolute',
    right: '24px',
    top: '1px',
    color: 'grey',
    cursor: 'pointer'
  };

  // template
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span style={inputBlockStyle}>
            <input
              type="text" id="search-box"
              placeholder="What is it that you truly desire?"
              style={inputStyle}
              onChange={onChangeEvent}>
            </input>
            <i class="bi bi-search" style={iconStyle}></i>
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect()(Banner);
