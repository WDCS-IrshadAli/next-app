import React from 'react';

const layout = ({
  children,
  analytics,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <div className="my-4 flex gap-3">
      {children}
      {analytics}
      {revenue}
    </div>
  );
};

export default layout;
