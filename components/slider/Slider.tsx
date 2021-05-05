import { calculatePercentage } from "../../utils/math";

export type SliderProps = {
  value: number;
  max: number;
  onChange: (newValue: number) => void;
};

function Slider({ value, max, onChange }: SliderProps) {
  const percentage = calculatePercentage(value, max);
  return (
    <label>
      Progress
      <input
        type="text"
        min={0}
        max={max}
        value={value}
        onChange={(event) => onChange(+event.target.value)}
      />
      <span>{percentage}</span>
    </label>
  );
}

export default Slider;
