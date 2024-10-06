export const DIRECTIVE_TYPES = {
  LAW: "law",
  ROYAL_DECREE: "royal-decree",
  SUB_DECREE: "sub-decree",
  CIRCULATION: "circulation",
  PRAKAS: "prakas",
  DECISION: "decision",
  GUIDELINE: "guideline",
} as const;

export type DirectiveType =
  (typeof DIRECTIVE_TYPES)[keyof typeof DIRECTIVE_TYPES];
