export const ACTIVE_TYPES = {
  ACTIVE: "actives",
} as const;

export type ActiveType = (typeof ACTIVE_TYPES)[keyof typeof ACTIVE_TYPES];
