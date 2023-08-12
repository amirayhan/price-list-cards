import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "John", physics: 85, chemistry: 78, math: 92 },
        { id: 2, name: "Alice", physics: 76, chemistry: 90, math: 88 },
        { id: 3, name: "Bob", physics: 92, chemistry: 85, math: 70 },
        { id: 4, name: "Emily", physics: 68, chemistry: 72, math: 85 },
        { id: 5, name: "Michael", physics: 91, chemistry: 82, math: 95 },
        { id: 6, name: "Sophia", physics: 78, chemistry: 92, math: 88 },
        { id: 7, name: "William", physics: 85, chemistry: 76, math: 81 },
        { id: 8, name: "Olivia", physics: 93, chemistry: 88, math: 75 },
        { id: 9, name: "James", physics: 70, chemistry: 60, math: 45 },
        { id: 10, name: "Emma", physics: 87, chemistry: 91, math: 89 },
        { id: 11, name: "Liam", physics: 78, chemistry: 85, math: 93 },
        { id: 12, name: "Ava", physics: 65, chemistry: 73, math: 80 },
    ];
    return (
        <div>
            <LineChart width={800} height={500} data={marksArray} margin={{ top: 50, left: 50, right: 50, bottom: 50 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="physics" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="chemistry" stroke="red" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="math" stroke="blue" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Dashboard;
