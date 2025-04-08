import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Add a small delay to show the loading screen
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/+250791055738";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#915EFF] bg-opacity-90 flex flex-col items-center justify-center z-50">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to WhatsApp...</h1>
        <p className="text-xl mb-8">You'll be connected with us in a moment!</p>
        
        {/* Loading animation */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
