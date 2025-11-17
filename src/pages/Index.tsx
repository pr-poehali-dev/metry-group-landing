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

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-[40px] p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-heading leading-tight">
                  Новый <span className="text-primary">масштаб</span>
                </h1>
                <p className="text-xl text-secondary mb-8">
                  Стройте карьеру в ремонте квартир в новостройках под ключ
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-2xl" onClick={() => scrollToSection('join')}>
                  Предлагаю →
                </Button>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/89de99a2-38c4-48fd-be99-f635b718b61a.jpg" 
                  alt="Метры Груп" 
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -right-4 top-12 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-xl">
                      <Icon name="Briefcase" className="text-primary" size={24} />
                    </div>
                    <span className="font-bold text-2xl">8 недель</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-xl">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <span className="font-bold text-2xl">5 модулей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-xl">
                      <Icon name="Target" className="text-primary" size={24} />
                    </div>
                    <span className="font-bold text-2xl">80% практики</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-heading">
              Виктория <span className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-2xl">👤</span>
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-heading">Добровольская</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="text-primary">#предприниматель</span>
            <span className="text-primary">#стратег</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-foreground mb-2 font-heading">23</div>
              <p className="text-sm text-secondary mb-4">года создаю</p>
              <p className="text-foreground">
                <strong>стратегии</strong> для среднего и крупного бизнеса
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-foreground mb-2 font-heading">3</div>
              <p className="text-sm text-secondary mb-4">высших образования:</p>
              <ul className="text-sm space-y-1">
                <li>• предпринимательство</li>
                <li>• МВА бизнес и</li>
                <li>• психология</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-primary text-white rounded-2xl p-6 mb-4">
                <div className="text-5xl font-bold mb-2">450<sup>+</sup></div>
                <p className="text-sm opacity-90">стратегических проектов</p>
              </div>
              <div className="bg-foreground text-white rounded-2xl p-6">
                <div className="text-5xl font-bold mb-2">700<sup>+</sup></div>
                <p className="text-sm opacity-90">выездных бизнесов-сессий</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">Кому подойдет</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">программа?</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="text-primary">#предпринимателям</span>
            <span className="text-primary">#экспертам</span>
            <span className="text-primary">#собственникам бизнеса</span>
            <span className="text-primary">#топ-менеджерам</span>
          </div>
          
          <p className="text-3xl font-bold text-primary mb-8">Если вы узнаете себя:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Target', text: 'Что-то внутри вас подсказывает, что вы можете больше, но не знаете, как этого достичь' },
              { icon: 'DollarSign', text: 'Постоянно обжигаетесь на маркетинге и продажах, но это мешает вам расти' },
              { icon: 'Users', text: 'Клиенты задерживают оплату или вовсе не платят' },
              { icon: 'TrendingDown', text: 'Доход не хватает на развитие своего дела' },
              { icon: 'Briefcase', text: 'Как раньше больше не работает, нужно что-то менять' },
              { icon: 'AlertCircle', text: 'Мои гиперответственность и перфекционизм съедают время и ресурсы' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-primary text-white p-3 rounded-xl flex-shrink-0">
                  <Icon name={item.icon} size={24} />
                </div>
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary to-red-600 rounded-[40px] p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">Зачем менять</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 font-heading">ситуацию?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-white">
                  <p className="text-xl mb-6">Увидеть свой <strong>личный потенциал</strong> и «фишки», которые помогут вам <strong>начать управлять</strong> своим бизнесом</p>
                </div>
                <div className="text-white">
                  <p className="text-xl">В полной мере <strong>творить уже новую реальность</strong> и перестать ходить по кругу умею, <strong>знаю, делаю</strong>, в результате нет</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Современный ремонт', tag: 'ЖК Новая Москва' },
              { title: 'Премиум отделка', tag: 'Центр Москвы' },
              { title: 'Евроремонт', tag: 'ЖК Комфорт' },
              { title: 'Дизайнерский проект', tag: 'Элитный класс' },
              { title: 'Быстрый ремонт', tag: '45 дней' },
              { title: 'Качественная отделка', tag: 'Под ключ' },
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-3xl group cursor-pointer bg-gradient-to-br from-gray-200 to-gray-100 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-primary text-sm mb-2">{item.tag}</span>
                  <p className="text-white font-bold text-xl">{item.title}</p>
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
              { title: 'Мастер-отделочник', salary: 'от 80 000 ₽', type: 'Полная занятость', icon: 'Hammer' },
              { title: 'Плиточник', salary: 'от 90 000 ₽', type: 'Полная занятость', icon: 'Layers' },
              { title: 'Электрик', salary: 'от 85 000 ₽', type: 'Полная занятость', icon: 'Zap' },
              { title: 'Сантехник', salary: 'от 85 000 ₽', type: 'Полная занятость', icon: 'Droplet' },
            ].map((vacancy, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <Icon name={vacancy.icon} className="text-primary" size={32} />
                  </div>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">{vacancy.type}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading text-foreground">{vacancy.title}</h3>
                <div className="text-4xl font-bold text-primary mb-6">{vacancy.salary}</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-2xl text-lg" onClick={() => scrollToSection('join')}>
                  Откликнуться →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-foreground text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-foreground to-gray-900 rounded-[40px] p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Присоединяйся</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-12 font-heading">к нашей команде</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-6 py-5 rounded-2xl text-foreground bg-white border-0 focus:ring-2 focus:ring-primary outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-6 py-5 rounded-2xl text-foreground bg-white border-0 focus:ring-2 focus:ring-primary outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Желаемая должность" 
                    className="w-full px-6 py-5 rounded-2xl text-foreground bg-white border-0 focus:ring-2 focus:ring-primary outline-none"
                  />
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-7 rounded-2xl text-lg">
                    Отправить заявку →
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl mb-4 opacity-90">Мы свяжемся с тобой</p>
                    <p className="text-5xl font-bold mb-2">в течение</p>
                    <p className="text-7xl font-bold text-primary">24ч</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Что о нас говорят клиенты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Александр М.', role: 'Владелец квартиры', text: 'Отличная команда! Ремонт сделали качественно и в срок. Мастера профессионалы своего дела.' },
              { name: 'Елена К.', role: 'Инвестор', text: 'Очень довольны результатом. Все работы выполнены на высшем уровне. Рекомендую!' },
              { name: 'Дмитрий В.', role: 'Застройщик', text: 'Сделали ремонт в двухкомнатной квартире. Все четко, по договору, без задержек.' },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-secondary text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-heading">Остались вопросы?</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:border-primary transition-all">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
                Какой опыт работы требуется?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-lg pt-4">
                Мы рассматриваем кандидатов с опытом работы от 2 лет. Новичкам предлагаем стажировку с обучением.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:border-primary transition-all">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-lg pt-4">
                Оплата производится два раза в месяц: аванс и основная часть. Возможна сдельная или почасовая оплата.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:border-primary transition-all">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
                Нужно ли свое оборудование?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-lg pt-4">
                Основное оборудование предоставляем мы. Приветствуется наличие собственного профессионального инструмента.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:border-primary transition-all">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
                В каких районах ведутся работы?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-lg pt-4">
                Работаем по всей Москве и ближайшему Подмосковью. Объекты преимущественно в новостройках.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-12 text-center">
            <p className="text-2xl mb-8 font-heading">Не нашли ответ на свой вопрос?</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-7 rounded-2xl text-lg">
              Связаться с нами →
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-heading">МЕТРЫ ГРУП</h3>
              <p className="text-gray-400 text-lg">Ремонт квартир под ключ в новостройках</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Контакты</h4>
              <p className="text-gray-300 mb-3 text-lg hover:text-primary transition-colors cursor-pointer">+7 (495) 123-45-67</p>
              <p className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">info@metrygroup.ru</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Навигация</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-primary transition-colors text-lg">О нас</button>
                <button onClick={() => scrollToSection('vacancies')} className="block text-gray-300 hover:text-primary transition-colors text-lg">Вакансии</button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-300 hover:text-primary transition-colors text-lg">FAQ</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="Instagram" className="text-white" size={24} />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="Send" className="text-white" size={24} />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2024 Метры Груп. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}