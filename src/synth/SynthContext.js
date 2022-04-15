import React, { useState, useContext } from "react";

const SelectedOsc = React.createContext()
const SelectedOscUpdate = React.createContext()
const SelectedLFO = React.createContext()
const SelectedLFOUpdate = React.createContext()
const FaderValues = React.createContext()
const FaderValuesUpdate = React.createContext()

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

export function useFaderValues() {
  return useContext(FaderValues)
}
export function useFaderValuesUpdate() {
  return useContext(FaderValuesUpdate)
}

export function StateProvider({ children }) {
  const [osc, setOsc] = useState("SINE")
  const [lfo, setLFO] = useState("SINE")
  const [faders, setFaders] =useState([80, 60, 40, 75, 90, 30, 60, 40, 110, 50])

  const changeOSC = (waveform) => {
    setOsc(waveform);
  }
  const changeLFO = (waveform) => {
    setLFO(waveform);
  }
  const changeFader = (faderId, value) => {
    setFaders((prevState) => {
      prevState[faderId] = value
      return {
        ...prevState
      }
    });
  }
  
  return (
    <SelectedOsc.Provider value={osc}>
      <SelectedOscUpdate.Provider value={changeOSC}>
        <SelectedLFO.Provider value={lfo}>
          <SelectedLFOUpdate.Provider value={changeLFO}>
            <FaderValues.Provider value={faders}>
              <FaderValuesUpdate.Provider value={changeFader}>
                {children}
              </FaderValuesUpdate.Provider>
            </FaderValues.Provider>
          </SelectedLFOUpdate.Provider>
        </SelectedLFO.Provider>
      </SelectedOscUpdate.Provider>
    </SelectedOsc.Provider>
  )
}