import { useHoverInteraction } from '../hooks/useHoverInteraction';

export const StackedBars = ({
  data,
  barWidth,
  yScale,
  trialId,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  barWidth: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yScale: any;
  trialId: string;
}) => {
  const { handleMouseEnter, handleMouseLeave } =
    useHoverInteraction(trialId);

  return (
    <g>
      {data.map((d, i) => (
        <rect
          key={i}
          x={barWidth / 2}
          y={yScale(d[0][1])}
          width={barWidth}
          height={yScale(d[0][0]) - yScale(d[0][1])}
          fill="transparent"
          stroke="currentColor"
          onMouseEnter={() => handleMouseEnter({name: d.key})}
          onMouseLeave={() => handleMouseLeave({name: d.key})}
        />
      ))}
    </g>
  );
};
