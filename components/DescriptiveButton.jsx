import React from 'react'
import styles from "@/styles";

export default function DescriptiveButton({ textBig, text, buttonText, buttonUrl, isButtonDisabled }) {
    return (
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
            {textBig && <p className='font-bold text-3xl lg:text-5xl mt-20'>{textBig}</p>}
            {text && <p className='font-bold text-2xl lg:text-4xl mt-10'>{text}</p>}
            {buttonText && <button href={buttonUrl} disabled={isButtonDisabled} className="bg-brand-red px-3 py-2 text-white font-bold text-2xl rounded-full text-center">{buttonText}</button>}
        </div>
    )
}
