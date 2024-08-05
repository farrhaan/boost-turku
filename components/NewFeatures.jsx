import styles from '../styles';

const NewFeatures = ({ title, description }) => (
  <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}</h2>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{description}</p>
  </div>
);

export default NewFeatures;
