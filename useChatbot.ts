import { useEffect } from 'react';

const useChatbot = (voiceflowScript: string) => {
  useEffect(() => {
    const script = document.createElement('script');
    
    script.innerHTML = voiceflowScript;
    script.type = 'text/javascript';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [voiceflowScript]);
};

export default useChatbot;