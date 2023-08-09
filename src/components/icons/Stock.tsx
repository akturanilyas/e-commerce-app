import * as React from 'react';
import { SVGProps } from 'react';
const SvgStock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="stock_svg__icon stock_svg__icon-tabler stock_svg__icon-tabler-packages"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path stroke="currentColor" d="m7 16.5-5-3 5-3 5 3V19l-5 3z" />
    <path
      stroke="currentColor"
      d="M2 13.5V19l5 3M7 16.545l5-3.03M17 16.5l-5-3 5-3 5 3V19l-5 3zM12 19l5 3M17 16.5l5-3"
    />
    <path stroke="currentColor" d="M12 13.5V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3" />
  </svg>
);
export default SvgStock;
