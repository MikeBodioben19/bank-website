import React from 'react'
import styles from './style'
import { Navbar,Hero,Billing,CardDeal,Business,Clients,CTA,Footer,Stats} from './Components'
  const  App = () => {

  return (
    <div className="App bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
        </div>
      </div>
    </div>
  )
}

export default App
