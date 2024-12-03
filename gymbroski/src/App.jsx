import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkouts } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }
    
    let newWorkout = generateWorkouts({poison, muscles, goal}) 
    setWorkout(newWorkout)
    window.location.href = '#exercises'
  }

  return (
    <main className='flex flex-col min-h-screen text-sm text-white bg-gradient-to-r from-slate-800 to-slate-950 sm:text-base'>
      <Hero />
      <Generator poison={poison} setPoison={setPoison}
        muscles={muscles} setMuscles={setMuscles}
        goal={goal} setGoal={setGoal}
        updateWorkout={updateWorkout}/>
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
