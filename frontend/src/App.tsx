import { Header } from "./components/header"
import { SalesCard } from "./components/salesCard"
//import { NotificationButton } from "./components/notificationButton"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
