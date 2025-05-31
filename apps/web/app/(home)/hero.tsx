import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
	return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`min-h-screen box-border lg:min-h-[50rem] lg:px-10 lg:pt-36 lg:pb-30 xl:px-20`}
    >
      <div className="block pt-32 h-full px-5 lg:px-0 lg:pt-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        <div className="flex flex-col gap-6 text-center pb-10 justify-end box-border md:w-full md:px-20 md:gap-6 lg:gap-6 lg:w-1/2 lg:px-0 lg:h-[45vh] lg:pb-0 lg:justify-normal lg:pt-48 xl:px-0 xl:pr-20 xl:justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-5xl lg:text-[56px]/[1] font-bold text-dark"
          >
            Organize Your Job Hunt, Effortlessly.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-foreground mb-6 mx-2 lg:mx-5"
          >
            Ditch the spreadsheets. Stay organized and never miss a follow-up again with JobNest —
            your smart job application tracker.
          </motion.p>

          <div className="flex gap-4 mx-5 md:w-full md:justify-center text-nowrap">
            <Button className="" variant="primary" label="Start for Free" onClick={() => {}} />

            <Button className="" variant="text" label="How It Works" onClick={() => {}} />
          </div>
        </div>

        <div className="md:w-full md:px-10 lg:w-1/2 lg:px-0 xl:pl-5 xl-pr-0">
          <div className="pl-8 h-60 md:w-full md:pl-12 md:h-[30rem] lg:w-full lg:h-[32.5rem] lg:pl-10 xl:pl-7 xl:pr-0">
            <Image
              src="/image-2.jpg"
              alt="background image 2"
              width={560}
              height={520}
              className="w-full h-full"
            ></Image>
          </div>

          <div className="top-[31rem] w-[12.6rem] h-52 left-8 md:w-[24.5rem] md:h-[28.5rem] md:top-[29.5rem] md:left-16 lg:h-[29rem] lg:w-[21rem] lg:top-[16.5rem] lg:left-[34.5rem] z-10 absolute lg:bg-primary/10 backdrop-blur-sm xl:h-[26rem] xl:top-[37%] xl:left-[53.5%]"></div>

          <div className="absolute top-[32rem] md:top-[31rem] md:w-[24.5rem] md:h-[28.5rem] lg:h-[28.5rem] lg:w-[21rem] lg:top-72 lg:left-[33.4rem] xl:h-[26rem] xl:top-72 xl:left-[47rem] z-10">
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
