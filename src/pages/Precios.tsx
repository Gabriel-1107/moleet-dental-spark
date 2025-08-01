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
      categoryKey: 'prices.general',
      treatments: [
        { nameKey: 'treatment.consultation', priceMXN: 500, priceUSD: 30, popular: false },
        { nameKey: 'treatment.cleaning', priceMXN: 800, priceUSD: 45, popular: true },
        { nameKey: 'treatment.filling', priceMXN: 1200, priceUSD: 70, popular: false },
        { nameKey: 'treatment.extraction.simple', priceMXN: 800, priceUSD: 45, popular: false },
        { nameKey: 'treatment.extraction.complex', priceMXN: 1500, priceUSD: 85, popular: false }
      ]
    },
    {
      categoryKey: 'prices.aesthetic',
      treatments: [
        { nameKey: 'treatment.whitening', priceMXN: 3500, priceUSD: 200, popular: true },
        { nameKey: 'treatment.veneer', priceMXN: 8000, priceUSD: 450, popular: false },
        { nameKey: 'treatment.crown', priceMXN: 6500, priceUSD: 370, popular: false },
        { nameKey: 'treatment.smile.design', priceMXN: 25000, priceUSD: 1400, popular: true },
        { nameKey: 'treatment.inlay', priceMXN: 4500, priceUSD: 250, popular: false }
      ]
    },
    {
      categoryKey: 'prices.endodontics',
      treatments: [
        { nameKey: 'treatment.root.canal.1', priceMXN: 3500, priceUSD: 200, popular: false },
        { nameKey: 'treatment.root.canal.2', priceMXN: 4500, priceUSD: 250, popular: true },
        { nameKey: 'treatment.root.canal.3', priceMXN: 5500, priceUSD: 310, popular: false },
        { nameKey: 'treatment.retreatment', priceMXN: 6500, priceUSD: 370, popular: false },
        { nameKey: 'treatment.apicoectomy', priceMXN: 8000, priceUSD: 450, popular: false }
      ]
    },
    {
      categoryKey: 'prices.prosthetics',
      treatments: [
        { nameKey: 'treatment.partial.denture', priceMXN: 8000, priceUSD: 450, popular: false },
        { nameKey: 'treatment.full.denture', priceMXN: 12000, priceUSD: 680, popular: true },
        { nameKey: 'treatment.flexible.denture', priceMXN: 15000, priceUSD: 850, popular: false },
        { nameKey: 'treatment.implant.prosthesis', priceMXN: 35000, priceUSD: 2000, popular: true },
        { nameKey: 'treatment.denture.repair', priceMXN: 800, priceUSD: 45, popular: false }
      ]
    },
    {
      categoryKey: 'prices.implantology',
      treatments: [
        { nameKey: 'treatment.single.implant', priceMXN: 18000, priceUSD: 1000, popular: true },
        { nameKey: 'treatment.implant.crown', priceMXN: 12000, priceUSD: 680, popular: false },
        { nameKey: 'treatment.all.on.4', priceMXN: 120000, priceUSD: 6800, popular: true },
        { nameKey: 'treatment.all.on.6', priceMXN: 150000, priceUSD: 8500, popular: false },
        { nameKey: 'treatment.bone.graft', priceMXN: 8000, priceUSD: 450, popular: false }
      ]
    },
    {
      categoryKey: 'prices.surgery',
      treatments: [
        { nameKey: 'treatment.wisdom.tooth', priceMXN: 2500, priceUSD: 140, popular: true },
        { nameKey: 'treatment.cyst.surgery', priceMXN: 8000, priceUSD: 450, popular: false },
        { nameKey: 'treatment.frenectomy', priceMXN: 3500, priceUSD: 200, popular: false },
        { nameKey: 'treatment.oral.biopsy', priceMXN: 4500, priceUSD: 250, popular: false },
        { nameKey: 'treatment.periodontal.surgery', priceMXN: 6000, priceUSD: 340, popular: false }
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
          <h1 className="font-display text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-dental-blue to-dental-accent bg-clip-text text-transparent mb-6">
            {t('prices.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('prices.subtitle')}
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={currency === 'MXN' ? 'default' : 'outline'}
              onClick={() => setCurrency('MXN')}
              className={`rounded-2xl transition-all duration-300 ${currency === 'MXN' ? 'bg-primary shadow-lg' : ''}`}
            >
              {t('prices.currency.mxn')}
            </Button>
            <Button
              variant={currency === 'USD' ? 'default' : 'outline'}
              onClick={() => setCurrency('USD')}
              className={`rounded-2xl transition-all duration-300 ${currency === 'USD' ? 'bg-primary shadow-lg' : ''}`}
            >
              {t('prices.currency.usd')}
            </Button>
          </div>
        </div>

        {/* Price Categories */}
        <div className="space-y-12">
          {priceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden shadow-2xl rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white rounded-t-3xl">
                <CardTitle className="text-2xl font-display flex items-center gap-3">
                  <DollarSign className="h-6 w-6" />
                  {t(category.categoryKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-6 font-semibold text-primary">{t('prices.treatment')}</th>
                        <th className="text-right p-6 font-semibold text-primary">{t('prices.price')}</th>
                        <th className="text-center p-6 font-semibold text-primary">{t('prices.status')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.treatments.map((treatment, treatmentIndex) => (
                        <tr
                          key={treatmentIndex}
                          className="border-b border-primary/10 hover:bg-primary/5 transition-all duration-300"
                        >
                          <td className="p-6">
                            <div className="font-medium text-primary">
                              {t(treatment.nameKey)}
                            </div>
                          </td>
                          <td className="p-6 text-right">
                            <div className="text-lg font-bold text-dental-blue">
                              {formatPrice(treatment.priceMXN, treatment.priceUSD)}
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            {treatment.popular && (
                              <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 rounded-full px-4 py-1">
                                {t('prices.popular')}
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
        <Card className="mt-12 bg-white/90 backdrop-blur-sm rounded-3xl border-0 shadow-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              {t('prices.notes.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('prices.notes.included.title')}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {t('prices.notes.included.1')}</li>
                  <li>• {t('prices.notes.included.2')}</li>
                  <li>• {t('prices.notes.included.3')}</li>
                  <li>• {t('prices.notes.included.4')}</li>
                  <li>• {t('prices.notes.included.5')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('prices.notes.financing.title')}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {t('prices.notes.financing.1')}</li>
                  <li>• {t('prices.notes.financing.2')}</li>
                  <li>• {t('prices.notes.financing.3')}</li>
                  <li>• {t('prices.notes.financing.4')}</li>
                  <li>• {t('prices.notes.financing.5')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-br from-primary via-dental-blue to-dental-accent text-white max-w-2xl mx-auto rounded-3xl border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('prices.cta.title')}</h3>
              <p className="text-white/90 mb-6">
                {t('prices.cta.description')}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl shadow-lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('prices.cta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Precios;