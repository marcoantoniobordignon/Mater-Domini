type BarProps = {
  value: number;
  max: number;
  color: string;
  bg: string;
  small?: boolean;
};

export function Bar({ value, max, color, bg, small }: BarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 text-right text-sm">
        {value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
      </span>

      <div className={`w-full ${bg} ${small ? "h-3" : "h-6"} overflow-hidden`}>
        <div
          className={`${color} ${small ? "h-3" : "h-6"} transition-all duration-700 ease-out`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}