const Attribution = ({ small }) => {
  return (
    <div className={`attribution ${small && 'small'}`}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </a>
      . Coded by <a href='https://github.com/tezarsurya'>tezarsurya</a>.
    </div>
  );
};

export default Attribution;
