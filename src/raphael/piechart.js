/* Draws a piechart of the amount of tests passing */
Raphael.fn.pieChart = function (cx, cy, r, values) {

    var paper = this,
    rad = Math.PI / 180,
    circle,
    chart = this.set();


    //Draw a sector
    function sector(cx, cy, r, startAngle, endAngle, params) {

        var x1 = cx + r * Math.cos(startAngle * rad),
            x2 = cx + r * Math.cos(endAngle * rad),
            y1 = cy + r * Math.sin(startAngle * rad),
            y2 = cy + r * Math.sin(endAngle * rad);

        return paper.path(['M', cx, cy, 'L', x1, y1, 'A', r, r, 1, +(endAngle - startAngle > 180), 1, x2, y2, 'z']).attr(params);

    }


    var angle = -90,
        total = 0,
        colors = ['#ADE8A5', '#FF9999', '#228BE0', '#FFFFFF'];

    for (var j = 0; j < values.length; j++) {

        total += values[i];
    }

    for (var i = 0; i < values.length; i++) {

        var value = values[i];

        if(value === 100) {

            circle = paper.circle(cx, cy, r);
            circle.attr('fill', colors[i]);
            circle.toBack();
            chart.push(circle);

            return chart;
        }

        if(value === 0) {

            continue;
        }

        var angleplus = 360 * value / 100,
                color = colors[i],
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: color, stroke: '#000', 'stroke-width': 0.5});

        p.toBack();

        angle += angleplus;
        chart.push(p);

    }

    return chart;
    

}
