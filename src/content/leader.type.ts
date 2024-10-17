export const LEADERS_TYPES = {
  CHAIR: "chair",
  COMMISSIONERCARD: "comissioner",
  COMMISSIONER: "comssionerone",
  DIRECTOR: "director",
} as const;

export type LeadersType = (typeof LEADERS_TYPES)[keyof typeof LEADERS_TYPES];
