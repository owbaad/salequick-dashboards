// example data
const lastYear = [40,55,38,60,72,50,65,80,45,58,70,62,55,68,75,60,48,66,72,58,64,70,80,75];
const currentYear = [50,62,45,68,80,58,72,88,52,66,78,70,62,75,82,68,55,74,80,66,72,78,88,82];
const labels = Array.from({length: 24}, (_, i) => `Jun ${i + 1}`);

function renderVolumeChart({ lastYear, currentYear, labels }) {
    const svg = document.querySelector('.chart-svg');
    const barsGroup = svg.querySelector('.bars');
    const pointsGroup = svg.querySelector('.points');
    const line = svg.querySelector('.line-graph');
    const xAxis = document.querySelector('.chart-x');

    const [vbW, vbH] = [960, 260];
    const n = labels.length;
    const step = vbW / n;
    const barWidth = step * 0.5;
    const maxVal = Math.max(...lastYear, ...currentYear);
    const scaleY = v => vbH - (v / maxVal) * vbH;

    // Bars (last year)
    barsGroup.innerHTML = lastYear.map((v, i) => {
        const x = i * step + (step - barWidth) / 2;
        const y = scaleY(v);
        const h = vbH - y;
        return `<rect class="bar-rect" x="${x}" y="${y}" width="${barWidth}" height="${h}" />`;
    }).join('');

    // Line (current year)
    const points = currentYear.map((v, i) => {
        const x = i * step + step / 2;
        const y = scaleY(v);
        return `${x},${y}`;
    });
    line.setAttribute('points', points.join(' '));

    // Optional point markers
    pointsGroup.innerHTML = currentYear.map((v, i) => {
        const x = i * step + step / 2;
        const y = scaleY(v);
        return `<circle class="line-point" cx="${x}" cy="${y}" r="3" />`;
    }).join('');

    // X labels
    xAxis.innerHTML = labels.map(l => `<span>${l}</span>`).join('');
}

renderVolumeChart({ lastYear, currentYear, labels });