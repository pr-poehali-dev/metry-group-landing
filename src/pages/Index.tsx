import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary font-heading">
            МЕТРЫ ГРУП
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('conditions')} className="text-foreground hover:text-primary transition-colors">
              Условия
            </button>
            <button onClick={() => scrollToSection('vacancies')} className="text-foreground hover:text-primary transition-colors">
              Вакансии
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
                Стань частью <span className="text-primary">команды мастеров</span>
              </h1>
              <p className="text-xl text-secondary mb-8">
                Ремонт квартир в новостройках под ключ. Стабильный доход, современные проекты, профессиональный рост.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" onClick={() => scrollToSection('join')}>
                Откликнуться на вакансию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/89de99a2-38c4-48fd-be99-f635b718b61a.jpg" 
                alt="Метры Груп" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">О нас</h2>
          <p className="text-xl text-secondary mb-12 max-w-3xl">
            Метры Груп — профессиональная команда мастеров, специализирующаяся на качественном ремонте квартир в новостройках под ключ. Мы создаем современные пространства, где каждая деталь продумана до мелочей.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-4 font-heading">500+</div>
                <p className="text-lg font-semibold mb-2">Завершенных проектов</p>
                <p className="text-secondary">Квартиры под ключ по всей Москве</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-4 font-heading">50+</div>
                <p className="text-lg font-semibold mb-2">Профессиональных мастеров</p>
                <p className="text-secondary">В нашей команде</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-4 font-heading">7 лет</div>
                <p className="text-lg font-semibold mb-2">Опыт на рынке</p>
                <p className="text-secondary">Стабильность и надежность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Мы можем предложить вам</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Wallet', title: 'Достойная оплата', desc: 'Конкурентная ставка и своевременные выплаты' },
              { icon: 'Calendar', title: 'Гибкий график', desc: 'Выбирайте удобное для вас время работы' },
              { icon: 'TrendingUp', title: 'Карьерный рост', desc: 'Обучение и повышение квалификации' },
              { icon: 'Briefcase', title: 'Стабильные заказы', desc: 'Постоянный поток новых проектов' },
              { icon: 'Shield', title: 'Официальное оформление', desc: 'Все по закону, с договором' },
              { icon: 'Users', title: 'Сильная команда', desc: 'Работа с профессионалами своего дела' },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary hover:shadow-lg transition-all">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={benefit.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">{benefit.title}</h3>
                    <p className="text-secondary">{benefit.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Заботимся о наших сотрудниках</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-primary text-white">
              <CardContent className="p-8">
                <Icon name="Coffee" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4 font-heading">Комфортные условия</h3>
                <p>Обеспечиваем всем необходимым инструментом и материалами</p>
              </CardContent>
            </Card>
            <Card className="bg-foreground text-white">
              <CardContent className="p-8">
                <Icon name="Heart" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4 font-heading">Медицинская страховка</h3>
                <p>Забота о вашем здоровье — наш приоритет</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-white">
              <CardContent className="p-8">
                <Icon name="GraduationCap" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4 font-heading">Обучение</h3>
                <p>Регулярные тренинги и мастер-классы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <div className="bg-gray-200 aspect-square flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold">Проект {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Вакансии Метры Груп</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Мастер-отделочник', salary: 'от 80 000 ₽', type: 'Полная занятость' },
              { title: 'Плиточник', salary: 'от 90 000 ₽', type: 'Полная занятость' },
              { title: 'Электрик', salary: 'от 85 000 ₽', type: 'Полная занятость' },
              { title: 'Сантехник', salary: 'от 85 000 ₽', type: 'Полная занятость' },
            ].map((vacancy, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 font-heading">{vacancy.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary text-xl font-semibold">{vacancy.salary}</span>
                    <span className="text-secondary">• {vacancy.type}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection('join')}>
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Присоединяйся к нашей команде</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправь свое резюме, и мы свяжемся с тобой в ближайшее время
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full px-6 py-4 rounded-lg text-foreground"
            />
            <input 
              type="tel" 
              placeholder="Телефон" 
              className="w-full px-6 py-4 rounded-lg text-foreground"
            />
            <input 
              type="text" 
              placeholder="Желаемая должность" 
              className="w-full px-6 py-4 rounded-lg text-foreground"
            />
            <Button size="lg" className="w-full bg-foreground text-white hover:bg-foreground/90 py-6">
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Что о нас говорят клиенты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Александр М.', text: 'Отличная команда! Ремонт сделали качественно и в срок. Мастера профессионалы своего дела.' },
              { name: 'Елена К.', text: 'Очень довольны результатом. Все работы выполнены на высшем уровне. Рекомендую!' },
              { name: 'Дмитрий В.', text: 'Сделали ремонт в двухкомнатной квартире. Все четко, по договору, без задержек.' },
            ].map((review, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-secondary mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Остались вопросы?</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border-2">
              <AccordionTrigger className="text-lg font-semibold">
                Какой опыт работы требуется?
              </AccordionTrigger>
              <AccordionContent className="text-secondary">
                Мы рассматриваем кандидатов с опытом работы от 2 лет. Новичкам предлагаем стажировку с обучением.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border-2">
              <AccordionTrigger className="text-lg font-semibold">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-secondary">
                Оплата производится два раза в месяц: аванс и основная часть. Возможна сдельная или почасовая оплата.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border-2">
              <AccordionTrigger className="text-lg font-semibold">
                Нужно ли свое оборудование?
              </AccordionTrigger>
              <AccordionContent className="text-secondary">
                Основное оборудование предоставляем мы. Приветствуется наличие собственного профессионального инструмента.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border-2">
              <AccordionTrigger className="text-lg font-semibold">
                В каких районах ведутся работы?
              </AccordionTrigger>
              <AccordionContent className="text-secondary">
                Работаем по всей Москве и ближайшему Подмосковью. Объекты преимущественно в новостройках.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">Не нашли ответ на свой вопрос?</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-heading">МЕТРЫ ГРУП</h3>
              <p className="text-gray-400">Ремонт квартир под ключ</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">+7 (495) 123-45-67</p>
              <p className="text-gray-400">info@metrygroup.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">О нас</button>
                <button onClick={() => scrollToSection('vacancies')} className="block text-gray-400 hover:text-white transition-colors">Вакансии</button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-white transition-colors">FAQ</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Send" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Phone" className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Метры Груп. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}