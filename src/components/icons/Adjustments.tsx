import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdjustments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="adjustments_svg__icon adjustments_svg__icon-tabler adjustments_svg__icon-tabler-adjustments"
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
    <circle cx={6} cy={10} r={2} />
    <path d="M6 4v4M6 12v8" />
    <circle cx={12} cy={16} r={2} />
    <path d="M12 4v10M12 18v2" />
    <circle cx={18} cy={7} r={2} />
    <path d="M18 4v1M18 9v11" />
  </svg>
);
export default SvgAdjustments;
