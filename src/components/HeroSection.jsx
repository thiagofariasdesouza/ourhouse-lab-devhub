import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Zap, Shield, Users } from 'lucide-react'
import robotHero from '../assets/robot-hero.png'

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 matrix-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/50">
                🤖 Powered by AI & Automation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="neon-text">OurHouse-Lab</span>
                <br />
                <span className="text-primary">DevHub</span>
                <br />
                <span className="text-muted-foreground">Centro de</span>
                <br />
                <span className="text-accent">Desenvolvimento</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plataforma unificada para desenvolvedores e DevOps. 
                Acesse todas as ferramentas, colabore com a equipe e 
                acelere seu aprendizado em um só lugar.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>Automação Inteligente</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>Segurança Avançada</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Colaboração em Tempo Real</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-lg px-8 hover:scale-105 transition-all duration-300">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-all duration-300">
                Ver Demonstração
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 floating">
              <img 
                src={robotHero} 
                alt="Robô Futurista OurHouse-Lab DevHub" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

