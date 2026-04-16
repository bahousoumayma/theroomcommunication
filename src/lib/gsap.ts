import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase, SplitText);
}

export { CustomEase, gsap, ScrollTrigger, SplitText, useGSAP };
