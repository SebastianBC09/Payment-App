import { Navigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAppSelector(state => state.customer);
  const id  = session?.id

  if (!id) {
    return <Navigate to="/create-account" replace />;
  }

  if (session.status !== 'COMPLETE') {
    return <Navigate to="/create-account" replace />;
  }

  return <>{children}</>;
};
