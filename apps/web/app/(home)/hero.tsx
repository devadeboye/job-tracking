import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`box-border lg:h-[61rem] lg:px-10 lg:pt-36 lg:mb-0 lg:pb-30 xl:px-20 xl:pt-28`}
    >
      <div className="block pt-[20%] h-full px-5 md:px-10 md:pt-[10%] lg:px-0 lg:pt-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* Text Container */}
        <div className="flex flex-col h-[35.5svh] text-center justify-end box-border md:w-full lg:gap-6 lg:w-1/2 lg:px-0 lg:h-[45vh] lg:pb-0 lg:justify-normal lg:pt-48 xl:px-0 xl:pr-20 xl:justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl h-[35%] flex items-end md:text-5xl lg:block lg:text-[56px]/[1] font-bold text-dark"
          >
            Organize Your Job Hunt, Effortlessly.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-foreground h-[40%] flex items-center mx-2 md:mx-0 lg:block lg:mx-5"
          >
            Ditch the spreadsheets. Stay organized and never miss a follow-up again with JobNest —
            your smart job application tracker.
          </motion.p>

          <div className="flex h-1/4 items-start gap-4 mx-5 md:mx-0 md:w-full md:justify-center text-nowrap">
            <Button className="h-12" variant="primary" label="Start for Free" onClick={() => {}} />

            <Button className="h-12" variant="text" label="How It Works" onClick={() => {}} />
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-[40.5svh] md:h-[50svh] md:w-full lg:static lg:w-1/2 lg:px-0 xl:pl-5 xl-pr-0">
          {/* Image 1 */}
          <div className="mt-[8%] pl-[8%] h-[31svh] md:mt-[4%] md:w-full md:pl-12 md:h-[40svh] lg:w-full lg:h-[32.5rem] lg:pl-10 xl:pl-7 xl:pr-0">
            <Image
              src="/image-2.jpg"
              alt="background image 2"
              width={560}
              height={520}
              className="w-full h-full"
            ></Image>
          </div>

          {/* backdrop for image 2*/}
          <div className="relative -top-3/5 left-[4%] w-[12.6rem] h-[26svh] md:-top-[64%] md:w-[57%] md:h-[68%] md:left-[3%] lg:absolute lg:h-[29rem] lg:w-[21rem] lg:top-[16.5rem] lg:left-[34.5rem] lg:bg-primary/10 backdrop-blur-sm xl:h-[31rem] xl:top-[37%] xl:left-[53.5%]"></div>

          {/* Image 2 */}
          <div className="relative -top-[119%] w-[12.4rem] h-[26svh] z-10 md:-top-[135%] md:w-[24.5rem] md:h-[68%] lg:absolute  lg:h-[28.5rem] lg:w-[21rem] lg:top-72 lg:left-[33.4rem] xl:h-[31rem] xl:top-72 xl:left-[47rem]">
            <Image
              src="/image-1.jpg"
              alt="background image 1"
              width={350}
              height={420}
              className="h-full w-full"
            ></Image>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
