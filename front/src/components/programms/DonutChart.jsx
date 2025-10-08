import './DounutChart.css';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

export default function DonutChart({ innerRadius, outerRadius, dataToDisplay, loadTime, preload, style }) {
  const [activeIndex, setActiveIndex] = useState(0);
  setTimeout(() => {
    setActiveIndex(1);
  }, loadTime);
  return (
    <div style={style}>
      {activeIndex ?
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataToDisplay}
            cx="50%"                    // позиция по горизонтали
            cy="50%"                    // позиция по вертикали
            labelLine={false}           // скрыть линии-указатели
            outerRadius={outerRadius}           // внешний радиус
            innerRadius={innerRadius}            // ВАЖНО: создаёт "дырку" — получаем кольцо!
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {dataToDisplay.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      : preload}
    </div>
    ); 
}