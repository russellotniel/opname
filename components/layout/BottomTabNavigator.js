// import React from "react";

// const BottomTabNavigator = () => {
//   return (
//     <div class="w-fit h-screen">
//       <section
//         id="bottom-navigation"
//         class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
//       >
//         <div id="tabs" class="flex justify-between">
//           <a
//             href="#"
//             class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//           >
//             <svg
//               width="25"
//               height="25"
//               viewBox="0 0 42 42"
//               class="inline-block mb-1"
//             >
//               <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                 <path
//                   d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z"
//                   fill="currentColor"
//                   opacity="0.1"
//                 ></path>
//                 <path
//                   d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z"
//                   fill="currentColor"
//                   transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "
//                 ></path>
//                 <circle
//                   stroke="currentColor"
//                   stroke-width="2"
//                   cx="21"
//                   cy="21"
//                   r="20"
//                 ></circle>
//               </g>
//             </svg>
//             <span class="tab tab-explore block text-xs">Explore</span>
//           </a>
//           <a
//             href="#"
//             class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//           >
//             <svg
//               width="25"
//               height="25"
//               viewBox="0 0 42 42"
//               class="inline-block mb-1"
//             >
//               <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                 <path
//                   d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
//                   fill="currentColor"
//                   opacity="0.1"
//                 ></path>
//                 <g transform="translate(2.000000, 3.000000)">
//                   <path
//                     d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
//                     fill="currentColor"
//                     transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
//                   ></path>
//                   <circle
//                     stroke="currentColor"
//                     stroke-width="2"
//                     cx="27.5"
//                     cy="27.5"
//                     r="7.5"
//                   ></circle>
//                 </g>
//               </g>
//             </svg>
//             <span class="tab tab-whishlist block text-xs">Whishlist</span>
//           </a>
//           <a
//             href="#"
//             class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//           >
//             <svg
//               width="25"
//               height="25"
//               viewBox="0 0 42 42"
//               class="inline-block mb-1"
//             >
//               <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                 <path
//                   d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
//                   fill="currentColor"
//                   opacity="0.1"
//                 ></path>
//                 <g transform="translate(2.000000, 3.000000)">
//                   <path
//                     d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                   ></path>
//                   <path
//                     d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
//                     fill="currentColor"
//                     transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
//                   ></path>
//                   <circle
//                     stroke="currentColor"
//                     stroke-width="2"
//                     cx="27.5"
//                     cy="27.5"
//                     r="7.5"
//                   ></circle>
//                 </g>
//               </g>
//             </svg>
//             <span class="tab tab-account block text-xs">Account</span>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BottomTabNavigator;

import React from "react";
import Link from "next/link";
import styles from "../../styles/BotNav.module.css";
import { useRouter } from "next/router";

const Nav = ({ focus }) => {
  const router = useRouter();
  var active = (
    <div
      style={{
        width: "5px",
        height: "5px",
        backgroundColor: "#feb800",
        margin: "5px auto",
        borderRadius: "50px",
      }}
    />
  );
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_box}>
        <Link href={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        </Link>
        <Link href={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
        <Link href={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;