import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { X, Upload, FileText, Video, Image } from 'lucide-react'

export function UploadModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    author: '',
    file: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.type && formData.author) {
      onSubmit(formData)
      setFormData({ title: '', type: '', author: '', file: null })
      onClose()
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF': return <FileText className="h-4 w-4" />
      case 'Video': return <Video className="h-4 w-4" />
      case 'Image': return <Image className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4 bg-card/95 backdrop-blur-md glow-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl">Upload Material</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                placeholder="Nome do material"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Tipo</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>PDF</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Video">
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4" />
                      <span>Vídeo</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Image">
                    <div className="flex items-center space-x-2">
                      <Image className="h-4 w-4" />
                      <span>Imagem</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Autor</Label>
              <Input
                id="author"
                placeholder="Seu nome ou equipe"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Arquivo</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Clique para selecionar ou arraste o arquivo aqui
                </p>
                <Input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" disabled={!formData.title || !formData.type || !formData.author}>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

