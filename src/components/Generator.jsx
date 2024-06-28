import { React, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title} </h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goals,
    setGoals,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'Clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      ></Header>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((value, index) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(value);
              }}
              className={
                "bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (value === poison ? " border-blue-600" : " border-blue-400")
              }
              key={index}
            >
              <p className="capitalize">{value.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      ></Header>
      <div className="bg-slate-950 border border-solid border-blue-900 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length === 0
              ? "Select muscles groups"
              : muscles.join(", ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGroup) ? " text-blue-400" : " ")
                  }
                  key={muscleGroupIndex}
                >
                  <p className="uppercase ">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      ></Header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((value, index) => {
          return (
            <button
              onClick={() => {
                setGoals(value);
              }}
              className={
                "bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (value === goals ? " border-blue-600" : " border-blue-400")
              }
              key={index}
            >
              <p className="capitalize">{value.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  );
}
