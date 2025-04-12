import { Container } from "@mui/material"
import LearningPlanForm from "./components/LearningPlanForm"
import LearningPlanList from "./components/LearningPlanList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModuleContent from "./components/ModuleContent";

function App() {

  return (
    <>
    <Router>
    <Container maxWidth="md">
      <h1>Learning Plans</h1>
    <Routes>
    <Route path="/" element={<LearningPlanList />} />
    <Route path="/plan/:planId" element={<ModuleContent />} />


    </Routes>

    </Container>
    </Router>
    
    </>
  )
}

export default App
