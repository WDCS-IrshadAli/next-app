import { fetchRevenue } from '@/app/lib/data';
import RevenueChartx from '@/app/ui/dashboard/revenue-chart';


export default async function RevenueChart() { // Make component async, remove the props
    const revenue = await fetchRevenue(); // Fetch data inside the component
      
    if (!revenue || revenue.length === 0) {
      return <p className="mt-4 text-gray-400">No data available.</p>;
    }
   
    return (
        <>
            <RevenueChartx revenue={revenue} />
        </>
    );
  }