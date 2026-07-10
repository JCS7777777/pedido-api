markdown
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

https://github.com/JardelMiranda/pedido-api/actions/workflows/node.js.yml/badge.svg

👤 Autor
Josimar