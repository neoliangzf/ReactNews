import React from 'react'
import PcHeader from './PcHeader'
import PcNewsContainer from './PcNewsContainer'
import PcFooter from './PcFooter'
import '../../style/Pc.css'

class PcIndex extends React.Component {
  render() {
    return (
      <div style={{minWidth: "1266px"}}>
        <PcHeader />
        <PcNewsContainer />
        <PcFooter />
      </div>
    );
  }
}

export default PcIndex;
