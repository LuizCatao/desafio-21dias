import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, CheckCircle2, Shield, Star, 
  Target, Zap, Flame, Brain,
  ChevronRight, ChevronDown, PlayCircle,
  User
} from 'lucide-react';
import { NotificationPopups } from '@/components/NotificationPopup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function App() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      
      {/* 1. Announcement Bar */}
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground font-bold text-center py-2 px-4 text-sm md:text-base uppercase tracking-wider shadow-[0_0_10px_rgba(57,255,20,0.3)]">
        ⚡ Oferta com desconto apenas hoje
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden px-4">
        {/* Background gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] text-white mb-6">
              A maioria dos atletas reprova na peneira <span className="text-primary">antes mesmo de mostrar</span> seu futebol
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Um desafio completo de 21 dias para ajudar você a chegar mais preparado física, técnica e mentalmente, entender o que os avaliadores observam e aumentar suas chances de aprovação.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
              onClick={scrollToPricing}
              data-testid="btn-hero-cta"
            >
              Quero começar agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 font-bold uppercase tracking-wide border-white/20 text-white hover:bg-white/10"
              onClick={() => document.getElementById('included')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="btn-hero-secondary"
            >
              Ver o que está incluído
            </Button>
          </FadeIn>

          <FadeIn delay={0.4} className="flex items-center justify-center gap-2 mb-12">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-sm md:text-base text-gray-300 font-medium">
              Mais de 1.200 atletas treinando com o método
            </span>
          </FadeIn>

          <FadeIn delay={0.5} className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/hero-footballer.png" 
              alt="Atleta em campo" 
              className="w-full h-auto object-cover aspect-video object-center opacity-80"
              onError={(e) => {
                // Fallback styling if image not yet generated
                (e.target as HTMLElement).style.display = 'none';
                (e.target as HTMLElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 bg-secondary flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-primary/50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </FadeIn>
        </div>
      </section>

      {/* 4. Isso acontece com você? */}
      <section className="py-20 bg-card border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-16">
              Isso <span className="text-destructive">acontece</span> com você?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Você treina bem, mas na hora da peneira trava e não rende igual.",
              "Fica quieto em campo, não pede a bola e sabe que isso te prejudica.",
              "Não sabe exatamente o que o avaliador quer ver em você.",
              "Chega na peneira sem preparo físico específico e sente que falta algo.",
              "Já foi reprovado antes e não entendeu direito o motivo.",
              "Quer muito uma oportunidade, mas não sabe como se preparar certo."
            ].map((text, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-background border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:border-destructive/50 transition-colors">
                  <div className="bg-destructive/20 p-2 rounded-full shrink-0">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-gray-300 font-medium">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-xl md:text-2xl font-semibold text-primary">
              Se você marcou pelo menos um desses pontos, este desafio foi feito para você.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Transition Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-6 leading-tight">
              A maioria dos atletas <span className="text-primary">não é reprovada</span> por falta de talento
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              A maioria acredita que a peneira é decidida apenas pela técnica. Mas o avaliador observa muito mais do que isso.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-6 text-left max-w-2xl mx-auto">
            {[
              "O que faz um avaliador prestar atenção em você nos primeiros minutos.",
              "Como se destacar mesmo sem ser o melhor jogador do campo.",
              "Os erros que eliminam atletas antes mesmo de mostrarem seu futebol."
            ].map((text, i) => (
              <FadeIn key={i} delay={0.1 * i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <p className="text-lg font-medium">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Apresentando o Desafio */}
      <section id="included" className="py-24 bg-card relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-6 text-primary leading-tight">
                  Apresentando o Desafio de 21 Dias Para a Peneira
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Um protocolo completo criado para atletas que querem chegar na peneira preparados de verdade. Não é só teoria: é um plano dia a dia com treinos, mentalidade, estratégias e preparação para você se destacar em campo.
                </p>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg h-14 px-8 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                  onClick={scrollToPricing}
                  data-testid="btn-presentation-cta"
                >
                  Quero começar hoje
                </Button>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
              <img 
                src="/course-mockup.png" 
                alt="Mockup do Desafio 21 Dias" 
                className="w-full h-auto relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. O que você vai receber */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-16">
              O que você vai <span className="text-primary">receber</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, text: "Como fazer o avaliador notar você nos primeiros minutos." },
              { icon: Brain, text: "O que diferencia atletas aprovados dos reprovados." },
              { icon: Zap, text: "21 dias de treinos completos." },
              { icon: Flame, text: "Os últimos 3 dias antes da peneira." },
              { icon: Shield, text: "O comportamento que aumenta suas chances de aprovação." },
              { icon: ChevronRight, text: "Se você não passar: como reagir e buscar novas oportunidades." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-card border border-primary/20 p-8 rounded-2xl hover:border-primary transition-colors group">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.text}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. O segredo (Inverted colors) */}
      <section className="py-24 px-4 bg-primary text-black">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">
              O segredo que nenhum avaliador vai te contar
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-4xl mx-auto">
              O avaliador não procura apenas o atleta mais habilidoso. Ele procura atitude, confiança, comunicação, participação no jogo e comportamento competitivo. Muitas vezes, um atleta tecnicamente inferior é aprovado porque consegue chamar mais atenção em campo.
            </p>
            <div className="bg-black text-white p-8 md:p-12 rounded-2xl transform rotate-1 shadow-2xl">
              <p className="text-2xl md:text-4xl font-display uppercase italic text-primary">
                "Técnica e físico qualquer um treina. O que realmente aprova é vontade demonstrada em campo."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. Protocolo em 3 fases */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-16">
              Protocolo em <span className="text-primary">3 fases</span>
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              { phase: "Fase 1", days: "Dias 1 a 7: Base", desc: "Ritmo, condicionamento e fundamentos técnicos." },
              { phase: "Fase 2", days: "Dias 8 a 14: Intensificação", desc: "Explosão, velocidade, resistência específica e técnica sob pressão." },
              { phase: "Fase 3", days: "Dias 15 a 21: Simulação", desc: "Treinos que simulam a peneira real: decisão, pressão, confiança e entrega máxima." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-card border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                  <div className="bg-white/5 px-6 py-3 rounded-lg border border-white/10 shrink-0 min-w-[200px]">
                    <span className="text-primary font-bold block">{item.phase}</span>
                    <span className="text-white font-display text-xl">{item.days}</span>
                  </div>
                  <p className="text-xl text-gray-300 font-medium">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Sobre o Autor */}
      <section className="py-20 bg-card border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="aspect-[4/5] rounded-2xl border-2 border-primary/50 overflow-hidden bg-background relative flex items-center justify-center">
                {/* Placeholder for author image */}
                <User className="w-32 h-32 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-display text-white">Rafael Duarte</h3>
                  <p className="text-primary font-medium">Mentor Esportivo</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">
                Quem é <span className="text-primary">Rafael Duarte?</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Rafael Duarte é mentor esportivo focado em preparação de jovens atletas para peneiras e avaliações de futebol. Depois de acompanhar de perto os erros mais comuns cometidos por jogadores em testes, criou o Desafio de 21 Dias para ajudar atletas a treinarem com mais direção, confiança e estratégia.
                </p>
                <p className="p-6 bg-white/5 border-l-4 border-primary rounded-r-lg">
                  O foco do método não é prometer aprovação garantida, mas ajudar o atleta a chegar mais preparado, entender o que os avaliadores observam e demonstrar melhor seu potencial dentro de campo.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-16">
              O que dizem os <span className="text-primary">atletas</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Gabriel M.", age: "16 anos, Goiânia/GO", text: "Eu achava que só precisava treinar mais, mas percebi que tava errando justamente na hora da peneira. Depois do desafio comecei a entrar em campo com mais confiança, pedir mais a bola e participar mais do jogo." },
              { name: "Lucas R.", age: "15 anos, Campinas/SP", text: "O que mais gostei foi que não fica só na teoria. Cada dia tem uma tarefa clara pra fazer. Antes eu chegava nervoso e travava, agora já sei o que o avaliador observa." },
              { name: "Enzo T.", age: "17 anos, Belo Horizonte/MG", text: "Já tinha participado de outras peneiras e nunca entendia por que não era escolhido. O desafio me ajudou principalmente na parte mental e na atitude em campo." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-card border border-white/10 p-8 rounded-2xl h-full flex flex-col relative">
                  <div className="flex text-primary mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-8 italic flex-grow">"{item.text}"</p>
                  <div>
                    <p className="font-bold text-white text-lg">{item.name}</p>
                    <p className="text-primary text-sm">{item.age}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Bônus do Plano Premium */}
      <section className="py-24 bg-card border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-6">
              Bônus do <span className="text-primary">Plano Premium</span>
            </h2>
            <p className="text-center text-xl text-gray-400 mb-16">
              No Plano Premium você leva tudo isso junto com o Desafio completo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "Treinos de Velocidade para Futebol",
              "Treinos para Fazer em Casa",
              "Guia de Alimentação para Atletas",
              "Como Montar Sua Rotina de Treinos",
              "Checklist Completo do Dia da Peneira"
            ].map((bonus, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-background border border-primary/20 p-6 rounded-xl flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-bold text-lg">{bonus}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <p className="text-gray-400 text-lg">Valor total dos bônus: <span className="line-through text-red-500 font-bold">R$ 137,00</span></p>
            <p className="text-2xl font-bold text-primary mt-2">Hoje por R$ 0,00 no Plano Premium</p>
          </FadeIn>
        </div>
      </section>

      {/* 14. Pricing */}
      <section id="pricing" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
              Escolha seu <span className="text-primary">plano</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Base */}
            <FadeIn>
              <div className="bg-card border border-white/10 rounded-3xl p-8 flex flex-col h-full">
                <h3 className="text-3xl font-display text-white mb-2">Plano Base</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-bold text-white">R$ 17,90</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Desafio completo de 21 dias",
                    "Como funcionam as peneiras",
                    "6 pilares da aprovação",
                    "Capítulos extras"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full h-14 text-lg font-bold uppercase bg-white text-black hover:bg-gray-200"
                  data-testid="btn-buy-base"
                >
                  Quero o Plano Base
                </Button>
              </div>
            </FadeIn>

            {/* Plano Premium */}
            <FadeIn delay={0.2}>
              <div className="bg-card border-2 border-primary rounded-3xl p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold uppercase text-sm px-6 py-1 rounded-full whitespace-nowrap">
                  Mais escolhido
                </div>
                
                <h3 className="text-3xl font-display text-white mb-2">Plano Premium</h3>
                <div className="flex flex-col mb-8">
                  <span className="text-sm text-gray-400 line-through">De R$ 164,90 por apenas</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">R$ 27,90</span>
                  </div>
                  <span className="text-sm text-primary font-bold mt-1 bg-primary/10 self-start px-2 py-1 rounded">Você economiza mais de R$ 130</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-white font-bold pb-2 border-b border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Tudo do Plano Base +</span>
                  </li>
                  {[
                    "Treinos de Velocidade",
                    "Treinos para Fazer em Casa",
                    "Guia de Alimentação",
                    "Rotina de Treinos",
                    "Checklist do Dia da Peneira"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full h-14 text-lg font-bold uppercase bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                  data-testid="btn-buy-premium"
                >
                  Quero o Plano Premium
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 13. Guarantee */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card border border-white/10 p-8 rounded-2xl">
          <div className="bg-primary/10 p-4 rounded-full">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Garantia de 7 dias</h3>
            <p className="text-gray-400">
              Você pode entrar no desafio hoje, acessar todo o conteúdo e testar sem risco. Se perceber que o material não é para você, basta solicitar o reembolso dentro do prazo de 7 dias.
            </p>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-center mb-12">
              Perguntas <span className="text-primary">frequentes</span>
            </h2>
          </FadeIn>

          <Accordion type="single" collapsible className="w-full space-y-4" data-testid="faq-accordion">
            {[
              { q: "O acesso é imediato?", a: "Sim, você recebe o acesso ao desafio imediatamente após a confirmação do pagamento no seu e-mail." },
              { q: "Funciona para qualquer posição?", a: "Sim, o método aborda atitude, preparação física, mentalidade e comportamento tático, o que é fundamental para qualquer posição no campo." },
              { q: "Preciso de academia?", a: "Não, a maioria dos exercícios propostos pode ser feita com o mínimo de equipamento ou com o peso do próprio corpo em qualquer espaço aberto." },
              { q: "Tenho garantia?", a: "Sim, você tem 7 dias de garantia incondicional. Se não gostar do conteúdo, devolvemos 100% do seu dinheiro." },
              { q: "Serve para quem já foi reprovado?", a: "Especialmente desenvolvido para quem já foi reprovado. O desafio vai te mostrar exatamente onde você pode estar errando sem perceber." },
              { q: "É promessa de aprovação garantida?", a: "Não. Nenhum método sério pode garantir aprovação. O objetivo é aumentar sua preparação, confiança e clareza sobre o que fazer antes, durante e depois da peneira, aumentando drasticamente suas chances reais." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg px-6 bg-background data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-bold text-left hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 16. Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 text-white leading-tight">
              Sua próxima peneira pode ser <span className="text-primary">diferente</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Pare de treinar no escuro. Siga um plano de 21 dias e chegue mais preparado para mostrar seu futebol.
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-xl h-16 px-12 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-black transition-all hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.5)]"
              onClick={scrollToPricing}
              data-testid="btn-final-cta"
            >
              Começar agora
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 17. Footer */}
      <footer className="py-8 text-center bg-black border-t border-white/10">
        <p className="text-primary font-display text-xl mb-2">Desafio de 21 Dias</p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        <p className="text-gray-600 text-xs mt-2 max-w-2xl mx-auto px-4">
          Este site não faz parte e nem é endossado pelo Facebook ou Google. A preparação não garante aprovação, o sucesso depende do esforço e dedicação de cada atleta.
        </p>
      </footer>

      {/* Animated Popups overlay */}
      <NotificationPopups />
    </div>
  );
}

export default App;
