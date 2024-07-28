import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[10px] h-[10px] rounded-[24px] bg-brand-grey`}>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
