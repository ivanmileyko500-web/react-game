import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function BarChartComponent ({ dataToDisplay, loadTime, preload, style }) {
        const [activeIndex, setActiveIndex] = useState(0);
        setTimeout(() => {
            setActiveIndex(1);
        }, loadTime);
        return (
                <div style={style}>
                        {activeIndex ?
                        <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dataToDisplay}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Bar dataKey="true" fill="#82ca9d"/>
                                        <Bar dataKey="false" fill="#ca8282ff"/>
                                        <Bar dataKey="difference" fill="#8884d8"/>
                                </BarChart>
                        </ResponsiveContainer>
                        : preload}
                </div>
        );
};
