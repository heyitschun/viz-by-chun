import React from 'react';
import Footer from '../components/footer';
import organicData from '../data/avocado/organic-month-avp-vol.json';
import conventionalData from '../data/avocado/conventional-month-avp-vol.json';
import { extent, line, max, scaleLinear, scaleTime, timeYear } from 'd3';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

function Avocado() {
  const dims = {
    width: 400,
    height: 400
  };

  const timeDomain = extent(organicData, d => d.date);
  const xScale = scaleTime()
    .domain([new Date("2015"), new Date("2019")])
    .range([0, dims.width])

  const xAxis = axisBottom().scale(xScale).ticks(timeYear);

  const avpOrganicMax = max(organicData, d => d.avp);
  const avpOrganicScale = scaleLinear()
    .domain([0, avpOrganicMax])
    .range([dims.height, 0]);

  const avpConventionalMax = max(conventionalData, d => d.avp);
  const avpConventionalScale = scaleLinear()
    .domain([0, avpConventionalMax])
    .range([dims.height, 0]);

  const volMax = max(organicData, d => d.volume);
  const volScale = scaleLinear()
    .domain([0, volMax])
    .range([dims.height, 0]);

  const lineGenerator = line()
  lineGenerator.x(d => xScale(new Date(d.date)));

  // Organic plots
  lineGenerator.y(d => avpOrganicScale(d.avp));
  const avpOrganicLine = lineGenerator(organicData);

  // Conventional plots
  lineGenerator.y(d => avpConventionalScale(d.avp));
  const avpConventionalLine = lineGenerator(conventionalData);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 border border-red-400 flex justify-center">
        <svg
          className="border border-blue-300"
          width={dims.width}
          height={dims.height}
        >
          <path d={avpOrganicLine} fill="none" stroke="#ff9966" />
          <path d={avpConventionalLine} fill="none" stroke="#dd99ff" />
          <g>
            <g
              ref={node => select(node).call(xAxis)}
              className="z-50 text-black"
              style={{ transform: `translateY(${dims.height-100}px)` }}
            />
          </g>
        </svg>
      </div>
      <Footer bgColor="bg-black" textColor="text-white" className="flex-shrink" />
    </div>
  );
};

export default Avocado;
