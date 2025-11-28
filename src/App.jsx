import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Code2, 
  Database, 
  GitBranch, 
  Monitor, 
  Settings, 
  BarChart3, 
  Shield, 
  Zap,
  Users,
  BookOpen,
  MessageSquare,
  Upload,
  Download,
  Bot,
  Cpu,
  Network,
  Activity,
  Search,
  Bell,
  Heart,
  MessageCircle
} from 'lucide-react'
import { NewPostModal } from './components/NewPostModal.jsx'
import { UploadModal } from './components/UploadModal.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('tools')
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'João Silva',
      content: 'Nova versão do microserviço de autenticação deployada! 🚀',
      time: '2h atrás',
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      author: 'Maria Santos',
      content: 'Alguém já testou a nova feature de cache distribuído?',
      time: '4h atrás',
      likes: 8,
      comments: 5
    },
    {
      id: 3,
      author: 'Pedro Costa',
      content: 'Documentação do API Gateway atualizada no GitLab',
      time: '6h atrás',
      likes: 15,
      comments: 2
    }
  ])

  const [learningResources, setLearningResources] = useState([
    {
      id: 1,
      title: 'Kubernetes Fundamentals',
      type: 'PDF',
      author: 'DevOps Team',
      downloads: 45
    },
    {
      id: 2,
      title: 'React Best Practices',
      type: 'Video',
      author: 'Frontend Team',
      downloads: 32
    },
    {
      id: 3,
      title: 'Microservices Architecture',
      type: 'PDF',
      author: 'Architecture Team',
      downloads: 67
    }
  ])

  const devTools = [
    {
      name: 'GitLab',
      description: 'Repositório de código e CI/CD',
      icon: GitBranch,
      url: 'https://gitlab.com',
      status: 'online',
      category: 'Version Control'
    },
    {
      name: 'DAS',
      description: 'Sistema de análise de dados',
      icon: Database,
      url: '#',
      status: 'online',
      category: 'Analytics'
    },
    {
      name: 'n8n',
      description: 'Automação de workflows',
      icon: Zap,
      url: 'https://n8n.io',
      status: 'online',
      category: 'Automation'
    },
    {
      name: 'VS Code Server',
      description: 'Editor de código na nuvem',
      icon: Code2,
      url: '#',
      status: 'online',
      category: 'Development'
    }
  ]

  const devopsTools = [
    {
      name: 'Grafana',
      description: 'Dashboards e visualização',
      icon: BarChart3,
      url: 'https://grafana.com',
      status: 'online',
      category: 'Monitoring'
    },
    {
      name: 'Prometheus',
      description: 'Monitoramento e alertas',
      icon: Activity,
      url: 'https://prometheus.io',
      status: 'online',
      category: 'Monitoring'
    },
    {
      name: 'Kubernetes',
      description: 'Orquestração de containers',
      icon: Network,
      url: 'https://kubernetes.io',
      status: 'online',
      category: 'Orchestration'
    },
    {
      name: 'Docker Registry',
      description: 'Registro de imagens',
      icon: Monitor,
      url: '#',
      status: 'online',
      category: 'Registry'
    }
  ]

  const handleNewPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      author: 'Você',
      content,
      time: 'agora',
      likes: 0,
      comments: 0
    }
    setPosts([newPost, ...posts])
  }

  const handleUpload = (formData) => {
    const newResource = {
      id: learningResources.length + 1,
      title: formData.title,
      type: formData.type,
      author: formData.author,
      downloads: 0
    }
    setLearningResources([newResource, ...learningResources])
  }

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ))
  }

  const ToolCard = ({ tool, isDevOps = false }) => {
    const IconComponent = tool.icon
    return (
      <Card className="card-hover tech-border bg-card/50 backdrop-blur-sm group">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg transition-all duration-300 ${isDevOps ? 'bg-accent/20 group-hover:bg-accent/30' : 'bg-primary/20 group-hover:bg-primary/30'}`}>
                <IconComponent className={`h-5 w-5 transition-all duration-300 ${isDevOps ? 'text-accent group-hover:scale-110' : 'text-primary group-hover:scale-110'}`} />
              </div>
              <div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {tool.category}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
              <span className="text-xs text-muted-foreground">{tool.status}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{tool.description}</CardDescription>
          <Button 
            className={`w-full transition-all duration-300 ${isDevOps ? 'bg-accent hover:bg-accent/80 hover:scale-105' : 'bg-primary hover:bg-primary/80 hover:scale-105'}`}
            onClick={() => window.open(tool.url, '_blank')}
          >
            Acessar
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-primary neon-text floating" />
                <h1 className="text-2xl font-bold neon-text">OurHouse-Lab DevHub</h1>
              </div>
              <Badge variant="outline" className="text-xs">
                Centro de Desenvolvimento
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar..." 
                  className="pl-10 w-64 bg-background/50"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <HeroSection />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 mt-16">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="tools" className="flex items-center space-x-2 transition-all duration-300">
              <Cpu className="h-4 w-4" />
              <span>Ferramentas</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center space-x-2 transition-all duration-300">
              <MessageSquare className="h-4 w-4" />
              <span>Mural</span>
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center space-x-2 transition-all duration-300">
              <BookOpen className="h-4 w-4" />
              <span>Aprendizado</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center space-x-2 transition-all duration-300">
              <Users className="h-4 w-4" />
              <span>Equipe</span>
            </TabsTrigger>
          </TabsList>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            {/* Dev Tools Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Code2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Ferramentas de Desenvolvimento</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {devTools.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </section>

            {/* DevOps Tools Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-bold">Ferramentas DevOps</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {devopsTools.map((tool, index) => (
                  <ToolCard key={index} tool={tool} isDevOps={true} />
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Social Tab */}
          <TabsContent value="social" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Mural da Equipe</h2>
              <Button 
                className="bg-primary hover:bg-primary/80 hover:scale-105 transition-all duration-300"
                onClick={() => setIsNewPostModalOpen(true)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Nova Postagem
              </Button>
            </div>
            
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{post.author}</span>
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                        </div>
                        <p className="text-foreground mb-3">{post.content}</p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className="hover:text-red-400 transition-colors"
                          >
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:text-blue-400 transition-colors">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments} Comentários
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learning" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Centro de Aprendizado</h2>
              <Button 
                className="bg-accent hover:bg-accent/80 hover:scale-105 transition-all duration-300"
                onClick={() => setIsUploadModalOpen(true)}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningResources.map((resource) => (
                <Card key={resource.id} className="card-hover bg-card/50 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">{resource.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{resource.type}</Badge>
                      <span className="text-sm text-muted-foreground">por {resource.author}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {resource.downloads} downloads
                      </span>
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-all duration-300">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <h2 className="text-2xl font-bold">Equipe Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Carlos Lima'].map((name, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="font-medium">
                          {name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">{name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
                          <span className="text-sm text-muted-foreground">Online</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modals */}
      <NewPostModal 
        isOpen={isNewPostModalOpen}
        onClose={() => setIsNewPostModalOpen(false)}
        onSubmit={handleNewPost}
      />
      
      <UploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSubmit={handleUpload}
      />
    </div>
  )
}

export default App

