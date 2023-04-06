function Days ({ date, avgtempC, icon, dayNight }) {
  return (
    <section className={`days ${dayNight === 'night' ? 'bg-Night' : ''}`}>
      <p className='font-bold text-lg'>{date}</p>
      <img src={`icons/${dayNight}/${icon}.svg`} width={30} alt='temIocn' />
      <p>{avgtempC}ºC</p>
    </section>
  )
}
export default Days
