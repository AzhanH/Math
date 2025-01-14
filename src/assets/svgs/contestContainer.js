export default ContestContainer =
  data => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="158.941" height="230.72" viewBox="0 0 158.941 230.72">
  <defs>
    <clipPath id="clip-path">
      <path id="Subtraction_3" data-name="Subtraction 3" d="M146.441,230.72H12.5A12.5,12.5,0,0,1,0,218.22V66.705l.036-.043c0-6.781,5-14.33,14.855-22.438a132.522,132.522,0,0,1,15.883-11c5.741-3.445,12.177-6.877,19.131-10.2A315.827,315.827,0,0,1,90.746,6.973C103.971,2.846,115.456.37,123.085,0h23.355a12.5,12.5,0,0,1,12.5,12.5V218.22a12.5,12.5,0,0,1-12.5,12.5Z" transform="translate(0 0)" fill="#ff914d"/>
    </clipPath>
  </defs>
  <g id="Group_29641" data-name="Group 29641" transform="translate(2781.941 603.72)">
    <g id="Group_29640" data-name="Group 29640">
      <path id="Subtraction_1" data-name="Subtraction 1" d="M146.441,220.235H12.5A12.5,12.5,0,0,1,0,207.735V63.674l.036-.041c0-6.472,5-13.678,14.853-21.417C23.361,35.563,35.467,28.565,49.9,21.977A324.957,324.957,0,0,1,90.736,6.658c13.225-3.94,24.71-6.3,32.34-6.658h23.364a12.5,12.5,0,0,1,12.5,12.5V207.735a12.5,12.5,0,0,1-12.5,12.5Z" transform="translate(-2781.941 -593.235)" fill=${
        data?.color === 'red'
          ? '#ed2123'
          : data?.color === 'blue'
          ? '#2051c6'
          : data?.color === 'green'
          ? '#23af5b'
          : '#ff914d'
      }/>
    </g>
    <g id="Group_29639" data-name="Group 29639" transform="translate(-2800.246 -771.481)">
      <g id="Group_1" data-name="Group 1" transform="translate(18.305 167.761)" clip-path="url(#clip-path)">
        <g id="Ellipse_895" data-name="Ellipse 895" transform="translate(-55.305 161.307)" fill="none" stroke="${
          data?.color === 'red'
            ? '#6a0203'
            : data?.color === 'blue'
            ? '#0b2a74'
            : data?.color === 'green'
            ? '#0b6a31'
            : '#9e4f0a'
        }" stroke-width="16" opacity="0.28">
          <circle cx="50" cy="50" r="50" stroke="none"/>
          <circle cx="50" cy="50" r="42" fill="none"/>
        </g>
        <g id="Ellipse_902" data-name="Ellipse 902" transform="translate(126.695 21.307)" fill="none" stroke="${
          data?.color === 'red'
            ? '#6a0203'
            : data?.color === 'blue'
            ? '#0b2a74'
            : data?.color === 'green'
            ? '#0b6a31'
            : '#9e4f0a'
        }" stroke-width="16" opacity="0.28">
          <ellipse cx="35.5" cy="35" rx="35.5" ry="35" stroke="none"/>
          <ellipse cx="35.5" cy="35" rx="27.5" ry="27" fill="none"/>
        </g>
      </g>
      <g id="Group_28896" data-name="Group 28896" transform="translate(31.651 344.265)">
        <rect id="Rectangle_10060" data-name="Rectangle 10060" width="34" height="35" rx="17" transform="translate(0.35 -0.265)" fill="#fff"/>
        <g id="Rectangle_10061" data-name="Rectangle 10061" transform="translate(3.35 2.735)" fill= ${
          data?.color === 'red'
            ? '#ed2123'
            : data?.color === 'blue'
            ? '#2051c6'
            : data?.color === 'green'
            ? '#23af5b'
            : '#ff914d'
        } stroke=${
    data?.color === 'red'
      ? '#ed2123'
      : data?.color === 'blue'
      ? '#2051c6'
      : data?.color === 'green'
      ? '#23af5b'
      : '#f69d5b'
  } stroke-width="1">
          <rect width="28" height="29" rx="14" stroke="none"/>
          <rect x="0.5" y="0.5" width="27" height="28" rx="13.5" fill="none"/>
        </g>
        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(14.049 13.345)">
          <path id="Path_27775" data-name="Path 27775" d="M7.5,18h6.749" transform="translate(-7.5 -14.626)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
          <path id="Path_27776" data-name="Path 27776" d="M18,7.5l3.374,3.374L18,14.249" transform="translate(-14.626 -7.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
        </g>
      </g>
    </g>
  </g>
</svg>`;
