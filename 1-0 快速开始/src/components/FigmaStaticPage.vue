<template>
  <section class="figma-canvas">
    <div class="canvas-shadow" aria-hidden="true"></div>

    <div class="canvas-body">
      <div class="guide guide-top" aria-hidden="true"></div>
      <div class="guide guide-bottom" aria-hidden="true"></div>

      <div class="field-list">
        <div class="field-row row-1">
          <span class="label">输入框：</span>
          <div class="input-box input-default">请输入文字</div>
        </div>

        <div class="field-row row-2">
          <span class="label">输入框：</span>
          <div class="input-box input-hover">请输入文字</div>
        </div>

        <div class="field-row row-3">
          <span class="label">输入框：</span>
          <div>
            <div class="input-box input-hover">请输入文字</div>
            <div class="error-tip">
              <span class="error-icon">!</span>
              <span>请输入正确的XXX</span>
            </div>
          </div>
        </div>

        <div class="field-row row-4">
          <span class="label">输入框：</span>
          <div class="input-box input-disabled">请输入文字</div>
        </div>
      </div>

      <div class="number-grid">
        <div class="num-box spinner item-a">1</div>
        <div class="num-box arrows item-b">1</div>
        <div class="num-box manual item-c">1</div>

        <div class="num-box arrows item-d">2</div>
        <div class="num-box arrows item-e">2</div>
        <div class="num-box manual manual-active item-f">2</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.figma-canvas {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 24px auto;
  font-family: 'Alibaba PuHuiTi 2.0', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.canvas-shadow {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: #fff;
  opacity: 0.3;
  box-shadow:
    0 -0.13px 1.39px rgba(0, 0, 0, 0.03),
    0 0.73px 4.38px rgba(0, 0, 0, 0.04),
    0 3.5px 9.8px rgba(0, 0, 0, 0.05),
    0 10.37px 19.47px rgba(0, 0, 0, 0.07),
    0 28.62px 38.17px rgba(0, 0, 0, 0.08),
    0 100px 80px rgba(0, 0, 0, 0.11);
}

.canvas-body {
  position: absolute;
  inset: 20px;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
}

.guide {
  position: absolute;
  left: 67px;
  width: 326px;
  border: 1px dashed transparent;
  border-radius: 5px;
  border-image: linear-gradient(180deg, #0083ff 0%, #075fae 89%) 1;
}

.guide-top {
  top: 20px;
  height: 256px;
}

.guide-bottom {
  top: 286px;
  height: 149px;
}

.field-list {
  position: absolute;
  left: 86px;
  top: 32px;
  width: 288px;
}

.field-row {
  position: absolute;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-height: 32px;
}

.row-1 {
  top: 0;
}

.row-2 {
  top: 66px;
}

.row-3 {
  top: 132px;
}

.row-4 {
  top: 198px;
}

.label {
  width: 58px;
  margin-top: 9px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #000;
  line-height: 14px;
}

.input-box {
  width: 230px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d4d6d9;
  box-sizing: border-box;
  padding: 9px 0 9px 8px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #bbbdbf;
  line-height: 14px;
}

.input-default {
  border-color: #d4d6d9;
}

.input-hover {
  border-color: #2f51ff;
}

.input-disabled {
  background: #e6e8eb;
}

.error-tip {
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #eb5e12;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
}

.error-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #eb5e12;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

.number-grid {
  position: absolute;
  left: 86px;
  top: 312px;
  width: 288px;
}

.num-box {
  position: absolute;
  height: 32px;
  border: 1px solid #0663b7;
  border-radius: 4px;
  color: #31373d;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.item-a {
  left: 0;
  top: 0;
  width: 75px;
}

.item-b {
  left: 86px;
  top: 0;
  width: 75px;
}

.item-c {
  left: 173px;
  top: 0;
  width: 115px;
}

.item-d {
  left: 0;
  top: 66px;
  width: 75px;
}

.item-e {
  left: 86px;
  top: 66px;
  width: 75px;
}

.item-f {
  left: 173px;
  top: 66px;
  width: 115px;
}

.spinner::before,
.arrows::before {
  content: '';
  position: absolute;
  right: 15px;
  top: 0;
  width: 16px;
  height: 100%;
  border-left: 1px solid #e6e8eb;
}

.spinner::after {
  content: '-\A+';
  white-space: pre;
  position: absolute;
  right: 20px;
  top: 3px;
  font-size: 11px;
  line-height: 12px;
  color: #bdbdbe;
  text-align: center;
}

.arrows::after {
  content: '▾\A▴';
  white-space: pre;
  position: absolute;
  right: 20px;
  top: 3px;
  font-size: 10px;
  line-height: 12px;
  color: #bdbdbe;
  text-align: center;
}

.manual {
  padding: 0 32px;
}

.manual::before,
.manual::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #bdbdbe;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.manual::before {
  content: '-';
  left: 0;
}

.manual::after {
  content: '+';
  right: 0;
}

.manual-active {
  border-color: #e6e8eb;
}

.manual-active::after {
  color: #2f51ff;
}
</style>
