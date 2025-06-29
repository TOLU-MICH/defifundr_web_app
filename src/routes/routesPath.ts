export const RoutePaths = {
  ROOT: "/",
  ACCOUNT_TYPES: "/account-types",

  VERIFY_EMAIL: "/auth/verify-email",

  // ACCOUNT_CREATION: "/create-account",
  CREATE_ACCOUNT: "/auth/create-account",
  CREATE_BUSINESS_DETAIL: "/auth/onboarding/add-business-details",
  SIGNIN: "/auth/signin",
  RESET_PASSWORD: "/auth/reset-password",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_OTP: "/auth/reset-otp",
  CREATE_PASSWORD: "/auth/create-password",
  SELECT_ACCOUNT_TYPE: "/auth/onboarding/select-account-type",
  GUIDE: "/guide",

  // Dashboard and main navigation routes
  DASHBOARD: "/dashboard",
  TEAM_CONTRACTS: "/dashboard/team-contracts",
  TEAM_MANAGEMENT: "/dashboard/team-management",
  TEAM_MANAGEMENT_EMPLOYEE: "/dashboard/team-management/employee",
  CONTRACT_DETAIL: "/team-contracts/:contractId",
  PAYROLL: "/dashboard/payroll",
  INVOICES: "/dashboard/invoices",
  BUSINESS: "/dashboard/business",
  SETTINGS: "/dashboard/settings",
};
