import * as React from 'react';
import { SVGProps } from 'react';
const SvgCashBanknote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="cash-banknote_svg__icon cash-banknote_svg__icon-tabler cash-banknote_svg__icon-tabler-cash-banknote"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM18 12h.01M6 12h.01" />
  </svg>
);
export default SvgCashBanknote;
