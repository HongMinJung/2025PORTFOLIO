"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-20 scroll-snap-start">
      <div className="h-full container mx-auto flex flex-col items-center justify-between space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        {/* 프로필 박스 */}
        <div className="w-full p-20 mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-4 bg-white/80 dark:bg-[#23262B]/80 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
          {/* 프로필 이미지 */}
          <div
            style={{ aspectRatio: "3/4" }}
            className="w-full max-w-xs md:w-1/3 md:max-w-md relative dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
          >
            <Image
              src="/images/profile.jpg"
              alt="프로필이미지"
              fill
              className="object-cover"
            />
          </div>
          {/* 프로필 텍스트 */}
          <div className="flex-1 flex flex-col justify-center py-10 md:p-10 bg-primary-100/80 dark:bg-secondary-100/20 rounded-xl shadow-md  border border-gray-200 dark:border-gray-700">
            {/* 첫번째 카드 */}
            <div className="flex flex-col justify-between gap-10 h-full p-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-600 ">
                Who <span className="text-2xl">am</span>
                <br />
                Min Jung?
                <hr className="border-gray-400 dark:border-gray-200 mt-20" />
              </h2>
              <ul className="text-md md:text-2xl text-gray-700 dark:text-gray-200 font-medium space-y-6 px-10">
                <li className="flex items-center gap-2">
                  <span className="font-medium w-[100px]">
                    이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름
                  </span>
                  <p className="font-semibold">홍민정</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium w-[100px]">생년월일</span>
                  <p className="font-semibold">1999.04.15</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium w-[100px]">전화번호</span>
                  <p className="font-bold">010.5964.1504</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium w-[100px]">
                    주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소
                  </span>
                  <p className="font-semibold">
                    서울특별시 중랑구
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium w-[100px]">
                    메&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일
                  </span>
                  <p className="font-semibold">hminjung99@gmail.com</p>
                </li>
              </ul>
              <button className="border-2 border-[#23262B] dark:border-gray-400 px-6 py-3 text-xl font-bold tracking-wide hover:bg-[#23262B] hover:text-white dark:hover:bg-gray-200 dark:hover:text-[#23262B] transition-all duration-200 w-fit flex items-center gap-2 rounded-lg">
                이력서 다운로드
                <ArrowRight className="w-24 h-24" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
