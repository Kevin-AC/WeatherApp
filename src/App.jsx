import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Current from './components/Current'
import Days from './components/Days'
const option = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6f04666531msh476b0c0d08600a1p12042ejsnafd600cb405c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

function formatDate (dateString) {
  const date = new Date(dateString)
  const options = { day: '2-digit', month: 'short' }
  return date.toLocaleDateString('en-US', options)
}

function App () {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = (value) => {
    setSearchValue(value)
  }
  const WeatherApi = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchValue}&days=3`
  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(WeatherApi, option) // './data.json' //WeatherApi, option
        const responseData = await response.json()
        setData(responseData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [searchValue])
  // Determine if it's day or night
  const isDay = data?.current?.is_day
  const ruteIcon = isDay ? 'day' : 'night'
  // Get current icon
  const currentIcon = data?.current?.condition?.icon
  const currentIconNumber = currentIcon?.split('/').pop().slice(0, -4)
  // Get icons for forecast days
  const forecastIcons = data?.forecast?.forecastday?.map(day => {
    const icon = day?.day?.condition?.icon
    return icon?.split('/').pop().slice(0, -4)
  })

  // console.log(searchValue)

  const items = data?.forecast?.forecastday

  const timezone = data?.location?.tz_id
  const localTime = new Date().toLocaleString('en-US', { timeZone: timezone })

  return (
    <main className='w-screen grid place-items-center'>
      <section className={`app ${ruteIcon === 'night' ? 'bg-Night' : ''}`}>
        <img className='hidden xl:block absolute right-16 top-5 w-64' src='/icons/day/113.svg' alt='sunIcon' />
        <div className='w-screen xl:max-w-5xl  xl:p-7 xl:h-96 xl:flex xl:flex-col xl:rounded-[60px] xl:justify-center xl:bg-gradient-to-l from-bg1 to-bg2'>
          <Card
            name={data?.location?.name}
            dayNight={ruteIcon}
            icon={currentIconNumber}
            country={data?.location?.country}
            temp={data?.current?.temp_c}
            condition={data?.current?.condition?.text}
            timeZone={timezone}
            date={formatDate(localTime)}
            onButtonClick={handleSearch}
          />
          <Current
            windKph={data?.current?.wind_kph}
            humidity={data?.current?.humidity}
          />
        </div>
      </section>
      <section className='flex gap-5 xl:hidden'>
        {items && items.map((item, index) => (
          <Days
            key={index}
            date={item.date.slice(8)}
            avgtempC={item.day.avgtemp_c}
            dayNight={ruteIcon}
            icon={forecastIcons[index]}
          />
        ))}

      </section>

    </main>

  )
}
export default App

// si  "is_day":0, es de doche
// si  "is_day":1 es de dia
// hacer condicional para cambio de tema
