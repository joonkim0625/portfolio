import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <p>
          이제는 일상에서 빼놓을 수 없는, 무엇인가에 대한 정보를 가장 먼저
          접하게 되는 웹사이트를 만든다는 것에 매력을 느껴 개발을 시작하게 된
          김현준이라고 합니다.
          <br /> 매일 성장하고 현실에 안주하지 않는 개발자가 되려고 노력하고
          있습니다.
        </p>
      </div>
    );
  }
}
