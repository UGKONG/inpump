import styled from 'styled-components/native';

type Props = {
  percent: number;
  width?: number;
  height: number;
  border?: string;
  color?: string;
};

export default function ProgressBar({
  percent,
  width,
  height,
  border,
  color,
}: Props) {
  return (
    <Container border={border} width={width} height={height}>
      <Bar percent={percent} color={color} />
    </Container>
  );
}

const Container = styled.View<{
  width?: number;
  height: number;
  border?: string;
}>`
  ${x => (x?.width ? 'max-width: ' + x?.width + 'px;' : '')}
  flex: 1;
  min-height: 10px;
  max-height: ${x => x?.height}px;
  border-radius: 100px;
  overflow: hidden;
  border: 1px solid ${x => x?.border ?? '#eee'};
`;
const Bar = styled.View<{percent: number; color?: string}>`
  height: 100%;
  width: ${x => x?.percent ?? 0}%;
  background-color: ${x => x?.color ?? '#343434'};
`;
