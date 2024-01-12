const canvas = document.querySelector('#canvas')

const width = document.documentElement.clientWidth * devicePixelRatio;

const height = document.documentElement.clientHeight * devicePixelRatio;

canvas.width = width;

canvas.height = height;

const cvs = canvas.getContext('2d');


const fontSize = 16 * devicePixelRatio;

const columnCount = Math.floor(width / fontSize);

const nextColumn = new Array(columnCount).fill(0);

const draw = () => {
  cvs.fillStyle = 'rgba(0, 0, 0, 0.1)';
  cvs.fillRect(0, 0, width, height);
  nextColumn.forEach((item, index) => {
    cvs.fillStyle = getRandomColor();
    cvs.font = `${fontSize}px Arial`;
    const x = index * fontSize;
    const y = (item + 1) * fontSize;
    cvs.fillText(getRandomNumber(), x, y);
    if (y > height && Math.random() > 0.99) {
      nextColumn[index] = 0;
    } else {
      nextColumn[index] += 1;
    }
  });
}



const getRandomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

const getRandomNumber = () => {
    const str = Math.random() * 100 + "";
    return str[Math.floor(Math.random() * str.length)]
}

draw();

setInterval(draw, 30)