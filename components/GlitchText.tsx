interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlitchText({ text, className = "", style }: Props) {
  return (
    <span className={`glitch-text ${className}`} data-text={text} style={style}>
      {text}
    </span>
  );
}
