// import { ArrowPathIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import Image from 'next/image';
// import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

 
export default async function LatestInvoice() { // Remove props
  const latestInvoices = await fetchLatestInvoices();
 
  return (
    <>
       <LatestInvoices latestInvoices={latestInvoices} />
    </>
  );
}