import React from "react";

function Schedule() {
  return (
    <>
      <div className="flex flex-col justify-end  h-screen">
        <div className="overflow-auto scrollbar-track-black scrollbar-thumb-blue-500 scrollbar-thin  h-[90%] sm:mx-0.5 lg:mx-0.5 mb-2">
          <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto">
                <thead className="bg-orange-500 border-b">
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-3 text-left"
                    >
                      Day
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-3 text-left"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-3 text-left"
                    >
                      Activity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-3 text-left"
                    >
                      Instructor
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Monday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      6:00 AM - 7:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Spin className
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Barre
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      5:30 PM - 6:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Powerlifting
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mark
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 PM - 8:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>

                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Tuesday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 AM - 8:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Bootcamp
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Barre
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      5:30 PM - 6:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Powerlifting
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mark
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 PM - 8:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Wednesday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      6:00 AM - 7:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Spin className
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      9:00 AM - 10:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Pilates
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      5:30 PM - 6:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Cardio Kickboxing
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mark
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 PM - 8:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Zumba
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Maria
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Thursday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 AM - 8:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Bootcamp
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Barre
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      5:30 PM - 6:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Powerlifting
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mark
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      7:00 PM - 8:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Friday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      6:00 AM - 7:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Spin className
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      9:00 AM - 10:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Pilates
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      5:30 PM - 6:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Cardio Kickboxing
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mark
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Saturday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      9:00 AM - 10:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Bootcamp
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      10:30 AM - 11:30 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      12:00 PM - 1:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Pilates
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sarah
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Sunday
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      10:00 AM - 11:00 AM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Spin className
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Mike
                    </td>
                  </tr>
                  <tr className="bg-gray-800/[0.5] hover:bg-orange-600 border-b">
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap"></td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      11:30 AM - 12:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Yoga
                    </td>
                    <td className="text-sm text-white font-light px-6 py-3 whitespace-nowrap">
                      Jane
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
