import { Routes } from "react-router-dom"


const Rotas = () => {
  return (
  <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Routes>
  )
}

export default Rotas