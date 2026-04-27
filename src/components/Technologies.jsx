import { RiReactjsLine } from "react-icons/ri";
import { SiNestjs, SiJest } from "react-icons/si";
import { FaLaravel, FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = {
  animate: {
    boxShadow: [
      "0px 6px 20px rgba(0, 186, 255, 0.4)",
      "0px 8px 24px rgba(0, 186, 255, 0.7)",
      "0px 6px 20px rgba(0, 186, 255, 0.4)",
    ],
    borderColor: [
      "rgba(0, 186, 255, 0.4)",
      "rgba(0, 186, 255, 0.8)",
      "rgba(0, 186, 255, 0.4)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const Technologies = () => {
  const { t } = useTranslation(); // ✅ CORRECTO (dentro del componente)

  return (
    <div className="border-b border-violet-950 pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">
        {t("technologies.title")}
      </h2>

      <motion.div className="flex flex-wrap items-center justify-center gap-6">

        {/* React */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(0, 186, 255, 0.4)", borderWidth: "3px" }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* NestJS */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(238, 65, 65, 0.5)", borderWidth: "3px" }}
        >
          <SiNestjs className="text-7xl text-rose-500" />
        </motion.div>

        {/* Jest */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(255, 140, 0, 0.5)", borderWidth: "3px" }}
        >
          <SiJest className="text-7xl text-amber-600" />
        </motion.div>

        {/* Laravel */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(255, 0, 83, 0.5)", borderWidth: "3px" }}
        >
          <FaLaravel className="text-7xl text-red-800" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(0, 117, 145, 0.4)", borderWidth: "3px" }}
        >
          <GrMysql className="text-7xl text-cyan-900" />
        </motion.div>

        {/* Docker */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={iconVariants}
          className="rounded-2xl p-6"
          style={{ borderColor: "rgba(0, 0, 216, 0.5)", borderWidth: "3px" }}
        >
          <FaDocker className="text-7xl text-sky-700" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;