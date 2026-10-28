import { useState } from 'react'
import {
  Zap, ShieldCheck, Clock3, ClipboardCheck, ArrowUpRight, Menu, X,
  Lightbulb, Wrench, Cable, Waves, Gauge, CheckCircle2, MapPin,
  CalendarClock, ChevronDown, AlertTriangle, CreditCard, Phone
} from 'lucide-react'
import logo from "../src/assets/logo-volt-prime.png";
import banner from './assets/volt-prime-banner.png'

const services = [
  { icon: Cable, title: 'Instalações elétricas', text: 'Novos pontos, tomadas, interruptores e circuitos planejados para as necessidades do seu imóvel.' },
  { icon: Wrench, title: 'Reparos e manutenção', text: 'Investigação de falhas, tomadas com mau funcionamento e interrupções em circuitos.' },
  { icon: Lightbulb, title: 'Iluminação e ventiladores', text: 'Instalação de luminárias, plafons, lustres e ventiladores de teto, após avaliação do local.' },
  { icon: Gauge, title: 'Disjuntores e quadros', text: 'Inspeção, substituição de componentes e organização do quadro elétrico.' },
  { icon: Waves, title: 'Instalação de chuveiros', text: 'Instalação ou substituição com verificação de compatibilidade e condições de segurança.' },
  { icon: ShieldCheck, title: 'Revisão preventiva', text: 'Avaliação das condições aparentes para identificar sinais de desgaste e necessidades de manutenção.' },
]

const prices = [
  ['Visita técnica diagnóstica', 'R$ 80,00'],
  ['Instalação de tomada', 'A partir de R$ 90,00'],
  ['Instalação de luminária simples', 'A partir de R$ 100,00'],
  ['Instalação de chuveiro elétrico', 'A partir de R$ 120,00'],
  ['Troca de disjuntor', 'A partir de R$ 130,00'],
  ['Instalação de ventilador de teto', 'A partir de R$ 180,00'],
  ['Atendimento emergencial', 'A partir de R$ 200,00'],
  ['Revisão elétrica básica', 'A partir de R$ 250,00'],
]

const faqs = [
  { q: 'Como solicito um orçamento?', a: 'Neste protótipo, os contatos são demonstrativos e não enviam solicitações. Em uma versão real, o botão poderá abrir uma conversa no WhatsApp para descrever o problema e compartilhar fotos.' },
  { q: 'Os materiais estão incluídos?', a: 'Não necessariamente. Em uma contratação real, o orçamento deve especificar quais materiais estão incluídos e quais serão cobrados separadamente.' },
  { q: 'Há atendimento emergencial?', a: 'O conceito prevê atendimento emergencial mediante disponibilidade. Os detalhes de operação e contato precisariam ser confirmados antes de publicar um site comercial real.' },
  { q: 'Como funciona a garantia?', a: 'A garantia de 90 dias exibida neste projeto é demonstrativa. Condições efetivas devem ser definidas em contrato e respeitar a legislação aplicável.' },
  { q: 'Vocês atendem empresas e condomínios?', a: 'O escopo conceitual inclui pequenos comércios, escritórios e condomínios, mediante avaliação do serviço necessário.' },
]

function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`demo-notice ${compact ? 'demo-notice--compact' : ''}`} role="note">
      <AlertTriangle size={compact ? 15 : 17} aria-hidden="true" />
      <span><strong>PROJETO FICTÍCIO</strong>{compact ? ' · Demonstração para portfólio — não é uma empresa real.' : ' — Este site é uma demonstração de portfólio. Empresa, serviços, preços, experiência e condições apresentados são fictícios.'}</span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const closeMenu = () => setMenuOpen(false)
  const demoAction = () => window.alert('Esta é uma demonstração de portfólio. Os botões de contato ilustram a experiência e ainda não estão conectados a uma empresa real.')

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <DemoNotice />
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Volt Prime — início" onClick={closeMenu}>
            <img src={logo} alt="Logotipo Volt Prime" />
            <span><b>VOLT <em>PRIME</em></b><small>INSTALAÇÕES ELÉTRICAS</small></span>
          </a>
          <button className="mobile-menu" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Sobre o projeto</a>
            <a href="#valores" onClick={closeMenu}>Valores</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <button className="button button--small" onClick={demoAction}>Solicitar orçamento <ArrowUpRight size={16} /></button>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> ENERGIA • SEGURANÇA • CONFIANÇA</div>
              <h1>Energia segura.<br /><span>Soluções inteligentes</span><br />para o seu imóvel.</h1>
              <p className="hero-lead">Instalações, reparos e manutenção elétrica com agilidade, transparência e compromisso com a sua segurança.</p>
              <div className="hero-actions">
                <button className="button" onClick={demoAction}>Solicitar orçamento <ArrowUpRight size={18} /></button>
                <a className="button button--ghost" href="#servicos">Conhecer serviços <span>↓</span></a>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={20} /></div>
                <div><strong>Segurança em cada detalhe</strong><small>Planejamento, cuidado e clareza em cada etapa.</small></div>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-frame">
                <img src={banner} alt="Arte visual da marca Volt Prime, usada como imagem de destaque do projeto conceitual" />
                <div className="art-caption"><span className="caption-icon"><Zap size={18} /></span><div><strong>Potência com propósito.</strong><small>Soluções elétricas sob medida</small></div></div>
              </div>
              <div className="floating-tag"><span className="tag-bolt"><Zap size={20} fill="currentColor" /></span><span><strong>Volt Prime</strong><small>Projeto demonstrativo</small></span></div>
              <div className="hero-ring" />
            </div>
          </div>
          <div className="container hero-bottom">
            <span><ShieldCheck size={17} /> Foco em segurança</span>
            <span><ClipboardCheck size={17} /> Orçamento transparente</span>
            <span><Clock3 size={17} /> Atendimento planejado</span>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid">
            <div>
              <div className="section-kicker">SOBRE A VOLT PRIME</div>
              <h2>Mais clareza para decidir.<br /><span>Mais cuidado em cada conexão.</span></h2>
            </div>
            <div className="about-text">
              <p>A Volt Prime é uma <strong>marca fictícia criada para um projeto de portfólio</strong>, com uma proposta de serviços elétricos residenciais e comerciais. O conceito foi pensado para comunicar profissionalismo, organização e atenção à segurança.</p>
              <p>A experiência ilustrada neste site demonstra como uma empresa do segmento poderia apresentar seus serviços, explicar etapas e tornar as informações mais fáceis de encontrar.</p>
              <a href="#servicos" className="text-link">Explore as soluções <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="container feature-grid">
            {[
              { icon: ClipboardCheck, title: 'Orçamento claro', text: 'Escopo e valores apresentados antes de qualquer execução.' },
              { icon: ShieldCheck, title: 'Cuidado com o imóvel', text: 'Organização e atenção às condições de segurança.' },
              { icon: CalendarClock, title: 'Atendimento planejado', text: 'Comunicação direta e agendamento conforme disponibilidade.' },
              { icon: CheckCircle2, title: 'Orientação preventiva', text: 'Informações para reconhecer necessidades de manutenção.' },
            ].map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="servicos" className="section services-section">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">O QUE FAZEMOS</div><h2>Soluções para o dia a dia<br /><span>e para os imprevistos.</span></h2></div>
              <p>Um portfólio conceitual de serviços para instalações residenciais e comerciais, sempre com a segurança como prioridade.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, text }, i) => <article className="service-card" key={title}>
                <div className="service-card-top"><span className="service-icon"><Icon size={24} /></span><span className="service-number">0{i + 1}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <button className="service-link" onClick={demoAction}>Consultar serviço <ArrowUpRight size={16} /></button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container process-grid">
            <div><div className="section-kicker">SIMPLES E TRANSPARENTE</div><h2>Da primeira conversa<br />à solução, <span>sem surpresas.</span></h2><p className="process-intro">O fluxo abaixo ilustra como poderia funcionar o atendimento de uma prestadora real.</p><button className="button" onClick={demoAction}>Simular contato <ArrowUpRight size={17} /></button></div>
            <div className="steps">
              {[
                ['01', 'Conte o que aconteceu', 'Explique o problema e, se possível, compartilhe fotos do local.'],
                ['02', 'Entenda as opções', 'Receba uma avaliação inicial e saiba se será necessária uma visita técnica.'],
                ['03', 'Aprove o orçamento', 'Escopo, materiais e valores devem ser alinhados antes da execução.'],
              ].map(([n, title, text]) => <div className="step" key={n}><div className="step-num">{n}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="valores" className="section prices-section">
          <div className="container price-layout">
            <div className="price-intro">
              <div className="section-kicker">TRANSPARÊNCIA DESDE O INÍCIO</div>
              <h2>Valores para<br /><span>ter como referência.</span></h2>
              <p>Preços ilustrativos incluídos para demonstrar a apresentação de uma tabela comercial. Não são ofertas de uma empresa real.</p>
              <div className="price-note"><AlertTriangle size={19} /><span><strong>Atenção:</strong> todos os valores são fictícios. O preço real dependeria da avaliação técnica, dos materiais e do deslocamento.</span></div>
              <div className="payment-line"><CreditCard size={18} /><span>Formas de pagamento demonstrativas: Pix, dinheiro e cartões.</span></div>
            </div>
            <div className="price-card">
              <div className="price-card-header"><span>GUIA DE PREÇOS</span><span className="demo-pill">DEMONSTRATIVO</span></div>
              {prices.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}
              <p className="price-footnote">Materiais podem ser cobrados à parte. Valores sujeitos a avaliação em um cenário real.</p>
              <button className="button button--full" onClick={demoAction}>Consultar orçamento <ArrowUpRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="safety-section">
          <div className="container safety-inner">
            <div className="safety-symbol"><ShieldCheck size={30} /></div>
            <div><div className="section-kicker">SEGURANÇA EM PRIMEIRO LUGAR</div><h2>Eletricidade exige cuidado.<br /><span>Não improvise reparos.</span></h2><p>Em caso de fumaça, cheiro de queimado, faíscas ou risco de choque, não toque nos equipamentos nem tente consertar. Afaste-se da área e procure ajuda especializada. Em incêndio ou perigo imediato, acione os serviços públicos de emergência.</p></div>
          </div>
        </section>

        <section id="duvidas" className="section faq-section">
          <div className="container faq-layout">
            <div><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Informação clara<br /><span>faz diferença.</span></h2><p>Respostas demonstrativas para dúvidas comuns sobre serviços elétricos.</p></div>
            <div className="faq-list">
              {faqs.map((faq, i) => <div className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`} key={faq.q}>
                <button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{faq.q}</span><ChevronDown size={19} /></button>
                {openFaq === i && <p>{faq.a}</p>}
              </div>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div><div className="section-kicker">VOLT PRIME · PROJETO CONCEITUAL</div><h2>Precisando de um eletricista?<br /><span>Vamos resolver com segurança.</span></h2><p>Conheça uma proposta de comunicação para serviços elétricos: organizada, direta e centrada na segurança.</p></div>
            <button className="button button--light" onClick={demoAction}>Solicitar orçamento <ArrowUpRight size={18} /></button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand"><a href="#inicio" className="brand"><img src={logo} alt="" /><span><b>VOLT <em>PRIME</em></b><small>INSTALAÇÕES ELÉTRICAS</small></span></a><p>Energia segura. Soluções inteligentes para o seu imóvel.</p><span className="footer-demo">MARCA FICTÍCIA · PORTFÓLIO</span></div>
          <div className="footer-col"><h3>Navegação</h3><a href="#servicos">Serviços</a><a href="#sobre">Sobre o projeto</a><a href="#valores">Valores demonstrativos</a><a href="#duvidas">Dúvidas frequentes</a></div>
          <div className="footer-col"><h3>Área ilustrativa</h3><span><MapPin size={15} /> Caraguatatuba — SP</span><span><Clock3 size={15} /> Seg–Sex: 8h–18h</span><span><Phone size={15} /> Contato não conectado</span><small>Localização e horários são fictícios.</small></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Volt Prime — conceito visual para portfólio.</span><span>Não representa uma prestadora real de serviços.</span></div>
        <div className="container footer-notice"><DemoNotice compact /></div>
      </footer>
    </div>
  )
}