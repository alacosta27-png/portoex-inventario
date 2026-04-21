# PORTOEX Inventário v3.0
## Sistema de Inventário de Galpão — Multi-dispositivo em Tempo Real

---

## ESTRUTURA DE ARQUIVOS

```
portoex-inventario/
├── index.html              ← Página principal
├── manifest.json           ← Configuração PWA
├── sw.js                   ← Service Worker (offline)
├── css/
│   └── app.css             ← Estilos completos
├── js/
│   ├── firebase-config.js  ← ⚠️ CONFIGURAR AQUI
│   ├── db.js               ← Camada de dados
│   └── app.js              ← Lógica do app
└── icons/
    ├── icon-192.png        ← Ícone PWA
    └── icon-512.png        ← Ícone PWA (splash)
```

---

## PASSO 1 — CONFIGURAR O FIREBASE

1. Acesse: https://console.firebase.google.com
2. Crie um novo projeto: **portoex-inventario**
3. Vá em **Build → Realtime Database → Criar banco de dados**
   - Região: `nam5 (us-central)` ou `southamerica-east1`
   - Modo: "Começar no modo de teste"
4. Vá em **Configurações do projeto → Seus apps → Adicionar app Web (</>)**
5. Registre como `portoex-inventario`
6. Copie as credenciais e cole em `js/firebase-config.js`

**Regras do Realtime Database** (cole em Realtime Database → Regras):
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

## PASSO 2 — HOSPEDAR O SISTEMA

### Opção A — Firebase Hosting (RECOMENDADO, gratuito)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Aponte para a pasta portoex-inventario
firebase deploy
```
Você receberá uma URL como: `https://portoex-inventario.web.app`

### Opção B — Netlify (Drag & Drop)
1. Acesse https://netlify.com → faça login
2. Arraste a pasta `portoex-inventario` para o painel
3. Pronto! URL gerada automaticamente

### Opção C — Vercel
```bash
npm install -g vercel
cd portoex-inventario
vercel
```

### Opção D — Servidor local (testes)
```bash
# Python 3
cd portoex-inventario
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

---

## PASSO 3 — INSTALAR NO CELULAR/TABLET (PWA)

### Android (Chrome)
1. Abra a URL no Chrome
2. Aparecerá banner "Adicionar à tela inicial" — toque em **Instalar**
3. Ou: menu (⋮) → "Adicionar à tela inicial"

### iPhone/iPad (Safari)
1. Abra a URL no Safari
2. Toque em compartilhar (□↑)
3. "Adicionar à Tela de Início"

O app funcionará como nativo, com ícone PORTOEX na tela inicial.

---

## FUNCIONALIDADES

| Recurso | Descrição |
|---------|-----------|
| 🔄 Sincronização em tempo real | Firebase Realtime Database — múltiplos dispositivos simultâneos |
| 📱 PWA instalável | Funciona como app nativo no celular/tablet |
| 📷 Leitor de QR/Barcode | ZXing via câmera traseira + digitação manual |
| 🧠 Autocompletar | Base histórica de NF, cliente, vol, endereço |
| 📡 Offline first | Salva localmente e sincroniza ao reconectar |
| 📊 Dashboard | Produção por conferente, cobertura de fotos |
| 📥 Exportação | CSV (Excel) e TXT com cabeçalho PORTOEX |
| 🟢 Presença online | Ver quem está coletando ao mesmo tempo |
| 📰 Feed ao vivo | Atualizações dos outros conferentes em tempo real |

---

## CONFERENTES CADASTRADOS

- ABNER
- LUIZ
- GUILHERME
- PANTCHA
- EMANUEL
- J. GABRIEL
- J. AGUINALDO

Para adicionar/remover, edite o array `OPERADORES` em `js/app.js` e `js/db.js`.

---

## SUPORTE TÉCNICO

- Firebase Docs: https://firebase.google.com/docs/database
- Firebase Console: https://console.firebase.google.com
- PORTOEX: https://www.portoex.com.br
