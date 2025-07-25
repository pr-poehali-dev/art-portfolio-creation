import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navItems = [
    { id: 'projects', label: 'Реализованные проекты', icon: 'FolderOpen' },
    { id: 'illustrations', label: 'Иллюстрации', icon: 'Palette' },
    { id: 'animation', label: 'Анимация', icon: 'Play' },
    { id: 'about', label: 'Обо мне', icon: 'User' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Волшебные друзья",
      category: "Детская иллюстрация",
      image: "/img/b806ab7c-b6a0-4737-8b84-965614924c78.jpg",
      description: "Серия иллюстраций для детской книги о дружбе"
    },
    {
      id: 2,
      title: "Лесное чаепитие",
      category: "Анимация",
      image: "/img/f091befe-a555-4bd6-909d-3b57d88c8d58.jpg",
      description: "Короткометражная анимация для детского канала"
    },
    {
      id: 3,
      title: "Зимняя сказка",
      category: "Цифровое искусство",
      image: "/img/2bd256c2-6aa7-4742-8940-446be2818dd1.jpg",
      description: "Концепт-арт для мобильной игры"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-skyBlue/20 via-white to-peach/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-skyBlue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-skyBlue to-warmPink rounded-full animate-float"></div>
              <h1 className="font-caveat text-2xl md:text-3xl text-gray-800">Студия Детской Иллюстрации</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-skyBlue transition-colors duration-200 group"
                >
                  <Icon name={item.icon} size={18} />
                  <span className="group-hover:underline">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-caveat text-5xl md:text-7xl text-gray-800 mb-6">
              Мир детских грёз и фантазий
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаю волшебные иллюстрации и анимации, которые оживляют детские книги, 
              игры и мультфильмы. Каждая работа — это путешествие в мир добра и красоты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="bg-skyBlue hover:bg-skyBlue/80 text-white rounded-full px-8 py-3 text-lg"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button 
                onClick={() => scrollToSection('contacts')}
                variant="outline" 
                size="lg" 
                className="border-skyBlue text-skyBlue hover:bg-skyBlue/10 rounded-full px-8 py-3 text-lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="font-caveat text-4xl md:text-5xl text-center text-gray-800 mb-12">
            Реализованные проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-warmPink/20 text-warmPink rounded-full text-sm mb-3">
                    {item.category}
                  </div>
                  <h3 className="font-caveat text-2xl text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-skyBlue hover:text-skyBlue/80 hover:bg-skyBlue/10 rounded-full p-0"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrations Section */}
      <section id="illustrations" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-caveat text-4xl md:text-5xl text-center text-gray-800 mb-12">
            Иллюстрации
          </h2>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-lavender to-warmPink rounded-full mb-6 animate-float">
              <Icon name="Palette" size={32} className="text-white" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Специализируюсь на создании тёплых, добрых иллюстраций для детских книг, 
              образовательных материалов и игр. Работаю в различных техниках от акварели до цифровой живописи.
            </p>
            <Button className="bg-lavender hover:bg-lavender/80 text-white rounded-full px-8 py-3">
              <Icon name="ImageIcon" size={20} className="mr-2" />
              Смотреть галерею
            </Button>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section id="animation" className="py-16 px-4 bg-mint/20">
        <div className="container mx-auto">
          <h2 className="font-caveat text-4xl md:text-5xl text-center text-gray-800 mb-12">
            Анимация
          </h2>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-skyBlue to-mint rounded-full mb-6 animate-float">
              <Icon name="Play" size={32} className="text-white" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Создаю короткие анимационные ролики, заставки для детских передач 
              и интерактивные элементы для мобильных приложений. Каждая анимация рассказывает свою историю.
            </p>
            <Button className="bg-mint hover:bg-mint/80 text-white rounded-full px-8 py-3">
              <Icon name="Film" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-caveat text-4xl md:text-5xl text-gray-800 mb-6">
                Обо мне
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Привет! Меня зовут Анна, и я детский иллюстратор с 8-летним опытом работы. 
                Моя миссия — создавать добрые, яркие образы, которые вдохновляют детей 
                на творчество и помогают им познавать мир.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Работала с ведущими издательствами детской литературы, создавала персонажей 
                для образовательных игр и анимационных проектов. Каждая работа — это маленькое 
                приключение, полное красок и эмоций.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Детские книги', 'Мобильные игры', '2D анимация', 'Персонажи', 'Концепт-арт'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-peach/20 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-skyBlue/20 to-warmPink/20 rounded-3xl flex items-center justify-center">
                  <Icon name="User" size={120} className="text-skyBlue/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-gradient-to-r from-skyBlue/10 to-warmPink/10">
        <div className="container mx-auto text-center">
          <h2 className="font-caveat text-4xl md:text-5xl text-gray-800 mb-8">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Готова воплотить ваши идеи в жизнь! Свяжитесь со мной для обсуждения проекта.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-white/80">
              <div className="w-12 h-12 bg-skyBlue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-skyBlue" />
              </div>
              <h3 className="font-caveat text-xl text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">anna.artist@example.com</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-white/80">
              <div className="w-12 h-12 bg-warmPink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-warmPink" />
              </div>
              <h3 className="font-caveat text-xl text-gray-800 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-white/80">
              <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Instagram" size={24} className="text-lavender" />
              </div>
              <h3 className="font-caveat text-xl text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600">@anna_children_art</p>
            </Card>
          </div>
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-skyBlue to-warmPink hover:from-skyBlue/80 hover:to-warmPink/80 text-white rounded-full px-12 py-4 text-lg shadow-lg"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-skyBlue to-warmPink rounded-full"></div>
            <p className="font-caveat text-xl">Студия Детской Иллюстрации</p>
          </div>
          <p className="text-gray-400">© 2024 Анна Иванова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;