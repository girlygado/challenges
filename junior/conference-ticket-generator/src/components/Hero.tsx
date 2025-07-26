import React from 'react';
import useTicketStore from '../store/useTicketStore';

const Hero: React.FC = () => {
  const { isRegistered, name, email } = useTicketStore((state) => state);

  return (
    <section className="hero">
      {isRegistered ? (
        <>
          <h1 className="hero__title">
            Congrats, <span className="hero__title--highlight">{name}!</span> Your ticket is ready.
          </h1>
          <p className="hero__subtitle">
            We've emailed your ticket to <span className="hero__subtitle--highlight">{email}</span>{' '}
            and will send updates in the run up to the event.
          </p>
        </>
      ) : (
        <>
          <h1 className="hero__title">Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className="hero__subtitle">
            Secure your spot at next year's biggest coding conference.
          </p>
        </>
      )}
    </section>
  );
};

export default Hero;
