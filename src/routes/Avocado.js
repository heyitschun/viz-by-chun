import React from 'react';
import Footer from '../components/footer';
import data from '../data/avocado/organic-month-avp-vol.json';
import { line, scaleLinear, scaleTime, timeYear } from 'd3';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

function Avocado() {
  const dims = {
    width: 400,
    height: 400
  }
  let avp = [];
  let vol = [];
  const values = Object.values(data).map(v => {
    avp = [...avp, v["AveragePrice"]];
    vol = [...vol, v["Total Volume"]];
    return v;
  });
  console.log(avp);

  let avpScale = scaleLinear()
    .range()

  const lineGenerator = line();

  let times = Object.keys(data);
  let timeScale = scaleTime()
    .domain([new Date(times[0]), new Date(times.slice(-1)[0])])
    .range([0, 400])


  const xAxis = axisBottom().scale(timeScale).ticks(timeYear);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 border border-red-400 flex justify-center">
        <svg
          className="border border-blue-300"
          width={dims.width}
          height={dims.height}
        >
          <circle cy="50" cx="50" r="40" fill="#ff9966"></circle>
          <g>
            <g
              ref={(node) => select(node).call(xAxis)}
              className="z-50 text-black"
              style={{ transform: `translateY(${dims.height/2}px)` }}
            />
          </g>
        </svg>
      </div>
      <Footer bgColor="bg-black" textColor="text-white" className="flex-shrink" />
    </div>
  );
};

export default Avocado;
