import styled from 'styled-components';
import { AnimatedSwitch, spring } from 'react-router-transition';

const glide = (val: number) =>
  spring(val, {
    stiffness: 250,
    damping: 33,
  });

const mapStyles = (styles: any) => ({
  transform: `translateX(${styles.offset}%)`,
});

export const SwitchTransition = styled(AnimatedSwitch).attrs(() => ({
  atEnter: { offset: 100 },
  atLeave: { offset: glide(-100) },
  atActive: { offset: glide(0) },
  mapStyles,
}))`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  > div {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
`;
