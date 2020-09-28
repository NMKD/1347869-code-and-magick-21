'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const HEADER_X = 130;
const HEADER_Y = 30;
const FONT_GAP = 255;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const TIMES_Y = 80;
const BAR_Y = 250;
const RED_COLOR = `rgba(255, 0, 0, 1)`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, HEADER_X, HEADER_Y);
  ctx.fillText(`Список результатов:`, HEADER_X, HEADER_Y + GAP * 2);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; ++i) {
    const timesRound = Math.round(times[i]);
    if (names[i] === `Вы`) {
      ctx.fillStyle = RED_COLOR;
    } else {
      ctx.fillStyle = `hsl(237, 100%, ${getRandomInt(100)}%)`;
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_WIDTH) * i, BAR_Y - GAP - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = `#000`;
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_WIDTH) * i, FONT_GAP);
    ctx.fillText(timesRound, CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_WIDTH) * i, TIMES_Y - (GAP * 2) - (BAR_HEIGHT * times[i]) / maxTime);
  }
};
