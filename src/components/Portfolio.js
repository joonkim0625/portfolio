import React, { Component } from "react";
import "./Portfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

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

const items = [
  {
    title: "오목 게임 만들기",
    src: "https://i.postimg.cc/jdcYXcGZ/2019-01-09-11-29-28.png",
    altText: "오목 게임 만들기 프로젝트",
    youtube: "",
    // caption: "Slide 1",
    github: "https://github.com/joonkim0625/team-guobaorou-omok",
    website: "https://joons-omok.netlify.com",
    content1: "턴에 따라 바둑판 위의 커서 색이 플레이어의 돌의 색으로 바뀜.",
    content2:
      "게임 종료 후, restart를 위해 엔터키 사용 가능 및 무르기 기능의 추가.",
    content3: "",
    stacks: "HTML, CSS, JavaScript"
  },
  {
    title: "요기요 카피 프로젝트",
    src: "https://i.postimg.cc/d1S4GZcy/2019-01-08-2-42-02.png",
    altText: "요기요 사이트 카피 프로젝트",
    youtube: "https://www.youtube.com/embed/AELNQ2UShRk",
    // caption: "Slide 1",
    github: "https://github.com/joonkim0625/jogiyo-v2",
    website: "https://jogiyo2.netlify.com/",
    content1:
      "패스트캠퍼스 프론트엔드 스쿨 협업 프로젝트 후, 몇 가지 기능을 추가.",
    content2:
      "반응형 레이아웃, IE11 지원을 위한 폴리필 적용, 로그인(hello / 1234) 후 리뷰 작성 및 삭제 가능.",
    content3: "",
    stacks: "React, React-router, axios, Scss, HTML, CSS, netlify"
  }
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  // ---

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  // ---

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <h3 className="title">{item.title}</h3>
          <div className="imgWrap">
            <img src={item.src} alt={item.altText} />
          </div>
          <p>{item.content1}</p>
          <p>{item.content2}</p>
          <p>{item.content3}</p>
          <p>{item.stacks}</p>
          <div className="icons1">
            <a target="_blank" rel="noopener noreferrer" href={item.github}>
              <FontAwesomeIcon icon={faGithub} color={"black"} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={item.website}>
              <FontAwesomeIcon icon={faHome} color={"black"} />
            </a>
            {item.youtube !== "" ? (
              <a target="_blank" rel="noopener noreferrer" href={item.youtube}>
                <FontAwesomeIcon icon={faYoutube} color={"black"} />
              </a>
            ) : null}
          </div>
        </CarouselItem>
      );
    });

    return (
      <div className="portfolios">
        {/* <Element name="item1">
          <div className="item1">
            <h1 className="title">조기요 V2</h1>
            <p>
              패스트캠퍼스 프론트엔드 스쿨 협업 프로젝트 후, 제가 혼자 몇 가지
              기능을 추가했습니다
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
              <span className="toNextProject">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </Link>
          </div>
        </Element>

        <Element name="item2">
          <div className="item2">
            <h1 className="title">오목 게임 만들기 프로젝트</h1>
            <p>
              패스트캠퍼스 협업 프로젝트 종료 후, 제가 기능과 약간의 디자인을
              추가했습니다
            </p>
            <img
              className="omokImg"
              src="https://i.postimg.cc/jdcYXcGZ/2019-01-09-11-29-28.png"
              alt="오목 게임 이미지"
            />
            <p>턴에 따라 바둑판 위의 커서 색이 플레이어의 돌의 색으로 바뀜</p>
            <p>
              {" "}
              게임 종료 후, 'restart'를 위해 엔터키 사용 가능, 무르기 기능의
              추가
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
              <span className="toPreviousProject">
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
            </Link>
          </div>
        </Element> */}

        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}
