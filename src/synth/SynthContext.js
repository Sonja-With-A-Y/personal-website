import React, { useState, useContext } from "react";

const SelectedOsc = React.createContext()
const SelectedOscUpdate = React.createContext()
const SelectedLFO = React.createContext()
const SelectedLFOUpdate = React.createContext()

export function useSelectedOsc() {
  return useContext(SelectedOsc)
}

export function useSelectedOscUpdate() {
  return useContext(SelectedOscUpdate)
}

export function useSelectedLFO() {
  return useContext(SelectedLFO)
}

export function useSelectedLFOUpdate() {
  return useContext(SelectedLFOUpdate)
}

export function StateProvider({ children }) {
  const [osc, setOsc] = useState("SINE")
  const [lfo, setLFO] = useState("SINE")

  const changeOSC = (waveform) => {
    setOsc(waveform);
  }

  const changeLFO = (waveform) => {
    setLFO(waveform);
  }
  
  return (
    <SelectedOsc.Provider value={osc}>
      <SelectedOscUpdate.Provider value={changeOSC}>
        <SelectedLFO.Provider value={lfo}>
          <SelectedLFOUpdate.Provider value={changeLFO}>
            {children}
          </SelectedLFOUpdate.Provider>
        </SelectedLFO.Provider>
      </SelectedOscUpdate.Provider>
    </SelectedOsc.Provider>
  )
}