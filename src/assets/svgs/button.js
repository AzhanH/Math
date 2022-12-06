export default Button = data => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=${
    data?.reducedSize ? '110' : data?.expand ? '220' : '159.59'
  } height=${
    data?.reducedSize ? '30' : data?.expand ? '55' : '45.088'
  } viewBox="0 0 159.59 45.088">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" y1="0.94" x2="0.5" y2="-0.113" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="${data?.isRed ? '#890103' : '#3e3e3e'}"/>
        <stop offset="1" stop-color="${data?.isRed ? '#890103' : '#3e3e3e'}"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="0.5" y1="0.94" x2="0.5" y2="-0.113" gradientUnits="objectBoundingBox">
        <stop offset="1" stop-color=${data?.isRed ? '#ed2123' : '#3e3e3e'}/>
        <stop offset="0" stop-color=${data?.isRed ? '#ed2123' : '#3e3e3e'}/>
      </linearGradient>
      <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="11.081" gradientTransform="translate(0.465) scale(0.07 1)" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color=${data?.isRed ? '#ff8f97' : '#bebebe'}/>
        <stop offset="1" stop-color=${data?.isRed ? '#ff8f97' : '#bebebe'}/>
      </radialGradient>
    </defs>
    <g id="Group_29639" data-name="Group 29639" transform="translate(-72 -640.739)">
      <g id="Group_28030" data-name="Group 28030" transform="translate(72 640.739)">
        <path id="Path_1227" data-name="Path 1227" d="M473.961,62.208a53.82,53.82,0,0,1-5.106-6.312c-1.1-1.507-2.244-3.066-3.459-4.524-5.234-6.283-10.638-8.73-19.274-8.73h-97.95c-8.635,0-14.039,2.447-19.273,8.73-1.215,1.458-2.356,3.017-3.46,4.526a53.861,53.861,0,0,1-5.105,6.31l-2.98,2.979,2.98,2.978a53.786,53.786,0,0,1,5.1,6.31c1.1,1.507,2.246,3.067,3.46,4.525,5.235,6.283,10.638,8.731,19.274,8.731h97.95c8.637,0,14.04-2.448,19.274-8.73,1.215-1.458,2.356-3.017,3.459-4.525a53.8,53.8,0,0,1,5.106-6.31l2.981-2.978Z" transform="translate(-317.353 -42.642)" fill-rule="evenodd" fill="url(#linear-gradient)"/>
        <path id="Path_1228" data-name="Path 1228" d="M474.93,67.975c-3.329-3.327-5.9-7.61-8.824-11.119-4.586-5.5-8.929-7.215-16.038-7.215H352.117c-7.109,0-11.452,1.71-16.038,7.215-2.923,3.508-5.5,7.791-8.824,11.119,3.328,3.327,5.9,7.61,8.824,11.118,4.586,5.505,8.929,7.215,16.038,7.215h97.951c7.109,0,11.452-1.71,16.038-7.215,2.924-3.508,5.5-7.791,8.824-11.118Z" transform="translate(-321.298 -45.431)" fill-rule="evenodd" fill="url(#linear-gradient-2)"/>
        <path id="Path_1229" data-name="Path 1229" d="M343.859,59.249c4.155-4.987,7.879-6.4,14.3-6.4h97.951c6.423,0,10.146,1.414,14.3,6.4.494.592.97,1.194,1.437,1.8-.61-.834-1.233-1.661-1.886-2.469-4.137-5.117-7.845-6.568-14.241-6.568H358.551c-6.4,0-10.1,1.45-14.241,6.568-.653.808-1.276,1.634-1.886,2.469.467-.609.943-1.211,1.436-1.8Z" transform="translate(-327.342 -46.377)" fill-rule="evenodd" fill="url(#radial-gradient)" style="mix-blend-mode: screen;isolation: isolate"/>
      </g>
    </g>
  </svg>
  `;
};
