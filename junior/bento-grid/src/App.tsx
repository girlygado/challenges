import CreateScheduleCard from './components/CreateScheduleCard';
import FollowerGrowthCard from './components/FollowerGrowthCard';
import MaintainScheduleCard from './components/MaintainScheduleCard';
import ManageFollowersCard from './components/ManageFollowersCard';
import PercentGrowthCard from './components/PercentGrowthCard';
import ScheduleSocialMediaCard from './components/ScheduleSocial/ScheduleSocialMediaCard';
import SocialMediaMainCard from './components/SocialMediaMainCard';
import WriteContentCard from './components/WriteContentCard';

function App() {
	return (
		<main className='bento py-10 px-5 gap-8'>
			<SocialMediaMainCard />
			<ManageFollowersCard />
			<MaintainScheduleCard />
			<ScheduleSocialMediaCard />
			<FollowerGrowthCard />
			<PercentGrowthCard />
			<section className="bigCol gap-8">
				<CreateScheduleCard />
				<WriteContentCard />
			</section>
		</main>
	);
}

export default App;
