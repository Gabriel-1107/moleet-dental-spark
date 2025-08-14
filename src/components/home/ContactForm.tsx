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
    branch: '',
    isNewPatient: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, phone, message, location, branch, isNewPatient } = formData;

  // Different WhatsApp numbers for each branch
  const whatsappNumbers = {
    guadalajara: "3315204944", // Main number for Guadalajara
    chapala: "3310235792" // Different number for Chapala
  };

  const selectedBranch = branch || location; // Use branch if selected, fallback to location
  const phoneNumber = whatsappNumbers[selectedBranch as keyof typeof whatsappNumbers] || whatsappNumbers.guadalajara;
  
  const whatsappMessage = `
¡Nuevo contacto desde el sitio web!
 -Nombre: ${name}
 -Email: ${email}
 -Teléfono: ${phone}
 -Sucursal: ${selectedBranch === 'guadalajara' ? 'Guadalajara' : 'Chapala'}
 -¿Paciente nuevo?: ${isNewPatient === 'yes' ? 'Sí' : 'No'}
 -Mensaje: ${message}
  `.trim();

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
};





  return (
   <Card
  id="contacto"
  className="w-full max-w-sm mx-auto bg-white/90 backdrop-blur-sm shadow-lg border-0 p-4 sm:p-6 rounded-xl"
>
  <CardHeader className="text-center mb-4">
    <CardTitle className="text-xl sm:text-2xl font-display font-bold text-dental-navy">
      {t('contact.title')}
    </CardTitle>
    <CardDescription className="text-sm sm:text-base">
      {t('contact.subtitle')}
    </CardDescription>
  </CardHeader>

  <CardContent>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-dental-navy">
          {t('contact.name')}
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue text-sm"
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-dental-navy">
          {t('contact.email')}
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue text-sm"
        />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-dental-navy">
          {t('contact.phone')}
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required
          className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue text-sm"
        />
      </div>

      {/* Branch */}
      <div>
        <Label className="text-sm font-medium text-dental-navy flex items-center">
          <MapPin className="inline h-4 w-4 mr-1" />
          {t('contact.branch')}
        </Label>
        <Select
          value={formData.branch}
          onValueChange={(value) => handleInputChange('branch', value)}
          required
        >
          <SelectTrigger className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue text-sm">
            <SelectValue placeholder="Selecciona una sucursal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guadalajara">{t('contact.guadalajara')}</SelectItem>
            <SelectItem value="chapala">{t('contact.chapala')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* New Patient */}
      <div>
        <Label className="text-sm font-medium text-dental-navy">
          {t('contact.newPatient')}
        </Label>
        <RadioGroup
          value={formData.isNewPatient}
          onValueChange={(value) => handleInputChange('isNewPatient', value)}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes" className="cursor-pointer text-sm">
              {t('contact.yes')}
            </Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no" className="cursor-pointer text-sm">
              {t('contact.no')}
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-dental-navy">
          {t('contact.message')}
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={3}
          className="border-gray-300 focus:border-dental-blue focus:ring-dental-blue resize-none text-sm"
          placeholder="Cuéntanos sobre tu consulta..."
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-dental hover:opacity-90 text-white font-semibold py-2 text-sm sm:text-base group"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            {t('contact.submit')}
            <Send className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  </CardContent>
</Card>

  );
};

export default ContactForm;