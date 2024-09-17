import React, {useState, useEffect} from 'react'
import './index.css'

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green')
  const [pedestrianRequested, setPedestrianRequested] = useState(false)
  const [emergencyOverride, setEmergencyOverride] = useState(false)
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    let timer
    if (emergencyOverride) {
      setCurrentLight('red')
      setCountdown(7)
      timer = setTimeout(() => {
        setEmergencyOverride(false)
        setCurrentLight('green')
        setCountdown(10)
      }, 7000)
    } else if (currentLight === 'green') {
      timer = setTimeout(() => {
        setCurrentLight('yellow')
        setCountdown(3)
      }, 10000)
    } else if (currentLight === 'yellow') {
      timer = setTimeout(() => {
        setCurrentLight('red')
        setCountdown(7)
      }, 3000)
    } else if (currentLight === 'red') {
      timer = setTimeout(() => {
        if (pedestrianRequested) {
          setPedestrianRequested(false)
        }
        setCurrentLight('green')
        setCountdown(10)
      }, 7000)
    }

    // Countdown timer for each light
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [currentLight, pedestrianRequested, emergencyOverride])

  const handlePedestrianRequest = () => {
    setPedestrianRequested(true)
  }

  const handleEmergencyOverride = () => {
    setEmergencyOverride(true)
  }

  return (
    <div className="traffic-light-system">
      <div className="traffic-light">
        <div className={`light ${currentLight === 'red' ? 'red' : ''}`}></div>
        <div
          className={`light ${currentLight === 'yellow' ? 'yellow' : ''}`}
        ></div>
        <div
          className={`light ${currentLight === 'green' ? 'green' : ''}`}
        ></div>
      </div>
      <div className="countdown">
        Time remaining: <span> {countdown} seconds </span>
      </div>
      <button className="pedestrian-btn" onClick={handlePedestrianRequest}>
        Pedestrian Crossing
      </button>
      <button className="emergency-btn" onClick={handleEmergencyOverride}>
        Emergency Override
      </button>
    </div>
  )
}

export default TrafficLight
