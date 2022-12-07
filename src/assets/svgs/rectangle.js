export default Rectangle = data => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="353" height="190.24" viewBox="0 0 353 190.24">
  <defs>
    <filter id="Rectangle_10128" x="0" y="37.24" width="353" height="153" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.031"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <clipPath id="clip-path">
      <path id="Subtraction_13" data-name="Subtraction 13" d="M321.242,176.045H12.5A12.5,12.5,0,0,1,0,163.545V50.9l.073-.032c0-2.663,2.835-5.52,8.426-8.492,5.2-2.766,12.866-5.67,22.771-8.63C49.063,28.424,74.488,22.83,104.8,17.563c26.922-4.678,57.38-9.027,85.762-12.245C218.33,2.169,242.445.28,258.461,0h62.782a12.5,12.5,0,0,1,12.5,12.5V163.545a12.5,12.5,0,0,1-12.5,12.5Z" transform="translate(-157 97.761)" fill="#ff914d"/>
    </clipPath>
  </defs>
  <g id="Group_29640" data-name="Group 29640" transform="translate(10010.5 564.24)">
    <g transform="matrix(1, 0, 0, 1, -10010.5, -564.24)" filter="url(#Rectangle_10128)">
      <g id="Rectangle_10128-2" data-name="Rectangle 10128" transform="translate(9 43.24)" fill="${
        data?.color === 'blue' ? '#9cbaff' : '#ff9d61'
      }" stroke="rgba(255,255,255,0.8)" stroke-width="1" stroke-dasharray="8">
        <rect width="335" height="135" rx="15" stroke="none"/>
        <rect x="0.5" y="0.5" width="334" height="134" rx="14.5" fill="none"/>
      </g>
    </g>
    <g id="Group_29639" data-name="Group 29639" transform="translate(-9843.999 -662)" clip-path="url(#clip-path)">
      <g id="Ellipse_913" data-name="Ellipse 913" transform="translate(-217 215)" fill="none" stroke=${
        data?.color === 'blue' ? '#2051c6' : '#9e4f0a'
      } stroke-width="16" opacity="0.28">
        <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
        <circle cx="52.5" cy="52.5" r="44.5" fill="none"/>
      </g>
      <g id="Ellipse_914" data-name="Ellipse 914" transform="translate(123.499 149)" fill="none" stroke=${
        data?.color === 'blue' ? '#2051c6' : '#9e4f0a'
      } stroke-width="16" opacity="0.28">
        <circle cx="37" cy="37" r="37" stroke="none"/>
        <circle cx="37" cy="37" r="29" fill="none"/>
      </g>
    </g>
  </g>
</svg>`;
};
