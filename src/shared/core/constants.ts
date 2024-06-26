export const ROUTE_SECTIONS = {
  ORGS: 'organizations' as const,
  PROJECTS: 'projects' as const,
  INVESTORS: 'investors' as const,
  COMMUNITIES: 'communities' as const,
  CHAINS: 'chains' as const,
} as const;
export type RouteSection = (typeof ROUTE_SECTIONS)[keyof typeof ROUTE_SECTIONS];

export const ROUTE_TABS = {
  SHARED: {
    DETAILS: 'details',
    ORG: 'organization',
  },
  JOBS: {
    PROJECTS: 'projects',
    COMPETITORS: 'competitors',
    OTHER_JOBS: 'other-jobs',
  },
  ORGS: {
    PROJECTS: 'projects',
    JOBS: 'jobs',
    REVIEWS: 'reviews',
  },
};

export const HREFS = {
  HOME_PAGE: '/',
  ORGS_PAGE: `/${ROUTE_SECTIONS.ORGS}`,
  PROJECTS_PAGE: `/${ROUTE_SECTIONS.PROJECTS}`,
  INVESTORS_PAGE: `/${ROUTE_SECTIONS.INVESTORS}`,
  COMMUNITIES_PAGE: `/${ROUTE_SECTIONS.COMMUNITIES}`,
  CHAINS_PAGE: `/${ROUTE_SECTIONS.CHAINS}`,
} as const;

export const A11Y = {
  LINK: {
    BACK: 'Back',
    NAV: {
      ORGS: 'Organizations',
      PROJECTS: 'Projects',
      INVESTORS: 'Investors',
      COMMUNITIES: 'Communities',
      CHAINS: 'Chains',
    },
  },
} as const;

export const QUERY_STALETIME = {
  DEFAULT: 1000 * 60 * 60, // 1 hr
} as const;

export const JOB_SENIORITY_MAP = {
  Intern: '1',
  Junior: '2',
  Senior: '3',
  Lead: '4',
  Head: '5',
} as const;

export const JOB_SENIORITY_SET = new Set(Object.keys(JOB_SENIORITY_MAP));

export const TEST_IDS = {
  MOBILE_MENU: 'mobile-menu',
  DETAILS_BACK: 'details-back',
  NAV_SECTION: 'nav-section',
} as const;
