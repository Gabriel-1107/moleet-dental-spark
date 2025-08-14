import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener información sobre sus servicios dentales.");
    window.open(`https://wa.me/523310235792?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+523310235792', '_self');
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Phone Button */}
      <Button
        onClick={handleCall}
        className="w-14 h-14 rounded-full bg-dental-blue hover:bg-dental-navy text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        size="icon"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingButtons;