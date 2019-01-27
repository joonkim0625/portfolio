import React, { Component } from "react";
import "./Portfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  Scroll,
  DirectLink,
  Link,
  Events,
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolios">
        {/* first item */}
        <Element name="item1">
          <div className="item1">
            <div className="title">
              <strong>조기요 V2</strong>
            </div>
            <p>
              패스트캠퍼스 프론트엔드 스쿨 협업 프로젝트 후, 제가 혼자 몇 가지
              기능을 추가했습니다.
            </p>
            <iframe
              title="jogiyo-v2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AELNQ2UShRk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="description">
              <p>
                반응형 레이아웃, IE11 지원을 위한 폴리필 적용, 로그인(hello /
                1234) 후 리뷰 작성 및 삭제 가능
              </p>
              <div className="projectWrap scale">
                <a
                  className="projectIssues"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/joonkim0625/jogiyo-v2/projects/1"
                >
                  프로젝트 관련 이슈는 이곳에 정리했습니다
                </a>
              </div>
              <p>React, React-router, axios, Scss, HTML, CSS, netlify</p>
            </div>
            <div className="icons1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/joonkim0625/jogiyo-v2"
              >
                <FontAwesomeIcon icon={faGithub} color={"black"} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jogiyo2.netlify.com/"
              >
                <FontAwesomeIcon icon={faHome} color={"black"} />
              </a>
            </div>
            <Link to="item2" spy={true} smooth={true} duration={500}>
              <p className="toProject">다음 프로젝트</p>
            </Link>
          </div>
        </Element>

        {/* second item */}
        <Element name="item2">
          <div className="item2">
            <div className="title">
              <strong>오목 게임 만들기 프로젝트</strong>
            </div>
            <p>
              패스트캠퍼스 협업 프로젝트 종료 후, 제가 기능과 약간의 디자인을
              추가했습니다.
            </p>

            <img
              className="omokImg"
              src="https://i.postimg.cc/jdcYXcGZ/2019-01-09-11-29-28.png"
              alt="오목 게임 이미지"
            />
            <p>턴에 따라 바둑판 위의 커서 색이 플레이어의 돌의 색으로 바뀜.</p>
            <p>
              {" "}
              게임 종료 후, 'restart'를 위해 엔터키 사용 가능, 무르기 기능의
              추가.
            </p>

            <p>HTML, CSS, JavaScript</p>

            <div className="icons1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/joonkim0625/team-guobaorou-omok"
              >
                <FontAwesomeIcon icon={faGithub} color={"black"} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://joons-omok.netlify.com"
              >
                <FontAwesomeIcon icon={faHome} color={"black"} />
              </a>
            </div>
            <Link to="item1" spy={true} smooth={true} duration={500}>
              <p className="toProject">이전 프로젝트</p>
            </Link>
          </div>
        </Element>
      </div>
    );
  }
}
