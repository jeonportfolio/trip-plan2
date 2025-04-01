import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Loading from './components/common/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModalProvider from './components/common/ModalProvider';
import '@/utils/date';


const Home = lazy(() => import('@/pages/home/Home'))
const RegisterCity = lazy(() => import('@/pages/admin/RegisterCity'));
const RegisterCountry = lazy(() => import('@/pages/admin/RegisterCountry'));
const RegisterPlace = lazy(() => import('@/pages/admin/RegisterPlace'));

const PlanCity = lazy(() => import('@/pages/plan/City'))

const queryClient = new QueryClient();


function App() {

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path= "/admin">
            <Route path= "register-city" element={<RegisterCity/>}/>
            <Route path= "register-country" element={<RegisterCountry/>}/>
            <Route path= "register-place" element={<RegisterPlace/>} />
          </Route>
          <Route path="/plan/:city" element={<PlanCity/>}/>
        </Routes>
      </Suspense>
      <ModalProvider/>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App
