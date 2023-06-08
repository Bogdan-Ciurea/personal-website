"use client";

import { useState } from "react";
import { robotoMono } from "../data";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Grade, Module, Year, years } from "../data";
import { motion } from "framer-motion";

const displayGrade = ({ grade }: { grade: Grade }) => {
  return (
    <div
      key={grade.name}
      className="flex flex-row justify-between items-center px-4 py-2"
    >
      <h2
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[12px] lg:text-[14px] xl:text-[16px]`}
      >
        {grade.name}
      </h2>
      <div className="flex-grow" />
      <h2
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[12px] lg:text-[14px] xl:text-[16px]`}
      >
        {grade.grade}%
      </h2>
    </div>
  );
};

const displayModule = ({ module }: { module: Module }) => {
  const finalGrade = Math.round(
    module.grades.reduce((acc, grade) => {
      return acc + grade.grade * (grade.weight / 100);
    }, 0)
  );

  return (
    <div
      key={module.name}
      className=" bg-gray-200 rounded-[25px] my-[20px] shadow-md hover:drop-shadow-xl transition-all"
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-4 py-2 bg-sky-800 rounded-t-[20px] text-white">
        <h2
          className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[18px] lg:text-[20px] xl:text-[22px]`}
          style={{ fontWeight: 300 }}
        >
          {module.name}
        </h2>
        <div className="flex-grow" />
        <h2
          className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[14px] lg:text-[16px] xl:text-[18px]`}
        >
          {finalGrade}%
        </h2>
      </div>
      {/* Line */}
      <hr className="border-gray-300" />
      {/* Grades */}
      <div className="flex flex-col">
        {module.grades.map((grade) => {
          return displayGrade({ grade });
        })}
      </div>
    </div>
  );
};

const displayYear = ({ year }: { year: Year }) => {
  // Calculate the year's grade
  const yearGrade = Math.round(
    year.modules.reduce((acc, module) => {
      // Calculate the module's grade
      const moduleGrade = Math.round(
        module.grades.reduce((acc, grade) => {
          return acc + grade.grade * (grade.weight / 100);
        }, 0)
      );

      // Calculate the module's credits
      const moduleCredits = module.credits;

      // Calculate the module's weighted grade
      const moduleWeightedGrade = moduleGrade * (moduleCredits / 120);

      // Add the module's weighted grade to the year's grade
      return acc + moduleWeightedGrade;
    }, 0)
  );

  const [viewModules, setViewModules] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "50%" },
  };

  return (
    <div
      key={year.name}
      className="flex flex-col border border-gray-300 rounded-md shadow-md mb-4"
    >
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <h2
          className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[24px] lg:text-[32px] xl:text-[36px]`}
        >
          {year.name}
        </h2>
        <div className="flex-grow" />
        <h2
          className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[24px] lg:text-[32px] xl:text-[36px]`}
        >
          {yearGrade}%
        </h2>
        <button
          className="flex flex-row items-center justify-center ml-4 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
          onClick={() => setViewModules(!viewModules)}
        >
          {viewModules ? (
            <BsChevronUp className="w-6 h-6 hover:text-gray-800 hover:drop-shadow-lg" />
          ) : (
            <BsChevronDown className="w-6 h-6 hover:text-gray-800 hover:drop-shadow-lg" />
          )}
        </button>
      </div>
      <motion.div
        className={viewModules ? "" : "hidden"}
        animate={viewModules ? "open" : "closed"}
        variants={variants}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className=" max-w-[90%] mx-auto">
          {year.modules.map((module) => {
            return displayModule({ module });
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default function Page() {
  return (
    <main>
      <h1
        className={`${robotoMono.variable} font-roboto-mono font-weight-400 text-[36px] lg:text-[46px] xl:text-[54px] text-center py-[50px]`}
        style={{ fontWeight: 300 }}
      >
        Grades
      </h1>

      <div className="w-[1040px] max-w-[90%] mx-auto">
        {years.map((year) => {
          return displayYear({ year });
        })}
      </div>
    </main>
  );
}
