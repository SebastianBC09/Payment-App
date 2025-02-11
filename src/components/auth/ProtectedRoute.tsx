import { Navigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { customer } = useAppSelector(state => state.customer);

  if (!customer) {
    return <Navigate to="/create-account" replace />;
  }

  return <>{children}</>;
};
