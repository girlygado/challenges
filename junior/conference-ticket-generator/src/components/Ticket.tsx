import IconLogo from '/images/logo-full.svg';
import GithubLogo from '/images/icon-github.svg';
import useTicketStore from '../store/useTicketStore';
import moment from 'moment';

const Ticket = () => {
  const { name, username, avatar } = useTicketStore((state) => state);
	const currentDate = moment().format('MMM DD, YYYY')
	const ticketNumber = Math.floor(Math.random() * 100000);
	const formattedTicket = String(ticketNumber).padStart(5, '0');

  return (
    <div className="ticket-wrapper">
      <article className="ticket">
        <div className="ticket__header">
          <div className="ticket__branding">
            <img src={IconLogo} alt="Coding Conf" className="ticket__logo" />
						<p className="ticket__event-address">{currentDate} / Austin, TX</p>
          </div>

          <div className="ticket__user-profile">
            <figure className="ticket__user-avatar">
              <img src={avatar?.preview} alt={`${name}'s avatar`} className="ticket__user-avatar-img"/>
            </figure>

            <div className="ticket__user">
              <p className="ticket__user-name">{name}</p>
              <p className="ticket__user-username"><img src={GithubLogo} alt={`Github`} className="ticket__user-username-icon"/> @{username}</p>
            </div>
          </div>
        </div>

				<div className="ticket__side">
          <div className="ticket__side-id">#{formattedTicket}</div>
        </div>
      </article>
    </div>
  );
};

export default Ticket;
