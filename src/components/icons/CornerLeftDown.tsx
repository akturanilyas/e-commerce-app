import * as React from 'react';
import { SVGProps } from 'react';
const SvgCornerLeftDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-left-down_svg__feather corner-left-down_svg__feather-corner-left-down"
    {...props}
  >
    <path d="m14 15-5 5-5-5" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </svg>
);
export default SvgCornerLeftDown;
