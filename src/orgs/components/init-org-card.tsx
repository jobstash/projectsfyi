'use client';

import { usePathname } from 'next/navigation';

import { Spinner } from '@nextui-org/spinner';
import { useAtomValue } from 'jotai';

import { HREFS } from '@/shared/core/constants';

import { OrgListItem } from '@/orgs/core/schemas';
import { getFundingRoundsData } from '@/orgs/utils/get-funding-rounds-data';
import { initOrgAtom } from '@/orgs/core/atoms';
import { initPathAtom } from '@/shared/core/atoms';

import { OrgCard } from './org-card';

interface Props {
  filterParamsString: string;
}

export const InitOrgCard = ({ filterParamsString }: Props) => {
  const pathname = usePathname();

  const initPath = useAtomValue(initPathAtom);
  const initOrg = useAtomValue(initOrgAtom);

  // Do not render if initially on list page
  if (initPath === HREFS.ORGS_PAGE) return null;

  // Do not render if on list page and no initOrg (mobile)
  if (!initOrg && pathname === HREFS.ORGS_PAGE) return null;

  // Render initOrg if set
  if (initOrg) {
    const { lastFundingAmount, lastFundingDate } = getFundingRoundsData(
      initOrg.fundingRounds,
    );

    const orgItem: OrgListItem = {
      ...initOrg,
      url: initOrg.website!,
      jobCount: initOrg.jobs.length,
      projectCount: initOrg.projects.length,
      lastFundingAmount,
      lastFundingDate,
      community: [], // TODO: require mw to return community in org details
    };
    return (
      <OrgCard
        isInit
        orgItem={orgItem}
        filterParamsString={filterParamsString}
      />
    );
  }

  // Defaults to a skeleton
  return <Spinner size="sm" color="white" />;
};
