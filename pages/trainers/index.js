import React from "react";

function Trainer() {
  return (
    <>
      <section class="text-gray-600 body-font p-4">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-1/2 m-auto mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-500 ">
              Meet Your Gym Trainer
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed lg:text-sm text-[10px] text-slate-300 text-normal">
              We Help you to live a Healthier Lifestyle
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative transform">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://api.dicebear.com/5.x/personas/svg?clothingColor=6dbb58,54d7c7,456dff"
                />
                <div class="h-80 px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transform duration-300">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Strength Training
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Sarah Smith
                  </h1>
                  <p class="leading-relaxed lg:text-sm text-[10px]">
                    Sarah is a certified personal trainer with over 10 years of
                    experience in strength training. She has worked with clients
                    of all ages and fitness levels, helping them to build
                    muscle, increase endurance, and improve overall physical
                    health. Sarah's training sessions focus on weightlifting,
                    resistance training, and functional movements to help
                    clients achieve their fitness goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://api.dicebear.com/5.x/personas/svg?clothingColor=456dff"
                />
                <div class="h-80 px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transform duration-300">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Cardiovascular Training
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    John Davis
                  </h1>
                  <p class="leading-relaxed lg:text-sm text-[10px]">
                    John is a certified fitness instructor with expertise in
                    cardiovascular training. He specializes in designing
                    high-intensity interval training (HIIT) programs that are
                    tailored to each individual client's fitness level and
                    goals. John's workouts are designed to improve
                    cardiovascular endurance, burn calories, and increase
                    overall fitness.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://api.dicebear.com/5.x/personas/svg?clothingColor=fff000"
                />
                <div class="h-80 px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transform duration-300">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Yoga and Pilates
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Maria Rodriguez
                  </h1>
                  <p class="leading-relaxed lg:text-sm text-[10px]">
                    Maria is a certified yoga and Pilates instructor with over 8
                    years of experience teaching clients of all ages and fitness
                    levels. She believes in the power of mindful movement to
                    promote physical and mental health. Her yoga and Pilates
                    classes are designed to improve flexibility, core strength,
                    balance, and mental focus.
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://api.dicebear.com/5.x/personas/svg?clothingColor=0fff00"
                />
                <div class="h-80 px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0  hover:opacity-100 transform duration-300">
                  <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Sports-Specific Training
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Mike Johnson
                  </h1>
                  <p class="leading-relaxed lg:text-sm text-[10px]">
                    Mike is a certified athletic trainer with expertise in
                    sports-specific training. He has worked with athletes of all
                    ages and skill levels, helping them to improve their
                    performance in a variety of sports, including football,
                    basketball, soccer, and tennis. Mike's training sessions
                    focus on improving strength, speed, agility, and endurance,
                    as well as injury prevention and rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainer;
