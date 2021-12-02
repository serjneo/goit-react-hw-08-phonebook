import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
