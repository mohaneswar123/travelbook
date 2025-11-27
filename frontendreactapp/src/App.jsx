import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() 
{
  const { isCustomerLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {isCustomerLoggedIn ? (
          <CustomerNavBar />
        ) : (
          <MainNavBar />
        )}
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;