import Header from './header';
import RecentApplications from './recent-applications';
import StatsOverview from './stats-overview';
import UpcomingInterviews from './upcoming-interviews';

export default function Dashboard() {
  return (
    <div className="px-5 pt-8 md:px-10 lg:px-16 xl:px-20">
      <Header />
      <StatsOverview />
      <RecentApplications />
      <UpcomingInterviews />
    </div>
  );
}
