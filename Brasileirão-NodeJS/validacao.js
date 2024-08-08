import Joi from 'joi'

// Tenho dois modelos a serem respeitados: 

// Modelo dos dados dos times 
export const modeloTime = Joi.object({
    nome: Joi.string().min(4).required(), // Um campo com valor de texto com no mínimo 4 caracteres e é obrigatório
    sigla: Joi.string().length(3).required(),
    pontos: Joi.number().default(0),
    vitórias: Joi.number().default(0),
    empates: Joi.number().default(0),
    derrotas: Joi.number().default(0),
    golsMarcados: Joi.number().default(0),
    golsSofridos: Joi.number().default(0),
    saldoGols: Joi.number().default(0)
});

// Modelo de atualização
export const modeloAtualizacaoTime = Joi.object({
    nome: Joi.string().min(4),
    sigla: Joi.string().length(3),
    pontos: Joi.number().min(0),
    vitórias: Joi.number().min(0),
    empates: Joi.number().min(0),
    derrotas: Joi.number().min(0),
    golsMarcados: Joi.number().min(0),
    golsSofridos: Joi.number().min(0),
    saldoGols: Joi.number().min(0)
}).min(1); // No mínimo um campo deve ser preenchido para atualizar