# MVN PROJETADOS

Landing page da **MVN PROJETADOS**, metalúrgica e vidraçaria em Macaíba-RN.
Site estático em HTML, CSS e JavaScript puro, sem dependências nem etapa de build.

## Estrutura

```
index.html        Estrutura da página
css/styles.css    Estilos (cores e medidas ficam nas variáveis do :root)
js/script.js      Dados de contato, imagens, menu mobile, FAQ e vídeo do hero
images/           Logo, fotos e vídeo do hero
```

## Editar os dados da empresa

Abra `js/script.js`. No topo está o objeto `CONFIG`:

- `whatsapp`: somente números com DDI e DDD (ex.: `5584997051232`). Todos os botões "Solicitar orçamento" abrem esta conversa.
- `telefone`, `email`, `endereco`, `instagram`: aparecem na seção de contato e no rodapé.
- `mensagemWhatsapp`: texto que já vem escrito na conversa.
- `imagens`: caminho de cada foto da página. Para trocar uma foto, substitua o arquivo em `images/` mantendo o mesmo nome, ou altere o caminho.

## Imagens

| Arquivo | Onde aparece | Proporção |
|---|---|---|
| `hero-desktop.mp4` e `hero-desktop-poster.jpg` | Vídeo do hero no computador (toca uma vez, sem som) e imagem inicial | 16:9 |
| `hero-mobile.mp4` e `hero-mobile-poster.jpg` | Vídeo do hero no celular (telas de até 720px) e imagem inicial | 9:16 |
| `sobre-principal.jpg` | Quem somos, imagem grande | 3:4 |
| `sobre-menor.jpg` | Quem somos, imagem sobreposta | 4:3 |
| `servico-vidracaria.jpg`, `servico-metalurgica.jpg`, `servico-moveis.jpg` | Cards de serviços | 4:5 |
| `aplicacao-residencial.jpg`, `aplicacao-condominios.jpg` | Painéis de aplicações | 4:5 |
| `contato.jpg` | Bloco de contato | 3:2 |
| `logo-circular.jpg` | Cabeçalho, rodapé e ícone da aba | quadrada |

Recomendação: JPG com 200 a 400 KB cada.

## Ver no computador

Abra o `index.html` no navegador. Se o vídeo ou as fontes não carregarem, rode um servidor local:

```
python3 -m http.server 8000
```

e acesse http://localhost:8000.

## Publicar no GitHub Pages

1. Envie todos os arquivos para o repositório.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos. O endereço aparece na mesma tela.
