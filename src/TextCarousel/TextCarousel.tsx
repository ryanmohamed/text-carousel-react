import { useState, useRef, Key } from "react";
import styles from "./TextCarousel.module.css";

type RowProps = {
  values: String[];
  duration: number;
};
const Row = ({ values, duration, ...props }: RowProps) => {
  const [elements, setElements] = useState<String[]>([...values]);
  const containerRef = useRef<HTMLUListElement>(null);

  const shiftRow = () => {
    const firstItem = containerRef?.current?.children[0] as HTMLLIElement;
    const firstItemWidth = Math.floor(firstItem?.offsetWidth) || 0;

    // apply transition to animate scroll
    containerRef?.current?.style?.setProperty(
      "transition",
      `${duration * (firstItemWidth / 400)}ms`
    );

    // scroll
    containerRef?.current?.style.setProperty(
      "transform",
      `translateX(-${firstItemWidth}px)`
    );

    // wrap first element and remove transition for seamlessness
    containerRef?.current?.addEventListener("transitionend", () => {
      containerRef?.current?.appendChild(firstItem);
      containerRef?.current?.style?.setProperty("transition", "none");
      containerRef?.current?.style.setProperty("transform", `translateX(0)`);
    });
  };

  setInterval(shiftRow, duration);

  return (
    <ul className={styles.row} ref={containerRef}>
      {elements.map((value: String, key: Key) => (
        <li key={key}>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

interface TextCarouselProps {
  duration?: number | null | undefined;
  durations?: [number, number, number, number] | null | undefined;
  display: [String[], String[], String[], String[]];
}

const TextCarousel = (props: TextCarouselProps) => {
  const { duration, durations, display } = props;
  return (
    <section className={styles.carousel}>
      <Row
        values={display[0]}
        duration={durations ? durations[0] : duration ? duration * 1 : 1000}
      />
      <Row
        values={display[1]}
        duration={durations ? durations[1] : duration ? duration * 0.8 : 800}
      />
      <Row
        values={display[2]}
        duration={durations ? durations[2] : duration ? duration * 1.2 : 1200}
      />
      <Row
        values={display[3]}
        duration={durations ? durations[3] : duration ? duration * 0.9 : 900}
      />
    </section>
  );
};

export default TextCarousel;
