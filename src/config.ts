/**
 * CONFIGURAÇÃO DO WEBHOOK DO GOOGLE APPS SCRIPT
 * 
 * A URL é lida exclusivamente a partir da variável de ambiente VITE_WEBHOOK_URL.
 */
export const DEFAULT_WEBHOOK_URL: string = 
  (import.meta.env.VITE_WEBHOOK_URL as string | undefined)?.trim() || 
  'https://script.google.com/macros/s/AKfycbwYOUR_SCRIPT_ID/exec';

const STORAGE_KEY_HISTORY = 'patrimonio_historico_registros';

/**
 * Retorna exclusivamente a URL configurada no ambiente (VITE_WEBHOOK_URL)
 */
export function getActiveWebhookUrl(): string {
  return DEFAULT_WEBHOOK_URL;
}

export const STORAGE_KEYS = {
  HISTORY: STORAGE_KEY_HISTORY,
};

// Lista exata de localizações predefinidas para o menu suspenso (select)
export const LOCAIS_PREDEFINIDOS = [
  'ARQUIVO MORTO',
  'BANHEIRO MASCULINO',
  'COZINHA',
  'DISPENSA',
  'IMOVEL',
  'PATIO',
  'PLENÁRIO',
  'SALA ANGELICA',
  'SALA ASSESSOR DE PLENARIO',
  'SALA CLAUDIO',
  'SALA COLMAR',
  'SALA DIRETORA LEGISLATIVA',
  'SALA EDEGAR',
  'SALA ILVO',
  'SALA INGRIDE',
  'SALA JODELO',
  'SALA PRESIDENCIA',
  'SALA RAFAEL',
] as const;

export const ESTADOS_CONSERVACAO = [
  'Bom (Em uso ou pronto para uso)',
  'Regular (Com avarias estéticas, funcional)',
  'Danificado / Sucata (Inoperante)',
  'Aguardando Avaliação Técnica',
];

// Opções obrigatórias para o formulário de Bem Inservível
export const CLASSIFICACOES_INSERVIVEL = [
  'Ocioso',
  'Recuperável',
  'Antieconômico',
  'Irrecuperável (Sucata)',
] as const;

