import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

const Discovery = () => {
  useEffect(() => {
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    
    if (Cal) {
      Cal("init", "custom-ai-agent-consultation", {origin:"https://app.cal.com"});

      Cal.ns["custom-ai-agent-consultation"]("inline", {
        elementOrSelector:"#my-cal-inline-custom-ai-agent-consultation",
        config: {"layout":"month_view"},
        calLink: "ashwanthofficial/custom-ai-agent-consultation",
      });

      Cal.ns["custom-ai-agent-consultation"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="text-brand-red" size={32} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            Discovery Call
            </h2>
        </div>
        <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
          Book a time to discuss your automation needs.
        </p>
      </div>
      
      <div className="w-full max-w-6xl h-[700px] bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden animate-in fade-in zoom-in duration-500 delay-100">
        <div style={{width:"100%", height:"100%", overflow:"scroll"}} id="my-cal-inline-custom-ai-agent-consultation"></div>
      </div>
    </div>
  );
};

export default Discovery;