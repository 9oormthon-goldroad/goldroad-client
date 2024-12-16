'use client';
import { useEffect, useRef } from 'react';

const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="[^"]+"/g;
  const replacement = `fill="${newColor}"`;
  return svgString.replace(regex, replacement);
};

interface IconProps {
  name: string;
  width: number;
  height: number;
  color?: string;
}

const Icon = ({ name, width, height, color, ...props }: IconProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = async () => {
      const svg = await import(`./${name}.svg`);
      if (!svgRef.current) return;
      svgRef.current.innerHTML = color ? replaceColor(svg.default, color) : svg.default;
    };
    svgElement();
  }, [name, color]);

  return <svg width={width} height={height} ref={svgRef} {...props} />;
};

export default Icon;
