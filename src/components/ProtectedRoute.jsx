import { Navigate } from "react-router-dom";

// Hook para verificar si el usuario está autenticado
function useAuth() {
  // En una aplicación real, esto verificaría el token o sesión
  // Por ahora, verificamos si hay algo en localStorage
  return localStorage.getItem("validCode") !== null;
}

// Componente para proteger rutas
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
