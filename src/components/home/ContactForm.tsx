import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    location: '',
    isNewPatient: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, phone, message, location, isNewPatient } = formData;

  
  const whatsappMessage = `
¡Nuevo contacto desde el sitio web!
 -Nombre: ${name}
 -Email: ${email}
 -Teléfono: ${phone}
 -Ubicación: ${location}
 -¿Paciente nuevo?: ${isNewPatient === 'yes' ? 'Sí' : 'No'}
 -Mensaje: ${message}
  `.trim();

  const phoneNumber = "523326312137"; 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, '_blank');
};





  return (
    <Card id="contacto" className="max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0">

      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-display font-bold text-dental-navy">
          {t('contact.title')}
        </CardTitle>
        <CardDescription className="text-base">
          {t('contact.subtitle')}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-dental-navy">
              {t('contact.name')}
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-dental-navy">
              {t('contact.email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-dental-navy">
              {t('contact.phone')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-dental-navy">
              <MapPin className="inline h-4 w-4 mr-1" />
              {t('contact.location')}
            </Label>
            <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
              <SelectTrigger className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue">
                <SelectValue placeholder="Selecciona una ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="guadalajara">{t('contact.guadalajara')}</SelectItem>
                <SelectItem value="chapala">{t('contact.chapala')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* New Patient */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-dental-navy">
              {t('contact.newPatient')}
            </Label>
            <RadioGroup
              value={formData.isNewPatient}
              onValueChange={(value) => handleInputChange('isNewPatient', value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer">{t('contact.yes')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer">{t('contact.no')}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-dental-navy">
              {t('contact.message')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue resize-none"
              placeholder="Cuéntanos sobre tu consulta..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-dental hover:opacity-90 text-white font-semibold py-3 text-lg group"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                {t('contact.submit')}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;