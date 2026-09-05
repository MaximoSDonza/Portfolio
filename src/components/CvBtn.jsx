import React from 'react'

const CvBtn = ({CV_URL}) => {
  return (
    <a
        href={CV_URL}
        download="CV-Maximo-Donza.pdf"
        className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 dark:border-indigo-400 text-blue-600 dark:text-indigo-400 px-6 py-3 font-semibold hover:bg-blue-600 hover:text-blanco dark:hover:bg-indigo-400 dark:hover:text-negro transition-colors"
    >
        <span className="material-symbols-outlined text-[20px] leading-none">download</span>
        CV
    </a>
  )
}

export default CvBtn