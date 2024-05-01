import React, { useState } from "react";


const Table = () => {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
  ])

const HandleClickYes = (itemId) => {
  console.log('Yes clicked for item id:', itemId);

}
const HandleClickNo = (itemId) => {
  console.log('No clicked for item id:', itemId);

}

  const data = [
    {
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet.",
      time: "10:00 AM",
      action: "yes/no",
      status: "Pending",
    },
    {
      name: "Jane Doe",
      details: "Consectetur adipiscing elit.",
      time: "11:00 AM",
        action: "yes/no",
      status: "Approved",
    },
    {
      name: "Michael Smith",
      details:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    time: "12:00 PM",
      action: "yes/no",
      status: "Rejected",
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-[#0055A5] text-white">
          <th className="px-4 py-2 font-bold text-left">Name</th>
          <th className="px-4 py-2 font-bold text-left">Details</th>
          <th className="px-4 py-2 font-bold text-center">Time</th>
          <th className="px-4 py-2 font-bold text-center">Action</th>
          <th className="px-4 py-2 font-bold text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td className="px-4 py-2 border-b border-gray-200 text-gray-700">
              {item.name}
            </td>
            <td className="px-4 outline py-2 border-b border-gray-200 text-gray-700">
              {item.details}
            </td>
            <td className="px-4 py-2 border-b border-gray-200 text-center text-gray-700">
              {item.time}
            </td>
            <td className="px-4 py-2 border-b border-gray-200 text-center text-gray-700">
              {item.action}
            </td>
            <td className="px-4 py-2 border-b border-gray-200 text-center text-gray-700">
              {item.status}
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default Table;
