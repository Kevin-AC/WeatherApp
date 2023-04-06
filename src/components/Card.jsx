import React, { useState } from 'react'

function Card ({ name, temp, condition, timeZone, date, country, dayNight, icon, onButtonClick }) {
  const [inputValue, setInputValue] = useState('')
  const handleClick = () => {
    onButtonClick(inputValue)
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleClick()
  }

  return (
    <section className='text-textWhite  p-4 flex flex-col justify-center items-center text-center gap-2 xl:gap-0 xl:items-start xl:pl-24 relative'>
      <div className='w-full flex justify-center '>
        <form onSubmit={handleSubmit} className='relative'>
          <input
            className='rounded-xl w-64 h-8 p-4 text-text2 placeholder:text-sm outline-none relative bg-gradient-to-l from-bg1 to-bg2 '
            placeholder='search'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type='submit'
            className='absolute top-0 bottom-0 m-auto right-2'
          >
            <img src='/icons/search.png' alt='search' />
          </button>
        </form>
      </div>
      <div className='flex gap-1 mt-4 mb-4'>
        <img src='/icons/other/locate.svg' alt='location' />
        <h1 className='text-xl xl:text-3xl'>{name}/{country}</h1>
      </div>

      <article className='flex flex-col gap-7 items-center xl:items-start xl:gap-1 xl:mb-4  '>
        <div className='flex gap-1 justify-center items-center'>
          <img src={`icons/${dayNight}/113.svg`} className='w-16' alt='day/night_icon' />
          <p className='textTemp xl:text-4xl xl:text-textWhite xl:font-normal'>{temp}<span>ºC</span></p>
        </div>
        <div className='flex flex-col items-center gap-5 xl:flex-row-reverse xl:gap-3'>
          {name && <img src={`icons/${dayNight}/${icon}.svg`} className='w-32 xl:w-12 ' alt='tempIcon' />}
          <h2 className='text-2xl tracking-widest xl:text-3xl '>{condition}</h2>
        </div>
      </article>
      <aside className='flex flex-col  text-sm mt-4 tracking-widest xl:hidden'>
        <span>{timeZone}</span>
        <p>{date}</p>
      </aside>

    </section>
  )
}
export default Card
