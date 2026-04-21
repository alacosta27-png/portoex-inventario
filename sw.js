/**
 * ============================================================
 *  PORTOEX INVENTÁRIO — CONFIGURAÇÃO DO FIREBASE
 * ============================================================
 *
 *  PASSO A PASSO PARA CONFIGURAR:
 *
 *  1. Acesse https://console.firebase.google.com
 *  2. Clique em "Adicionar projeto" → nomeie como "portoex-inventario"
 *  3. Vá em "Build" > "Realtime Database" → clique "Criar banco de dados"
 *     - Escolha a região: nam5 (us-central) ou europe-west1
 *     - Modo: "Começar no modo de teste" (por 30 dias) ou configure regras abaixo
 *  4. Vá em "Configurações do projeto" > "Seus apps" > clique no ícone Web </>
 *  5. Registre o app com o nome "portoex-inventario"
 *  6. Copie as credenciais e cole nos campos abaixo
 *
 *  REGRAS DO BANCO DE DADOS (cole em Realtime Database > Regras):
 *  {
 *    "rules": {
 *      ".read": true,
 *      ".write": true
 *    }
 *  }
 *  (Para produção, restrinja por autenticação)
 *
 * ============================================================
 */

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCqc7fvri9fm3a2XJ-5M60GIFEYsUdbGoM",
  authDomain:        "portoex-inventario.firebaseapp.com",
  databaseURL:       "https://portoex-inventario-default-rtdb.firebaseio.com",
  projectId:         "portoex-inventario",
  storageBucket:     "portoex-inventario.firebasestorage.app",
  messagingSenderId: "863156663581",
  appId:             "1:863156663581:web:fc1196b4934bc4c0689df4",
  measurementId:     "G-R32BL40Q6P"
};
