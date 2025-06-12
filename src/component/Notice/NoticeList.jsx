import React from 'react';

function NoticeList() {
  const list = [
    {
      id: 1,
      number: "1",
      title: "25. 06 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-06-10",
      views: "15"
    },
    {
      id: 2,
      number: "2",
      title: "25. 05 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-05-15",
      views: "653"
    },
    {
      id: 3,
      number: "3",
      title: "25. 04 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내 ",
      writer: "관리자",
      date: "2025-04-22",
      views: "1067"
    },
    {
      id: 4,
      number: "4",
      title: "25. 04 드롭탑 휴게소 매장 판매제품 영양성분 및 알레르기 유발물질 안내 ",
      writer: "관리자",
      date: "2025-04-22",
      views: "1066"
    },
    {
      id: 5,
      number: "5",
      title: "25. 03 드롭탑 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-03-12",
      views: "2926"
    },
    {
      id: 6,
      number: "6",
      title: "25. 02 드롭탑 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2024-09-05",
      views: "4936"
    },
    {
      id: 7,
      number: "7",
      title: "드롭탑 App 리뉴얼 및 선불카드 환불 안내",
      writer: "관리자",
      date: "2023-10-20",
      views: "10608"
    },
    {
      id: 8,
      number: "8",
      title: "레디백 프로모션 참여 매장(구매처) 안내",
      writer: "관리자",
      date: "2022-05-24",
      views: "14426"
    },
    {
      id: 9,
      number: "9",
      title: "22년 5월 여름 프로모션 스탬프 적립 사용 불가 매장 안내",
      writer: "관리자",
      date: "2022-05-03",
      views: "13322"
    },
    {
      id: 10,
      number: "10",
      title: "단종메뉴 모바일 교환권 환불 안내(2/14 시행~)",
      writer: "관리자",
      date: "2022-03-29",
      views: "14704"
    },
  ];

  return (
    <>
      {list.length > 0 ? (
        list.map((item) => (
          <tr key={item.id}>
            <td>{item.number}</td>
            <td>{item.title}</td>
            <td>{item.writer}</td>
            <td>{item.date}</td>
            <td>{item.views}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className="no-data">등록된 게시물이 없습니다.</td>
        </tr>
      )}
    </>
  );
}

export default NoticeList;
