import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useIdleTimerRedirect = (warningTime = 90000) => {
  const navigate = useNavigate();
  const warnTimeout = useRef();
  const logoutTimeout = useRef();

  const warn = () => {
    alert('You will be logged out automatically in 1 minute.');
  };

  const logout = () => {
    // This is where you'd normally dispatch a redux action for user logout
    navigate('/');
  };

  const resetTimer = useCallback(() => {
    clearTimeout(warnTimeout.current);
    clearTimeout(logoutTimeout.current);

    warnTimeout.current = setTimeout(warn, warningTime);
    logoutTimeout.current = setTimeout(logout, warningTime + 60000);
  }, [warningTime]);

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
  }, [resetTimer]);

  return null;
};

export default useIdleTimerRedirect;
