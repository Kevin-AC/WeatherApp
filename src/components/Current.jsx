function Current ({ windKph, humidity }) {
  return (
    <section className='text-textWhite hidden xl:flex flex-col xl:text-xl xl:items-start xl:justify-center xl:pl-24'>
      <p>Humidity:<span>{humidity}%</span> </p>
      <p>Wind Speed:<span>{windKph}Km/h</span></p>
    </section>

  )
}
export default Current
