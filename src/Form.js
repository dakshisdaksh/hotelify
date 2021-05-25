import React, { Component } from "react";
import Slider, { Range, SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./index.css";
import { useState } from "react";

const wrapperStyle = { width: 400, margin: 50 };

export default function Form() {
  const { createSliderWithTooltip } = Slider;
  const { Handle } = Slider;

  function handle(props) {
    const { value, dragging, index, ...restProps } = props;
  
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={value < 50 ? `${value}Km` : `${value}Rs`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  
  }
  function handleSlider(e,x){ 
    console.log(x + "   " + e);
    var a= slider;
    // console.log(a);
    a[x] = e;
    // console.log(a);
    setSlider(a);
    console.log(slider);
    }
  const [slider,setSlider] = useState([30,30,0]);
  return (
    <div>
      <div style={wrapperStyle}>
        <div className="slider-div" id="air">
          <p>Slider for airport distance </p>
          <Slider min={0} max={30} defaultValue={30} handle={handle} onAfterChange={(e) => handleSlider(e,0)  } />

        </div>
      </div>

      <div style={wrapperStyle}>
        <div className="slider-div" id="rail">
          <p>Slider for Rail distance </p>
          <Slider
            min={0}
            max={30}
            defaultValue={30}
            handle={handle}
            onAfterChange={handleSlider}
            onAfterChange={(e) => handleSlider(e,1) } 
            // onAfterChange={() => {
            //   alert(handle.value);
            // }}
          />
        </div>
      </div>

      <div style={wrapperStyle}>
        <div className="slider-div" id="budget">
          <p>Slider for budget distance </p>
          <Slider
            min={1000}
            max={100000}
            defaultValue={10000}
            handle={handle}
            onAfterChange={(e) => handleSlider(e,2) }
          />
        </div>
      </div>

      {/* <Range />
      <Slider /> */}
    </div>
  );
}
