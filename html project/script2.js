const container = document.querySelector('.cars-container');
const images = container.querySelectorAll('.box img');

function getDominantColor(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colorFrequencies = {};
    for (let i = 0; i < imageData.length; i += 4) {
        const color = `${imageData[i]},${imageData[i + 1]},${imageData[i + 2]}`;
        colorFrequencies[color] = colorFrequencies[color] ? colorFrequencies[color] + 1 : 1;
    }
    let dominantColor = '';
    let maxFrequency = 0;
    for (const color in colorFrequencies) {
        if (colorFrequencies[color] > maxFrequency) {
            maxFrequency = colorFrequencies[color];
            dominantColor = color;
        }
    }
    return dominantColor;
}

const dominantColors = [];

images.forEach(image => {
    const color = getDominantColor(image);
    dominantColors.push(color);
});

function mostCommonColor(colors) {
    return colors.sort((a, b) =>
        colors.filter(color => color === a).length - colors.filter(color => color === b).length
    ).pop();
}

container.style.backgroundColor = `rgb(${mostCommonColor(dominantColors)})`;
