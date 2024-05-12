const InactiveLinkIcon = () => {
  return (
    <div className="flex items-center justify-center rounded-full size-9 bg-yellow-600/30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-link-off"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 15l3 -3m2 -2l1 -1" />
        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
        <path d="M3 3l18 18" />
        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
      </svg>
    </div>
  );
};
export default InactiveLinkIcon;