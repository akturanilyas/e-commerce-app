import * as React from 'react';
import { SVGProps } from 'react';
const SvgEquals = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    {...props}
  >
    <path d="M4 10h16M4 14h16" />
  </svg>
);
export default SvgEquals;
