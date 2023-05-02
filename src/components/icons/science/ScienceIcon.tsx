import React from "react";

interface Props {
  color: string;
}

const ScienceIcon = ({ color }: Props) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.95136 6.57833C9.07988 6.50382 9.15896 6.36546 9.15854 6.21583L9.15194 5.41667C9.15194 5.18655 8.96716 5 8.73923 5H6.85976C6.50889 4.99999 6.19636 5.22394 6.08057 5.55833L1.84208 17.7792C1.79795 17.9066 1.81772 18.0477 1.89511 18.1578C1.97251 18.2679 2.09795 18.3333 2.23167 18.3333H12.7904C13.2462 18.3333 13.6158 18.7064 13.6158 19.1667C13.6158 19.6269 13.2462 20 12.7904 20H1.65141C1.11657 20.0002 0.614794 19.7388 0.305047 19.2986C-0.00469995 18.8584 -0.0840265 18.294 0.0922007 17.7842L5.4871 2.22417C5.63799 1.7897 6.10917 1.56099 6.5395 1.71333C6.96984 1.86567 7.19637 2.34137 7.04548 2.77583C6.99985 2.9041 7.01923 3.04678 7.09738 3.1579C7.17553 3.26903 7.30257 3.33454 7.43755 3.33333H8.74583C8.97377 3.33333 9.15854 3.14679 9.15854 2.91667V1.25C9.15854 0.559644 9.71286 0 10.3967 0H12.8729C13.5567 0 14.111 0.559644 14.111 1.25V2.91667C14.111 3.14679 14.2958 3.33333 14.5237 3.33333H15.3491C15.805 3.33333 16.1746 3.70643 16.1746 4.16667C16.1746 4.6269 15.805 5 15.3491 5H14.5237C14.2958 5 14.111 5.18655 14.111 5.41667V6.21583C14.1108 6.36563 14.1902 6.50403 14.319 6.57833C15.9807 7.53453 17.0048 9.31899 17 11.25C17 14.2415 14.5979 16.6667 11.6348 16.6667C8.67167 16.6667 6.26959 14.2415 6.26959 11.25C6.26512 9.31886 7.28946 7.53445 8.95136 6.57833ZM8.95219 11.6667C8.95219 12.0118 9.22935 12.2917 9.57125 12.2917C9.91314 12.2917 10.1903 12.0118 10.1903 11.6667C10.1903 11.3215 9.91314 11.0417 9.57125 11.0417C9.22935 11.0417 8.95219 11.3215 8.95219 11.6667ZM11.8411 14.375C11.4992 14.375 11.2221 14.0952 11.2221 13.75C11.2221 13.4048 11.4992 13.125 11.8411 13.125C12.183 13.125 12.4602 13.4048 12.4602 13.75C12.4602 13.9165 12.3944 14.0761 12.2774 14.1934C12.1604 14.3108 12.0019 14.3761 11.837 14.375H11.8411ZM12.6665 11.8275C12.6665 12.4028 13.1285 12.8692 13.6983 12.8692C14.2678 12.8682 14.7292 12.4024 14.7301 11.8275C14.7301 11.2522 14.2681 10.7858 13.6983 10.7858C13.1285 10.7858 12.6665 11.2522 12.6665 11.8275ZM10.8094 2.08333C10.8094 1.85321 10.9941 1.66667 11.2221 1.66667H12.0475C12.2754 1.66667 12.4602 1.85321 12.4602 2.08333V2.91667C12.4602 3.14679 12.2754 3.33333 12.0475 3.33333H11.2221C10.9941 3.33333 10.8094 3.14679 10.8094 2.91667V2.08333ZM12.4602 5.41667C12.4602 5.18655 12.2754 5 12.0475 5H11.2221C10.9941 5 10.8094 5.18655 10.8094 5.41667V7C10.8088 7.34367 10.5994 7.65177 10.2819 7.77583C9.38032 8.12779 8.65013 8.82074 8.24646 9.7075C8.21766 9.7721 8.22321 9.84703 8.26121 9.90659C8.29921 9.96615 8.36448 10.0022 8.43465 10.0025H14.8316C14.9018 10.0024 14.9671 9.96628 15.005 9.90662C15.0429 9.84696 15.0482 9.77195 15.019 9.7075C14.6158 8.8209 13.8858 8.12815 12.9843 7.77667C12.6679 7.65142 12.4599 7.34315 12.4602 7V5.41667Z"
        fill={color}
      />
    </svg>
  );
};

export default ScienceIcon;
