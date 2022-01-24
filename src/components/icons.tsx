const sizeFactor = 24;

export type Icon = {
  size?: number;
  color?: string;
};

export const Location: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.362 6.213L3.646 2.706c-.963-.387-1.942.591-1.554 1.555l3.507 8.715c.42 1.046 1.945.918 2.233-.188l.718-2.757c.11-.423.444-.756.867-.867l2.757-.718c1.106-.288 1.234-1.812.188-2.233z"
      ></path>
    </svg>
  );
};

export const DownAngle: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 8 6"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M.707.828L0 1.536l2.828 2.828.708.707.707-.707L7.07 1.536 6.364.828 3.536 3.657.707.828z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const PlayButton: React.FC<Icon> = ({ size = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 28 28"
    >
      <circle cx="14" cy="14" r="14" fill="#20F384"></circle>
      <path fill="#09181C" d="M17 14l-4.5-2.598v5.196L17 14z"></path>
    </svg>
  );
};

export const NumberSymbol: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 0h1v3h4V0h1v3h3v1H9v4h3v1H9v3H8V9H4v3H3V9H0V8h3V4H0V3h3V0zm1 4v4h4V4H4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Rectangle: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path stroke={color} d="M0.5 0.5H11.5V11.5H0.5z"></path>
    </svg>
  );
};

export const TLetter: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 12 13"
    >
      <path
        fill={color}
        d="M3.46 12.88L3.4 13h5.32l-.06-.12-.78-.06c-1.04-.08-1.16-.12-1.16-.26V.66h1.64c1.32.1 2.04.64 2.88 2.6l.12.26h.12L10.82.5h-9.3l-.9 3.02h.14l.14-.26C1.68 1.88 2.46.8 3.72.66h1.7V12.5c0 .14-.26.24-.96.3l-1 .08z"
      ></path>
    </svg>
  );
};

export const Pen: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 23 24"
    >
      <g fill={color}>
        <path d="M13.251 16.662l2.725-2.725 2.946 1.768-3.903 3.904-1.768-2.947zm2.828-1.885l-1.988 1.989 1.06 1.767 2.696-2.696-1.768-1.06zM5.28 6.72l.753-.753.191.057c.385.115.836.238 1.326.372 2.214.603 5.246 1.43 6.592 2.776 1.692 1.691 1.692 3.965 0 5.656-1.692 1.692-3.965 1.692-5.657 0-1.345-1.345-2.17-4.374-2.774-6.587-.134-.491-.257-.944-.373-1.33L5.28 6.72zm.944 0l-.191.19c.1.347.207.738.321 1.156.584 2.14 1.383 5.071 2.603 6.291 1.432 1.432 3.282 1.432 4.714 0 1.432-1.432 1.432-3.282 0-4.714-1.22-1.22-4.154-2.02-6.296-2.604-.417-.113-.806-.22-1.151-.32z"></path>
        <path d="M9.9 10.586c.52-.52 1.365-.52 1.885 0s.52 1.365 0 1.885-1.365.52-1.885 0a1.335 1.335 0 010-1.885zM11.314 12a.667.667 0 10-.945-.943.667.667 0 00.945.943z"></path>
        <path d="M9.9 11.057l.471-.471-4.243-4.243-.471.472L9.9 11.057zM15.32 15.064l.472-.471-1.02-1.02-.472.47 1.02 1.021zM13.906 16.478l.472-.471-1.02-1.02-.472.471 1.02 1.02z"></path>
      </g>
    </svg>
  );
};

export const Link: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(sizeFactor * size * 7) / 10}
      height={(sizeFactor * size * 12) / 10}
      fill="none"
      viewBox="0 0 7 12"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M1 3.5a2.5 2.5 0 015 0v1h1v-1a3.5 3.5 0 10-7 0v1h1v-1zm0 5a2.5 2.5 0 005 0v-1h1v1a3.5 3.5 0 11-7 0v-1h1v1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const RightAngle: React.FC<Icon> = ({ size = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 11 11"
    >
      <path
        fill="#6F8C94"
        fillRule="evenodd"
        d="M1 0H0v11h11v-1H4.973A4.502 4.502 0 001 6.027V0zm0 7.035V10h2.965A3.502 3.502 0 001 7.035z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Curve: React.FC<Icon> = ({ size = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 12 13"
    >
      <path stroke="#6F8C94" d="M.5 13V7a6 6 0 016-6H12"></path>
    </svg>
  );
};

export const Box: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      viewBox="0 0 11 11"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 0H0v4h1V1h3V0zm3 0h4v4h-1V1H7V0zM0 10V7h1v3h3v1H0v-1zm10-3v3H7v1h4V7h-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Search: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 14 14"
    >
      <circle
        cx="6.625"
        cy="6.625"
        r="4.875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      ></circle>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M10 10l2.25 2.25"
      ></path>
    </svg>
  );
};

export const Drop: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 14 16"
    >
      <path
        fill={color}
        d="M12.727 9.073h.8-.8zm-11.454 0h-.8.8zM7 14.8V14v.8zM5.937 1.601l-.505-.62.505.62zm5.99 7.472c0-1.37-.643-2.734-1.554-3.965-.904-1.221-2.015-2.234-2.815-2.886l1.01-1.24c.855.696 2.077 1.804 3.091 3.174 1.007 1.36 1.868 3.059 1.868 4.917h-1.6zM6.442 2.222c-.8.652-1.91 1.665-2.815 2.886-.911 1.23-1.554 2.594-1.554 3.965h-1.6c0-1.858.86-3.556 1.868-4.917C3.355 2.786 4.577 1.678 5.432.981l1.01 1.24zm-4.37 6.85c0 1.308.52 2.56 1.444 3.485l-1.131 1.131A6.527 6.527 0 01.473 9.073h1.6zm1.444 3.485A4.927 4.927 0 007 14v1.6a6.527 6.527 0 01-4.615-1.912l1.13-1.131zM7 14c1.307 0 2.56-.52 3.484-1.443l1.132 1.131A6.527 6.527 0 017 15.6V14zm3.484-1.443a4.927 4.927 0 001.443-3.484h1.6a6.527 6.527 0 01-1.911 4.615l-1.132-1.131zM7.558 2.222a.869.869 0 00-1.116 0L5.432.982c.92-.75 2.216-.75 3.136 0l-1.01 1.24z"
      ></path>
    </svg>
  );
};

export const Eye: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 14 12"
    >
      <path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.108 6.035a2.108 2.108 0 11-4.216 0 2.108 2.108 0 014.216 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.999 10.903c2.538 0 4.86-1.825 6.168-4.868-1.308-3.042-3.63-4.868-6.168-4.868H7c-2.538 0-4.86 1.826-6.168 4.868 1.308 3.043 3.63 4.868 6.168 4.868H7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Add: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 11 11"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 6v5h1V6h5V5H6V0H5v5H0v1h5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Dots: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 11 11"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 0H0v2h2V0zm0 9H0v2h2V9zm7-9h2v2H9V0zm2 9H9v2h2V9z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Subtract: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 11 1"
    >
      <path fill={color} d="M0 0H11V1H0z"></path>
    </svg>
  );
};

export const Aim: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 0h1v2.016A7.501 7.501 0 0116.984 9H19v1h-2.016A7.501 7.501 0 0110 16.984V19H9v-2.016A7.501 7.501 0 012.016 10H0V9h2.016A7.501 7.501 0 019 2.016V0zm6.981 9H14v1h1.981A6.501 6.501 0 0110 15.981V14H9v1.981A6.501 6.501 0 013.019 10H5V9H3.019A6.501 6.501 0 019 3.019V5h1V3.019A6.501 6.501 0 0115.981 9z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const More: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 12 2"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M0 0h2v2H0V0zm10 0h2v2h-2V0zM7 0H5v2h2V0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Layers: React.FC<Icon> = ({ size = 1, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeFactor * size}
      height={sizeFactor * size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path fill={color} d="M0 0H16V1H0z"></path>
      <path fill={color} d="M0 6H16V8H0z"></path>
      <path fill={color} d="M0 13H16V16H0z"></path>
    </svg>
  );
};
