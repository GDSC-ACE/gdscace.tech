import React, { useEffect } from 'react';

const RedirectComponent = () => {
  useEffect(() => {
    window.location.replace('https://google.com');
  }, []);

  return (
    <div>
    </div>
  );
};

export default RedirectComponent;
