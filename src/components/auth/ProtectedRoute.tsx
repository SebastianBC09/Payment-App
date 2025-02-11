import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../store/hooks';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAppSelector(state => state.customer);
  const location = useLocation();

  if (!session) {
    return <Navigate to="/create-account" replace state={{ from: location }} />;
  }

  if (session.status !== 'COMPLETE') {
    return <Navigate to="/create-account" replace />;
  }

  return <>{children}</>;
};
