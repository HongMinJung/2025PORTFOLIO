"use client";

import { Button } from "@/components/ui/Button/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, Menu, ArrowRight, MoveDown } from "lucide-react";
import { useState } from "react";

export function Hero({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={cn(
        "relative mx-auto container h-screen flex flex-col pt-80 pb-20",
        className
      )}
    >
      <div className="flex flex-col justify-between h-full">
        {/* top 텍스트 */}
        <div className="flex justify-end">
          <div className="flex flex-col items-center gap-1">
            <div className="font-extrabold text-4xl tracking-widest">2025</div>
            <div className="text-xs tracking-widest mt-[-4px]">DEVELOPER</div>
            <div className="text-xs tracking-widest mt-[-4px]">
              PORTFOLIO STIE
            </div>
          </div>
        </div>

        {/* middle 텍스트 */}
        <div className="flex flex-row justify-between items-center">
          {/* 좌측 텍스트 */}
          <div className="flex flex-col justify-center gap-8">
              <p className="text-lg mb-2 ml-1">안녕하세요.</p>
              <h1 className="text-5xl font-extrabold leading-tight mb-2 space-x-2">
                신입 개발자
                <br />
                HONG MINJEONG
                <span className="text-sm font-normal ">입니다.</span>
              </h1>
          </div>
          {/* 별점 소개 텍스트 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-end">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-20 h-20 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="text-xs mt-1">오늘도 저는</div>
              <div className="text-lg font-bold text-right">
                "디자인의 감각을
                <br />
                코드로 구현합니다."
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-20 h-20 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="text-xs mt-1">오늘도 저는</div>
              <div className="text-lg font-bold text-right">
                "끊임없이 고민하고
                <br />
                배우며 성장합니다."
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-20 h-20 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="text-xs mt-1">오늘도 저는</div>
              <div className="text-lg font-bold text-right">
                "커뮤니케이션을
                <br />
                중요하게 생각합니다."
              </div>
            </div>
          </div>
        </div>

        {/* bottom 텍스트 */}
        <div className="flex flex-row justify-between items-end">
          {/* bottom 좌측 텍스트 */}
          <div className="text-xs space-y-1">
            <div className="flex gap-4">
              <span className="w-64">STATUS</span>
              <span>JUNIOR</span>
            </div>
            <div className="flex gap-4">
              <span className="w-64">POSITION</span>
              <span>FULL STACK DEVELOPER</span>
            </div>
          </div>
          {/* bottom 스크롤 안내 메시지 */}
          <div className="flex flex-col items-center text-sm animate-bounce pointer-events-none select-none">
            <p>SCROLL DOWN</p>
            <MoveDown className="w-20 h-20" />
          </div>

          {/* bottom 우측 버튼 */}
          <div>
            <Button
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg bg-transparent text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => setShowModal(true)}
            >
              CONTACT
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 상세 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white text-black rounded-xl p-8 max-w-lg w-full relative shadow-2xl">
            <button
              className="absolute top-4 right-4 hover:bg-gray-200 rounded-full p-1 transition"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Outsider Freud</h2>
            <p className="mb-2">감독: Yair Qedar</p>
            <p className="mb-2">연도: 2025</p>
            <p className="mb-4">카테고리: Documentary</p>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                닫기
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
