import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdjustmentsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="adjustments-horizontal_svg__icon adjustments-horizontal_svg__icon-tabler adjustments-horizontal_svg__icon-tabler-adjustments-horizontal"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={14} cy={6} r={2} />
    <path d="M4 6h8M16 6h4" />
    <circle cx={8} cy={12} r={2} />
    <path d="M4 12h2M10 12h10" />
    <circle cx={17} cy={18} r={2} />
    <path d="M4 18h11M19 18h1" />
  </svg>
);
export default SvgAdjustmentsHorizontal;
