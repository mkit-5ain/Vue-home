<template>
  <div class="home">
    <section class="intro-wrap">
      <div class="symbol-animation type-a">
        <div class="symbol-wrap">
          <div class="symbol-01"></div>
          <div class="symbol-02"></div>
          <div class="symbol-03"></div>
        </div>
      </div>
      <div class="symbol-animation type-b">
        <div class="symbol-wrap">
          <div class="symbol-01"></div>
          <div class="symbol-02"></div>
          <div class="symbol-03"></div>
        </div>
      </div>
      <div class="prologue-wrap">
        <div class="prologue effect-dot">
          hello
          <span class="inner-dot"></span>
        </div>
        <div class="prologue effect-line">
          <span>my style</span>
        </div>
        <div class="prologue effect-blur">
          <span>trust me.</span>
        </div>
      </div>
      <div class="badge">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="info-wrap">
        <div class="circle-wrap left-circle-wrap fade-contents">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="circle-wrap right-circle-wrap fade-contents">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="inner-wrap">
          <div class="info-contents fade-contents calendar">
            <p>시간이 이렇게나 빨리 흘러갔다는 건</p>
            <p>왜 달력의 마지막 장에서야 와닿게 될까요.</p>
          </div>
          <div class="info-contents fade-contents">
            <p>작년과는 다른 사람이 되겠다고</p>
            <p>결심했던 수많은 다짐이</p>
            <p>사실은 지킬수 없던 약속이었다는 걸</p>
          </div>
        </div>
        <div class="marquee-left fade-contents">
          새로운 일년, 새로이 시작될 새날에는 이전과는 다른 내가 될 것이라 믿으며
        </div>
        <div class="inner-wrap">
          <div class="info-contents fade-contents last-year">
            <p>2020년은 그동안 당연하게 생각했던</p>
            <p>모든 것이 당연하지 않았다는 것을 알게</p>
            <p>해준 시간이었습니다</p>
          </div>
          <div class="info-contents fade-contents this-year">
            <p>2021년의 우리는 아마도 특별할 게 없다고 </p>
            <p>생각했던 일상을 다르게 바라보지 않을까요</p>
          </div>
        </div>
        <div class="marquee-right fade-contents">
          2021년은 일상을 되찾고 그 속에서 잊고 있던 행복을 찾아가는 시간이 되기를 바랍니다.
        </div>
        <div class="inner-wrap">
          <div class="info-contents fade-contents">
            <p>거창한 목표를 이루고 드라마틱한 일생일대의 이벤트가 일어나지 않아도,</p>
          </div>
          <div class="info-contents fade-contents daily">
            <p>우직하게 일상을 살아가고 있는</p>
            <p>나를 자랑스럽게 생각하면서요</p>
          </div>
        </div>
      </div>
      <router-link to="/experience">
        <div class="experience-btn fade-contents" style="position: relative;">
          <div class="experience-more">
            <div class="title">
              <p>다양한 경험을 통해 만든 </p>
              <p><span>#결과물</span> 만나러 가실래요?</p>
            </div>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
  // components: {
  //   HelloWorld
  // }
}
</script>
<style lang="scss" scoped>
$primary-color: #6C63FF;
$secondary-color: #4FBC9D;
.intro-wrap {
  position: relative;
  padding-top: 300px;
  overflow: hidden;
  transition: 1s cubic-bezier(0.32, 0.18, 0.26, 0.84);
  .prologue-wrap {
    .prologue {
      position: relative;
      height: 270px;
      line-height: 250px;
      font-size: 300px;
      font-family: 'sarabun';
      text-transform: uppercase;
      transition: 1s cubic-bezier(0.74, 0.51, 0.51, 1.26);
      animation: 0.8s introTextAnimation forwards;
      opacity: 0;
      &.effect-dot {
        width: 960px;
        .inner-dot {
          position: absolute;
          bottom: 0px;
          right: 0px;
          width: 47px;
          height: 47px;
          border-radius: 100%;
          background: $primary-color;
          animation: 1.5s dotAnimation forwards;
          animation-delay: 1s;
          transition: 1s cubic-bezier(0.32, 0.18, 0.26, 0.84);
          opacity: 0;
          box-shadow: 1px 1px 1px 0px #151414
        }
      }
      &.effect-line {
        animation-delay: 0.2s;
        &:after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: 570px;
          width: 500px;
          height: 150px;
          border-radius: 100px;
          background: RGB(108, 99, 255, 0.8);
          box-shadow: 1px 1px 1px 0px #151414;
          transition: 1s ease-in-out;
          animation: 0.5s TopBottomAnimation forwards;
          animation-delay: 2s;
          opacity: 0;
        }
      }
      &.effect-blur {
        animation-delay: 0.4s;
      }
    }
    @keyframes introTextAnimation {
      from {
        opacity: 0;
        transform: translate(-500px, -100px);
      }
      to {
        opacity: 1;
        transform: translate(-80px, 0px);
      }
    }
    @media screen and (max-width: 750px) {
      @keyframes introTextAnimation {
        from {
          opacity: 0;
          transform: translate(-300px, -100px);
        }
        to {
          opacity: 1;
          transform: translate(-20px, 0px);
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .intro-wrap {
    .prologue-wrap {
      .prologue {
        height: auto;
        line-height: 20vw;
        font-size: 20vw;
        &.effect-dot {
          width: 68vw;
          .inner-dot {
            width: 5vw;
            height: 5vw;
          }
        }
        &.effect-line {
          &::after {
            bottom: -10vw;
            left: 60px;
            width: 65vw;
            height: 16vw;
          }
        }
      }
    }
  }
}
.info-wrap {
  position: relative;
  width: 1400px;
  margin: 400px auto 0px auto;
  .inner-wrap {
    display: flex;
    padding: 250px 0px;
    justify-content: space-between;
    .info-contents {
      width: 550px;
      font-size: 30px;
      text-align: center;
    }
    .fade-contents {
      line-height: 1.5;
      transform: translate(0px, 50px);
      &.active {
        animation: fade-contents 2s forwards;
      }
    }
    @keyframes fade-contents {
      from {
        transform: translate(0px, 50px);
        opacity: 0;
      }
      50% {
        transform: translate(0px, -10px);
      }
      to {
        transform: translate(0px, 0px);
        opacity: 1;
      }
    }
  }
  .calendar {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      right: -220px;
      width: 300px;
      height: 237px;
      z-index: -1;
      background: url('~@/assets/images/calendar.svg') 0px 0px no-repeat;
      background-size: 300px;
      opacity: 0.3;
      transform: rotate(-5deg);
    }
  }
  .last-year {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50px;
      left: 0px;
      width: 250px;
      height: 157px;
      z-index: -1;
      background: url('~@/assets/images/2020.svg') 0px 0px no-repeat;
      background-size: 250px;
      opacity: 0.7;
      transform: rotate(5deg);
    }
  }
  .this-year {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -200px;
      left: -135px;
      width: 300px;
      height: 237px;
      z-index: -1;
      background: url('~@/assets/images/2021.svg') 0px 0px no-repeat;
      background-size: 300px;
      transform: rotate(-5deg);
    }
  }
  .daily {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: -110px;
      right: -200px;
      width: 300px;
      height: 237px;
      z-index: -1;
      background: url('~@/assets/images/daily.svg') 0px 0px no-repeat;
      background-size: 300px;
      opacity: 0.7;
    }
  }
}
@media screen and (max-width: 750px) {
  .info-wrap {
    width: auto;
    margin: 0px;
    .inner-wrap {
      flex-direction: column;
      padding: 100px 15px;
      .calendar {
        &::before {
          bottom: 25px;
          right: 50px;
          width: 100px;
          height: 80px;
          background-size: 100px;
        }
      }
      .last-year {
        &::before {
          top: -120px;
          left: 100px;
          width: 150px;
          height: 95px;
          background-size: 150px;
        }
      }
      .daily {
        &::before {
          bottom: -130px;
          right: 0px;
          width: 150px;
          height: 120px;
          background-size: 150px;
        }
      }
      .this-year::before {
        top: -120px;
        left: auto;
        width: 150px;
        height: 110px;
        background-size: 150px;
      }
      .info-contents {
        width: auto;
        margin: 100px 0px;
        font-size: 5.5vw;
      }
    }
  }
}
.experience-btn {
  &.fade-contents {
    transform: translate(0px, 50px);
    &.active {
      animation: fade-contents 2s forwards;
    }
  }
  .experience-more {
    position: relative;
    display: block;
    width: 650px;
    height: 100px;
    line-height: 104px;
    margin: 200px auto 400px auto;
    border-radius: 50px;
    box-shadow: 20px 20px 40px #d9d9d9, -20px -20px 40px #fff;
    font-weight: bold;
    font-size: 22px;
    span {
      position: relative;
      color: $secondary-color;
      &::after {
        content: '';
        position: absolute;
        top: 12px;
        left: 5px;
        width: 67px;
        height: 15px;
        background: $secondary-color;
        opacity: 0.2;
      }
    }
    .title {
      padding-left: 80px;
      &::after {
        content: '';
        position: absolute;
        top: 43px;
        right: 60px;
        width: 46px;
        height: 12px;
        background: url('~@/assets/images/icon-arrow-right.png') 0px 0px no-repeat;
        &:hover {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .experience-btn {
    .experience-more {
      width: calc(100% - 30px);
      height: 100px;
      line-height: normal;
      font-size: 20px;
      text-align: center;
      .title {
        padding: 24px 0px;
        &::after {
          // top: 58px;
          right: 20px;
          width: 30px;
          height: 8px;
          background-size: 30px;
        }
      }
    }
  }
}
</style>
