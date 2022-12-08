export default Rectangle =
  data => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="339" height="116" viewBox="0 0 339 116">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_10128" data-name="Rectangle 10128" width="339" height="116" transform="translate(-2597 -623)" fill="#fff"/>
  </clipPath>
  <filter id="Rectangle_10015" x="-7" y="-6" width="353" height="134" filterUnits="userSpaceOnUse">
    <feOffset dy="3" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feFlood flood-opacity="0.031"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
  <clipPath id="clip-path-2">
    <path id="Subtraction_3" data-name="Subtraction 3" d="M321.242,129.046H12.5A12.5,12.5,0,0,1,0,116.546V37.308l.073-.023c0-3.793,10.5-8.016,31.2-12.551,17.794-3.9,43.219-8,73.528-11.86C131.722,9.445,162.18,6.257,190.562,3.9,218.334,1.59,242.449.205,258.465,0h62.778a12.5,12.5,0,0,1,12.5,12.5V116.546a12.5,12.5,0,0,1-12.5,12.5Z" transform="translate(-157 125.761)" fill="#ff914d"/>
  </clipPath>
</defs>
<g id="Mask_Group_16" data-name="Mask Group 16" transform="translate(2597 623)" clip-path="url(#clip-path)">
  <g id="_001" data-name="001" transform="translate(-2615 -739.999)">
    <g transform="matrix(1, 0, 0, 1, 18, 117)" filter="url(#Rectangle_10015)">
      <g id="Rectangle_10015-2" data-name="Rectangle 10015" transform="translate(2 0)"   fill=${
        data?.fill ? data?.fill : '#ff9d61'
      } stroke="rgba(255,255,255,0.8)" stroke-width="1" stroke-dasharray="8">
        <rect width="335" height="116" rx="15" stroke="none"/>
        <rect x="0.5" y="0.5" width="334" height="115" rx="14.5" fill="none"/>
      </g>
    </g>
  </g>
  <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-2437.499 -761.999)" clip-path="url(#clip-path-2)">
    <g id="Ellipse_895" data-name="Ellipse 895" transform="translate(-217 213.783)" fill="none" stroke= ${
      data?.stroke ? data?.stroke : '#9e4f0a'
    } stroke-width="16" opacity="0.28">
      <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
      <circle cx="52.5" cy="52.5" r="44.5" fill="none"/>
    </g>
    <g id="Ellipse_902" data-name="Ellipse 902" transform="translate(123.499 149)" fill="none" stroke= ${
      data?.stroke ? data?.stroke : '#9e4f0a'
    } stroke-width="16" opacity="0.28">
      <circle cx="37" cy="37" r="37" stroke="none"/>
      <circle cx="37" cy="37" r="29" fill="none"/>
    </g>
  </g>
</g>
</svg>
`;
