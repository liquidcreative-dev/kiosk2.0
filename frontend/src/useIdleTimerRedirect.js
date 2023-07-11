import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useIdleTimerRedirect = (warningTime = 120000) => {
  const navigate = useNavigate();
  const warnTimeout = useRef();
  const logoutTimeout = useRef();

  const warn = useCallback(() => {
    alert('Are you still here?');
  }, []);

  const logout = useCallback(() => {
    // This is where you'd normally dispatch a redux action for user logout
    navigate('/');
  }, [navigate]);

  const resetTimer = useCallback(() => {
    clearTimeout(warnTimeout.current);
    clearTimeout(logoutTimeout.current);

    warnTimeout.current = setTimeout(warn, warningTime);
    logoutTimeout.current = setTimeout(logout, warningTime + 60000);
  }, [warningTime, warn, logout]);

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
