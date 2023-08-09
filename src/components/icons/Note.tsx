import * as React from 'react';
import { SVGProps } from 'react';
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 61 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0v40.917A5.083 5.083 0 0 0 5.083 46h34.532a5.04 5.04 0 0 0 3.593-1.49L59.51 28.208A5.039 5.039 0 0 0 61 24.615V0H0Zm40.667 25.667v14.198l14.198-14.198H40.667Z"
    />
  </svg>
);
export default SvgNote;
