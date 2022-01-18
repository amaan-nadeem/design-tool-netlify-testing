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
