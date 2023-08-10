import React, { FC, useEffect, useRef, useState } from 'react';
import BaseView from '../base-view/BaseView';
import { CircleTimerProps } from './CircleTimer.interface';

const CircleTimer: FC<CircleTimerProps> = (props) => {
  const { count, onTimesUp } = props;
  const circleRef = useRef<SVGCircleElement>(null);
  let timer: ReturnType<typeof setInterval> | null = null;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [counter, setCounter] = useState<number>(count);

  useEffect(() => {
    if (counter <= 0) {
      timer && clearInterval(timer);
      setCounter(0);
      circleRef!.current!.style.animationPlayState = 'paused';
      circleRef!.current!.style.visibility = 'hidden';
      onTimesUp();
    }
  }, [counter]);

  useEffect(() => {
    timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <BaseView className={'base-circle-timer'}>
      <svg>
        <circle
          ref={circleRef}
          style={{ animation: `countdown ${count}s linear infinite forwards` }}
          r='18'
          cx='20'
          cy='20'
        ></circle>
      </svg>
    </BaseView>
  );
};

export default CircleTimer;
