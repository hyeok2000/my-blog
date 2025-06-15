import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">블로그 소개</h1>
      <div className="prose prose-lg">
        <p>안녕하세요!</p>
        <p>
          이 블로그는 임도혁이 웹프로그래밍 수업을 통해 직접 만든 <br />
          <b>메이플스토리의 모든 것</b>을 다루는 커뮤니티 블로그입니다.
        </p>
        <p>
          메이플의 기본 정보부터, 다양한 공략, 자유로운 질문과 소통, <br />
          그리고 여러분의 자랑까지!<br />
          메이플을 사랑하는 모든 분들이 함께 정보를 나누고 즐길 수 있는 공간을 만들고자 합니다.
        </p>
        <ul>
          <li><b>기본</b>: 메이플의 기초와 필수 정보</li>
          <li><b>공략</b>: 레벨업, 보스, 직업별 공략 등 실전 팁</li>
          <li><b>일반</b>: 자유로운 질문과 커뮤니티 소통</li>
          <li><b>자랑</b>: 나만의 기록, 아이템, 추억 등 자랑 게시판</li>
        </ul>
        <p>
          앞으로도 꾸준히 발전하는 블로그가 되겠습니다.<br />
          많은 관심과 참여 부탁드립니다!
        </p>
        <p>감사합니다.<br />- 임도혁 드림</p>
      </div>
    </div>
  );
} 