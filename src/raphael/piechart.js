/* Draws a piechart of the amount of tests passing */
Raphael.fn.pieChart = function (cx, cy, r, amountOfTestsPassing) {

    var paper = this,
    rad = Math.PI / 180,
    circle,
    chart = this.set();

    //If all tests pass/fail, draw a circle
    if (amountOfTestsPassing === 100) {
        circle = paper.circle(cx,cy,r);
        circle.attr('fill', '#ADE8A5');
        chart.push(circle);
        return chart;
    }

    else if (amountOfTestsPassing === 0) {
        circle = paper.circle(cx,cy,r);
        circle.attr('fill', '#FF9999');
        chart.push(circle);
        return chart;
    }

    //Draw a sector
    function sector(cx, cy, r, startAngle, endAngle, params) {

        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return paper.path(['M', cx, cy, 'L', x1, y1, 'A', r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, 'z']).attr(params);
    }

    var angle = 0,
        colors = ['#ADE8A5', '#FF9999'],
        values = [amountOfTestsPassing, 100 - amountOfTestsPassing];

    for (var i = 0; i < 2; i++) {
        var value = values[i],
                angleplus = 360 * value / 100,
                color = colors[i],
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: color, stroke: '#000', 'stroke-width': 0.5});
        angle += angleplus;
        chart.push(p);
    }

    return chart;
}
