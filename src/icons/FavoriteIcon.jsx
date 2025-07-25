const FavoriteIcon = ({ isActive, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {isActive ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1.5C12.438 -3 23.534 5 8 15.25C-7.534 5 3.562 -3 8 1.5Z"
          fill="#3470FF"
        />
      ) : (
        <path
          d="M8 2.75L7.283 2.011C5.6 0.281 2.514 0.878 1.4 3.053C0.877 4.076 0.759 5.553 1.714 7.438C2.634 9.253 4.548 11.427 8 13.795C11.452 11.427 13.365 9.253 14.286 7.438C15.241 5.552 15.124 4.076 14.6 3.053C13.486 0.878 10.4 0.280 8.717 2.010L8 2.75ZM8 15C-7.333 4.868 3.279 -3.04 7.824 1.143C7.884 1.198 7.943 1.255 8 1.314C8.056 1.255 8.115 1.198 8.176 1.144C12.72 -3.042 23.333 4.867 8 15Z"
          fill="#F2F4F7"
          stroke="#3470FF"
        />
      )}
    </svg>
  );
};

export default FavoriteIcon;
