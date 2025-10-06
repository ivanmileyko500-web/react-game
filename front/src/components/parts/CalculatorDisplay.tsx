import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
  value: number | string;
  fontSize?: number; // in pixels
  maxLength: number;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  value,
  maxLength,
}) => {
  // Преобразуем значение в строку и обрезаем, если оно длиннее maxLength
  let displayValue = String(value).replace(/[^0-9.-]/g, ''); // Только цифры, точка и минус
  if (displayValue.length > maxLength) {
    displayValue = displayValue.slice(-maxLength); // Обрезаем справа, если переполнение
  }

  // Дополняем слева нулями до maxLength
  const paddedValue = displayValue.padStart(maxLength, '0');

  return (
    <div
      className="calculator-display"
    >
      {paddedValue}
    </div>
  );
};

export default CalculatorDisplay;