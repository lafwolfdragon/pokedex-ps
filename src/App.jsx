import { useState } from 'react'
import './App.css'
import Pokemon from './component/Pokemon'

function App() {
  return (
    <>
      <div className="App">
        <Pokemon 
        imagen='bulbasaur'
        id='0001'
        nombre='Bulbasaur'
        tipo1='Planta'
        tipo2='Veneno'/>
        <Pokemon 
        imagen='ivysaur'
        id='0002'
        nombre='Ivysaur'
        tipo1='Planta'
        tipo2='Veneno'/>
        <Pokemon 
        imagen='venusaur'
        id='0003'
        nombre='Venusaur'
        tipo1='Planta'
        tipo2='Veneno'/>
        <Pokemon 
        imagen='charmander'
        id='0004'
        nombre='Charmander'
        tipo1='Fuego'
        tipo2='N/A'/>
        <Pokemon 
        imagen='charmeleon'
        id='0005'
        nombre='Charmeleon'
        tipo1='Fuego'
        tipo2='N/A'/>
        <Pokemon 
        imagen='charizard'
        id='0006'
        nombre='Charizard'
        tipo1='Fuego'
        tipo2='Volador'/>
        <Pokemon 
        imagen='squirtle'
        id='0007'
        nombre='Squirtle'
        tipo1='Agua'
        tipo2='N/A'/>
        <Pokemon 
        imagen='wartortle'
        id='0008'
        nombre='Wartortle'
        tipo1='Agua'
        tipo2='N/A'/>
        <Pokemon 
        imagen='blastoise'
        id='0009'
        nombre='Blastoise'
        tipo1='Agua'
        tipo2='N/A'/>
        <Pokemon 
        imagen='rayquaza'
        id='0384'
        nombre='Rayquaza'
        tipo1='Dragon'
        tipo2='Volador'/>
        <h3>Trabajo por Wilson franco PS C18</h3>
      </div>
    </>
  )
}

export default App
