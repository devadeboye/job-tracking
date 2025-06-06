import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${styles.heroSection} box-border xl:px-20`}
    >
      <div
        className={`${styles.contentWrapper} block pt-[20%] h-full px-5 md:px-10 md:pt-[10%] lg:flex lg:flex-row lg:pt-0 lg:mt-[10%] lg:box-border lg:items-center lg:justify-center lg:gap-5 xl:px-0`}
      >
        {/* Text Container */}
        <div
          className={`${styles.textContainer} flex flex-col text-center justify-end box-border gap-8 md:w-full md:gap-10 lg:w-1/2 lg:justify-normal xl:px-0 xl:justify-end`}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`${styles.heroTitle} text-2xl flex items-end font-bold text-dark md:text-5xl lg:flex lg:text-[56px]/[1] lg:text-dark`}
          >
            Organize Your Job Hunt, Effortlessly.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-foreground flex items-center mx-2 md:mx-0 lg:flex lg:mx-5"
          >
            Ditch the spreadsheets. Stay organized and never miss a follow-up again with JobNest —
            your smart job application tracker.
          </motion.p>

          {/* Buttons */}
          <div className="flex items-start text-nowrap gap-4 mx-5 md:mx-0 md:w-full md:justify-center lg:flex">
            <Button className="h-12" variant="primary" label="Start for Free" onClick={() => {}} />
            <Button className="h-12" variant="text" label="How It Works" onClick={() => {}} />
          </div>
        </div>

        {/* Image Container */}
        <div
          className={`${styles.imageWrapper} relative h-[40.5svh] md:h-[50svh] md:w-full lg:relative lg:h-[50svh] lg:w-1/2 xl:h-[70svh] xl:pl-5 xl-pr-0`}
        >
          {/* Image 1 */}
          <div
            className={`${styles.mainImage} mt-[8%] pl-[8%] h-[31svh] md:mt-[4%] md:w-full md:pl-12 md:h-[40svh] lg:w-full lg:h-[35svh] lg:pl-10 lg:mt-[15%] xl:pl-7 xl:pr-0 xl:mt-0 xl:h-[55svh]`}
          >
            <Image
              src="/image-2.jpg"
              alt="background image 2"
              width={560}
              height={520}
              className="w-full h-full"
            />
          </div>

          {/* backdrop for image 2*/}
          <div
            className={`${styles.backdropImage} relative -top-3/5 left-[4%] w-[12.6rem] h-[26svh] md:-top-[64%] md:w-[57%] md:h-[68%] md:left-[3%] lg:relative lg:h-[63%] lg:w-[57%] lg:-top-[60%] lg:left-[5%] lg:bg-primary/10 backdrop-blur-sm xl:h-[63%] xl:-top-[60%] xl:left-[2%]`}
          ></div>

          {/* Image 2 */}
          <div
            className={`${styles.overlayImage} relative -top-[119%] w-[12.4rem] h-[26svh] z-10 md:-top-[135%] md:w-[24.5rem] md:h-[68%] lg:relative lg:h-[63%] lg:w-[57%] lg:-top-[120%] lg:left-[0%] xl:h-[63%] xl:-top-[120%] xl:left-[0%]`}
          >
            <Image
              src="/image-1.jpg"
              alt="background image 1"
              width={350}
              height={420}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
