import React, { createContext, useContext, useReducer } from 'react';

// useReducer 상태값에 따라 컴포넌트 분할
// createContext 전역으로 사용할 데이터 설정
// userContext : createContext으로 설정된 데이터를 사용하기 위한 함수

const MainMenuList = [
  // [0] mainMenu
  [
    {
      id: 1,
      src: "/images/main/mainMenu01.png",
      ttl: "샹그리아 레몬 에이드 (L)",
      eng: "Shangri-La Lemonade",
    },
    {
      id: 2,
      src: "/images/main/mainMenu02.png",
      ttl: "수박 주스 (R/L)",
      eng: "Watermelon Juice",
    },
    {
      id: 3,
      src: "/images/main/mainMenu03.png",
      ttl: "애플망고 블렌디드 (R/L)",
      eng: "Apple Mango Blended",
    },
    {
      id: 4,
      src: "/images/main/mainMenu04.jpg",
      ttl: "달콤 연유 밀크 블렌디드",
      eng: "Sweet Milk Bite Blended",
    },
  ],
  // [1] mainNotice
  [
    {
      id: 1,
      ttl: "25. 05 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      date: "2025-05-15",
    },
    {
      id: 2,
      ttl: "25. 04 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      date: "2025-04-22",
    },
    {
      id: 3,
      ttl: "25. 04 드롭탑 휴게소 매장 판매제품 영양성분 및 알레르기 유발물질 안내 ",
      date: "2025-04-22",
    },
    {
      id: 4,
      ttl: "25. 03 드롭탑 판매제품 영양성분 및 알레르기 유발물질 안내",
      date: "2025-03-12",
    },
  ]
]

function proReducer(MainMenuList, action) {}

const ProStateContext = createContext(); // 전역으로 사용할 데이터 설정 컴포넌트

export function ProProvider({children}) {
  // 기능 분할
  const [ state, dispatch ] = useReducer(proReducer, MainMenuList);
  return(
    <ProStateContext.Provider value={state}>
      {children}
    </ProStateContext.Provider>
  );
}

// 전역으로 컴포넌트를 사용하기(useContext)
export function useProState() {
  const context = useContext(ProStateContext)
  if(!context) {
    throw new Error();
  }
  return context;
}

// export default ProProvider;