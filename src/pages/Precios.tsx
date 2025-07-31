import { useState } from 'react';
import { DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Precios = () => {
  const { t, language } = useLanguage();
  const [currency, setCurrency] = useState<'MXN' | 'USD'>('MXN');

  const priceCategories = [
    {
      category: 'Odontología General',
      treatments: [
        { name: 'Consulta General', priceMXN: 500, priceUSD: 30, popular: false },
        { name: 'Limpieza Dental', priceMXN: 800, priceUSD: 45, popular: true },
        { name: 'Empaste Resina', priceMXN: 1200, priceUSD: 70, popular: false },
        { name: 'Extracción Simple', priceMXN: 800, priceUSD: 45, popular: false },
        { name: 'Extracción Compleja', priceMXN: 1500, priceUSD: 85, popular: false }
      ]
    },
    {
      category: 'Estética Dental',
      treatments: [
        { name: 'Blanqueamiento Dental', priceMXN: 3500, priceUSD: 200, popular: true },
        { name: 'Carilla de Porcelana', priceMXN: 8000, priceUSD: 450, popular: false },
        { name: 'Corona de Porcelana', priceMXN: 6500, priceUSD: 370, popular: false },
        { name: 'Diseño de Sonrisa', priceMXN: 25000, priceUSD: 1400, popular: true },
        { name: 'Incrustación Estética', priceMXN: 4500, priceUSD: 250, popular: false }
      ]
    },
    {
      category: 'Endodoncia',
      treatments: [
        { name: 'Tratamiento de Conducto 1 Raíz', priceMXN: 3500, priceUSD: 200, popular: false },
        { name: 'Tratamiento de Conducto 2 Raíces', priceMXN: 4500, priceUSD: 250, popular: true },
        { name: 'Tratamiento de Conducto 3 Raíces', priceMXN: 5500, priceUSD: 310, popular: false },
        { name: 'Retratamiento de Conducto', priceMXN: 6500, priceUSD: 370, popular: false },
        { name: 'Apicectomía', priceMXN: 8000, priceUSD: 450, popular: false }
      ]
    },
    {
      category: 'Prótesis y Dentaduras',
      treatments: [
        { name: 'Dentadura Parcial Metal', priceMXN: 8000, priceUSD: 450, popular: false },
        { name: 'Dentadura Completa Porcelana', priceMXN: 12000, priceUSD: 680, popular: true },
        { name: 'Dentadura Flexible', priceMXN: 15000, priceUSD: 850, popular: false },
        { name: 'Prótesis sobre Implantes', priceMXN: 35000, priceUSD: 2000, popular: true },
        { name: 'Reparación de Dentadura', priceMXN: 800, priceUSD: 45, popular: false }
      ]
    },
    {
      category: 'Implantología',
      treatments: [
        { name: 'Implante Dental Individual', priceMXN: 18000, priceUSD: 1000, popular: true },
        { name: 'Corona sobre Implante', priceMXN: 12000, priceUSD: 680, popular: false },
        { name: 'All-on-4 (Arcada Completa)', priceMXN: 120000, priceUSD: 6800, popular: true },
        { name: 'All-on-6 (Arcada Completa)', priceMXN: 150000, priceUSD: 8500, popular: false },
        { name: 'Injerto de Hueso', priceMXN: 8000, priceUSD: 450, popular: false }
      ]
    },
    {
      category: 'Cirugía Maxilofacial',
      treatments: [
        { name: 'Extracción de Muela del Juicio', priceMXN: 2500, priceUSD: 140, popular: true },
        { name: 'Cirugía de Quiste', priceMXN: 8000, priceUSD: 450, popular: false },
        { name: 'Frenectomía', priceMXN: 3500, priceUSD: 200, popular: false },
        { name: 'Biopsia Oral', priceMXN: 4500, priceUSD: 250, popular: false },
        { name: 'Cirugía Periodontal', priceMXN: 6000, priceUSD: 340, popular: false }
      ]
    }
  ];

  const formatPrice = (priceMXN: number, priceUSD: number) => {
    if (currency === 'MXN') {
      return `$${priceMXN.toLocaleString()} MXN`;
    }
    return `$${priceUSD} USD`;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dental-navy mb-4">
            Lista de Precios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Precios transparentes y competitivos para todos nuestros tratamientos dentales
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={currency === 'MXN' ? 'default' : 'outline'}
              onClick={() => setCurrency('MXN')}
              className={currency === 'MXN' ? 'bg-dental-navy' : ''}
            >
              Pesos Mexicanos (MXN)
            </Button>
            <Button
              variant={currency === 'USD' ? 'default' : 'outline'}
              onClick={() => setCurrency('USD')}
              className={currency === 'USD' ? 'bg-dental-navy' : ''}
            >
              Dólares Americanos (USD)
            </Button>
          </div>
        </div>

        {/* Price Categories */}
        <div className="space-y-12">
          {priceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden shadow-dental">
              <CardHeader className="bg-gradient-dental text-white">
                <CardTitle className="text-2xl font-display flex items-center gap-3">
                  <DollarSign className="h-6 w-6" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-dental-light/20">
                      <tr>
                        <th className="text-left p-4 font-semibold text-dental-navy">Tratamiento</th>
                        <th className="text-right p-4 font-semibold text-dental-navy">Precio</th>
                        <th className="text-center p-4 font-semibold text-dental-navy">Estatus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.treatments.map((treatment, treatmentIndex) => (
                        <tr
                          key={treatmentIndex}
                          className="border-b border-dental-light/20 hover:bg-dental-light/10 transition-colors"
                        >
                          <td className="p-4">
                            <div className="font-medium text-dental-navy">
                              {treatment.name}
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="text-lg font-bold text-dental-blue">
                              {formatPrice(treatment.priceMXN, treatment.priceUSD)}
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            {treatment.popular && (
                              <Badge className="bg-dental-accent text-white">
                                Popular
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="mt-12 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-dental-navy mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Información Importante
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-dental-navy mb-2">Incluido en todos los tratamientos:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Consulta y diagnóstico</li>
                  <li>• Radiografías necesarias</li>
                  <li>• Anestesia local</li>
                  <li>• Seguimiento post-tratamiento</li>
                  <li>• Garantía según el tratamiento</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dental-navy mb-2">Planes de financiamiento:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pagos a 3, 6 y 12 meses sin intereses</li>
                  <li>• Descuentos por pago de contado</li>
                  <li>• Paquetes familiares disponibles</li>
                  <li>• Seguros dentales aceptados</li>
                  <li>• Cotización gratuita sin compromiso</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-dental text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una cotización personalizada?</h3>
              <p className="text-white/90 mb-6">
                Cada caso es único. Agenda una consulta gratuita para obtener un plan de tratamiento personalizado.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Consulta Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Precios;