import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutContent">
          <p>
            우리 생활에서는 이제 빼놓을 수 없는 웹사이트를 개발한다는 것에
            매력을 느껴 프론트엔드 개발을 시작하게 되었습니다.
          </p>
          <p>
            제가 개발에 기여한 결과물을 많은 사람들이 사용하고 즐거움을 느꼈으면
            좋겠습니다.
          </p>
        </div>
      </div>
    );
  }
}
