import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const useIdleTimerRedirect = (warningTime = 90000) => {
  const history = useHistory();
  const warnTimeout = useRef();
  const logoutTimeout = useRef();

  const warn = () => {
    alert('You will be logged out automatically in 1 minute.');
  };

  const logout = () => {
    history.push('/');
  };

  const resetTimer = () => {
    clearTimeout(warnTimeout.current);
    clearTimeout(logoutTimeout.current);

    warnTimeout.current = setTimeout(warn, warningTime);
    logoutTimeout.current = setTimeout(logout, warningTime + 60000);
  };

  useEffect(() => {
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
    ];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });

      if (warnTimeout.current) clearTimeout(warnTimeout.current);
      if (logoutTimeout.current) clearTimeout(logoutTimeout.current);
    };
  }, []);

  return null;
};

export default useIdleTimerRedirect;
