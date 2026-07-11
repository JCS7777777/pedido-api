# 📦 Pedido API

API simples em **Node.js + Express** para calcular pedidos aplicando desconto percentual.  
Inclui testes automatizados com **Jest** e integração contínua com **GitHub Actions**.

---

## 🚀 Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
Inicie o servidor:

bash
npm start
O servidor ficará disponível em:
http://localhost:3000

🔧 Rotas disponíveis
POST /pedido
Calcula o pedido com desconto.

Body (JSON):

json
{
  "valor": 100,
  "descontoPercentual": 10
}
Resposta:

json
{
  "subtotal": 100,
  "descontoAplicado": 10,
  "totalFinal": 90
}
🧪 Testes
Rodar os testes automatizados:

bash
npm test
⚙️ CI/CD
Este projeto utiliza GitHub Actions para rodar os testes automaticamente a cada push.
Status do build:

![Node.js CI](https://github.com/JCS7777777/pedido-api/actions/workflows/node.js.yml/badge.svg)

📖 Parte Teórica
Contexto do Problema
A empresa fictícia enfrenta dificuldades em manter qualidade de código, cobertura de testes e velocidade de entrega. A equipe de engenharia percebeu que, sem automação e apoio de ferramentas inteligentes, o processo de desenvolvimento se tornava lento, sujeito a erros e com pouca rastreabilidade. O desafio era encontrar soluções que aumentassem a produtividade sem comprometer a confiabilidade.

Papel da IA no Ciclo de Desenvolvimento
Ferramentas de Inteligência Artificial como GitHub Copilot e GitHub Actions têm impacto direto no ciclo de desenvolvimento moderno:

Geração de código: Copilot sugere funções completas a partir de prompts, acelerando a implementação e reduzindo esforço manual.

Testes automatizados: Copilot também auxilia na criação de testes unitários, garantindo maior cobertura e qualidade.

CI/CD com GitHub Actions: Automatiza a instalação de dependências e execução de testes a cada push, evitando que código quebrado seja integrado ao projeto principal.

Essas ferramentas permitem que equipes foquem em lógica de negócio e inovação, enquanto a IA cuida de tarefas repetitivas e garante consistência.

Caso Real Pesquisado
Um exemplo prático é o da GitHub (empresa da Microsoft), que relatou ganhos significativos com o uso do Copilot.
Segundo estudos divulgados pela GitHub, desenvolvedores que utilizam Copilot conseguem concluir tarefas até 55% mais rápido e relatam maior satisfação no processo de codificação.
Além disso, empresas como a Dropbox e a Shopify já adotaram GitHub Actions para automatizar pipelines de CI/CD, reduzindo falhas humanas e acelerando entregas em produção.

Conclusão
O uso de IA no desenvolvimento de software não é apenas uma tendência, mas uma prática que já mostra resultados concretos.
Combinando Copilot para geração de código e testes, e Actions para automação de pipelines, equipes conseguem entregar software com mais qualidade, rapidez e confiança.

👤 Autor
Josimar